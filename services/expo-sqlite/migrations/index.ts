import { type SQLiteDatabase } from "expo-sqlite";

import create_regular_shopping_items_table from "./create_regular_shopping_items"


const runMigrations = async (db: SQLiteDatabase) => {
    await create_regular_shopping_items_table(db)
}

export default runMigrations;