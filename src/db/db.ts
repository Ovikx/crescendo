import { createDB, createTable } from "expo-ink";
import { migrations } from "./migrations";
import { ItemsColumns, PracticeSessionsColumns } from "./tables";

export const db = createDB({
  dbName: "db.crescendo",
  version: 2,
  migrations: migrations,
  autoMigrate: true,
});

export const itemsTable = createTable({
  tableName: "items",
  columns: ItemsColumns,
  db: db,
});

export const sessionsTable = createTable({
  tableName: "sessions",
  columns: PracticeSessionsColumns,
  db: db,
});
