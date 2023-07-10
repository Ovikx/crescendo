import { ColumnDefinition, ColumnType, Entries, SelectOptions, WhereOperators, WhereOptions } from '../types/types';
import { Columns } from '../types/types';
import * as SQLite from 'expo-sqlite';
import { sql } from './utils';

export class Table<T extends object> {
    database: SQLite.WebSQLDatabase;
    name: string;
    columns: Columns<T>;

    constructor(db: SQLite.WebSQLDatabase, name: string, columns: Columns<T>) {
        this.database = db;
        this.name = name;
        this.columns = columns;
    }

    /**
     * Adds this table to the database if it doesn't exist already.
     */
    createTable<T extends ColumnType>() {
        const cols: string[] = [];
        for (const [colName, colDef] of Object.entries(this.columns) as [string, ColumnDefinition<T>][]) {
            let colStr = `${colName} ${colDef.dataType}`;
            if (colDef.constraints) {
                colStr += ` ${colDef.constraints.join(' ')}`;
            }

            if (colDef.default != undefined) {
                console.log('default');
                colStr += ` DEFAULT ${colDef.default}`;
            }

            cols.push(colStr);
        }
    
        const statement = `CREATE TABLE IF NOT EXISTS ${this.name} (${cols.join(', ')});`;
        this.database.transaction(
            tx => tx.executeSql(statement),
            e => console.log(`[ERR] ${e} | Executed SQL: ${statement}`),
            () => console.log(`[OK] Executed SQL: ${statement}`)
        ); // TODO: replace success callback with a user-provided callback
    }

    /**
     * Deletes the table from the database
     */
    deleteTable() {
        this.database.transaction(tx => {
            tx.executeSql(
                `DROP TABLE IF EXISTS ${this.name}`,
                undefined,
                () => console.log('[OK] Dropped the table'),
                (_tx, err) => {
                    console.log(err);
                    return false;
                }
            )
        });
    }

    /**
     * Updates the provided state by performing a `SELECT FROM` operation on this table using the provided query options
     * @param options Query options
     * @returns Array of results
     */
    select(options: SelectOptions<T>, setState: React.Dispatch<React.SetStateAction<T[]>>) {
        // Parse the columns
        const cols = options.columns?.join(', ') ?? '*';
        let statement = `SELECT ${cols} FROM ${this.name}`;

        // Handle ORDER BY options
        if (options.orderBy != undefined) {
            statement += ' ORDER BY';
            const entries = Object.entries(options.orderBy);
            for (let i = 0; i < entries.length; i++) {
                const orderQuery = entries[i];
                statement += ` ${orderQuery[0]} ${orderQuery[1]}`;

                // To not put the comma after the last column
                if (i != entries.length - 1) {
                    statement += ',';
                }
            }
        }

        // Handle LIMIT options
        if (options.limit != undefined) {
            statement += ` LIMIT ${options.limit}`;
        }

        this.database.transaction(tx => {
            tx.executeSql(
                sql`${statement}`,
                undefined,
                (tx, resultSet) => {
                    setState(resultSet.rows._array);
                    console.log(`[OK] Executed a SELECT`);
                },
                (tx, err) => {
                    console.log(err);
                    return false;
                }
            )
        });
    }

    sum(column: keyof T, where: WhereOptions<T>, setState: React.Dispatch<React.SetStateAction<number>>) {
        // TODO
    }
    
    /**
     * Inserts a row into the table
     * @param row Row to insert into the table
     * @param successCallback Callback function to call after a successful transaction
     * @param errorCallback Callback function to call after a failed transaction
     */
    insert(row: T, successCallback?: () => void, errorCallback?: () => void) {
        const columns: string[] = [];
        const values: (string | number)[] = []; // don't input these directly into the SQL
        for (const [key, val] of Object.entries(row)) {
            columns.push(key);
            values.push(val);
        }

        const statement = `INSERT INTO ${this.name} (${columns.join(', ')}) VALUES (${Array(values.length).fill('?').join(', ')});`;
        this.database.transaction( tx => {
            tx.executeSql(
                statement,
                values,
                () => {
                    console.log(`[OK] Executed an INSERT`);
                    if (successCallback) successCallback();
                },
                (tx, err) => {
                    console.log(err);
                    if (errorCallback) errorCallback();
                    return false;
                }
            )
        });
    }

    /**
     * Parses a query model into a string
     * @param where Where options
     * @returns Parsed SQL WHERE clause (excluding the "WHERE")
     */
    protected parseWhere(where: WhereOptions<T>): string { // TODO: make private
        const comparisonOps = new Set(['$eq', '$neq', '$lt', '$lte', '$gt', '$gte']);
        const opToSQL = {
            $eq: '=',
            $neq: '!=',
            $lt: '<',
            $lte: '<=',
            $gt: '>',
            $gte: '>='
        }
    
        const keyIsColumn = (key: string): boolean => {
            return (!comparisonOps.has(key) && key != '$not' && key != '$or');
        }

        const processOperand = (operand: any): string => {
            if (typeof operand == 'string') {
                return `'${operand}'`
            } else {
                return operand.toString();
            }
        }
    
        const parseWhereHelper = (where: WhereOptions<T>): string => {
            const chunks: string[] = [];            
            for (const [key, val] of Object.entries(where) as Entries<WhereOptions<T>>) {
                if (keyIsColumn(key)) { // If the key is a column, then we know the value is either an object or a primitive
                    if (typeof val != 'object') { // If it's not an object operator, then it's an implicit $eq
                        chunks.push(`${key} = ${processOperand(val)}`);
    
                    } else { // Otherwise, it's a series of operators (including $not)
                        const regOpChunks: string[] = [];
                        for (const [innerKey, innerVal] of Object.entries(val as WhereOperators<T, keyof T>) as [keyof typeof opToSQL | '$not', T][]) {
                            if (innerKey != '$not') { // Operator is not $not, so treat as comparison operator
                                regOpChunks.push(`${String(key)} ${opToSQL[innerKey]} ${processOperand(innerVal)}`);
                            } else { // Operator is $not, so recur
                                regOpChunks.push(`NOT ${parseWhereHelper({[key]: innerVal} as WhereOptions<T>)}`);
                            }
                            
                        }
                
                        chunks.push(regOpChunks.join(' AND '));
                    }
                } else if (key == '$or') {
                    // console.log(parseOr(val as WhereOptions<T>[]))
                    const orChunks: string[] = [];
                    for (const whereOption of (val as WhereOptions<T>[])) {
                        orChunks.push(parseWhereHelper(whereOption));
                    }
                    
                    chunks.push(`(${orChunks.join(' OR ')})`);
                 }
            }

            return `(${chunks.join(' AND ')})`;
        }
    
        return parseWhereHelper(where);
    }
}