import { Table } from '../src/table';
import SQLite from 'expo-sqlite';
import { ColumnType, Columns, WhereOptions } from '../types/types';

interface Student {
    name: string;
    age: number;
    gpa: number;
    sat: number;
    money: number;
}

const columns: Columns<Student> = {
    name: {dataType: ColumnType.TEXT},
    age: {dataType: ColumnType.INTEGER},
    gpa: {dataType: ColumnType.REAL},
    sat: {dataType: ColumnType.INTEGER},
    money: {dataType: ColumnType.INTEGER}
}

class TestTable<T extends object> extends Table<T> {
    constructor(columns: Columns<T>) {
        super(undefined as any, 'test', columns);
    }

    testParseWhere(where: WhereOptions<T>) {
        return this.parseWhere(where);
    }
}

const table = new TestTable(columns);

/**
 * Runs a jest test given the actual and expected values
 * @param actual Actual value
 * @param expected Expected value
 */
function runTest<T>(actual: T, expected: T) {
    expect(actual).toBe(expected);
}

/**
 * Wrapper function to simplify the testing process
 * @param where Where options
 * @param expected Expected parsed SQL
 */
function runParseTest(where: WhereOptions<Student>, expected: string) {
    runTest(table.testParseWhere(where), expected);
}

describe('where parser', () => {
    // simple AND/OR
    test('simple AND', () => {
        runParseTest(
            {
                age: 18,
                gpa: 4
            },
            'age = 18 AND gpa = 4'
        );
    });

    test('simple OR', () => {
        runParseTest(
            {
                $or: [
                    { age: 18 },
                    { gpa: 4 },
                    { sat: 1600 }
                ]
            },
            '(age = 18) OR (gpa = 4) OR (sat = 1600)'
        );
    });

    // Comparison operators
    test('1 comparison operators for 1 column', () => {
        runParseTest(
            {
                age: { $gte: 17 }
            },
            'age >= 17'
        );
    });

    test('n comparison operators for 1 column', () => {
        runParseTest(
            {
                age: {
                    $gte: 17,
                    $lt: 23
                }
            },
            'age >= 17 AND age < 23'
        );
    });

    test('n comparison operators for n columns', () => {
        runParseTest(
            {
                age: {
                    $gte: 17,
                    $lt: 23
                },
                money: {
                    $gte: 1000
                },
                sat: {
                    $gte: 1500,
                    $lt: 1600
                }
            },
            'age >= 17 AND age < 23 AND money >= 1000 AND sat >= 1500 AND sat < 1600'
        );
    });

    test('string equivalence', () => {
        runParseTest(
            {
                name: 'Jeff Bezos'
            },
            "name = 'Jeff Bezos'"
        )
    })
})