import { Migrations } from "expo-ink";

export const migrations: Migrations = {
  0: ["ALTER TABLE sessions ADD timeStarted INTEGER"],
  1: [
    "ALTER TABLE sessions ADD rating INTEGER",
    "UPDATE sessions SET rating = 0 WHERE rating IS NULL",
  ],
};
