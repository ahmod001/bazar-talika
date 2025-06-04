import { type SQLiteDatabase } from "expo-sqlite";

const create_regular_shopping_items_table = async (db: SQLiteDatabase) => {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS regular_shopping_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      amount TEXT NOT NULL,
      is_completed INTEGER NOT NULL DEFAULT 0,
      description TEXT
    );
  `);
};



export default create_regular_shopping_items_table;