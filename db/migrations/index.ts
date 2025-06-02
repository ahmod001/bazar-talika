import { DB } from "../types";
import create_regular_shopping_items_table from "./create_regular_shopping_items"


/**
 * Invoke all table's migration function at this master function
 * @param db 
 */

const runMigrations = async (db: DB) => {
    await create_regular_shopping_items_table(db)
}

export default runMigrations;