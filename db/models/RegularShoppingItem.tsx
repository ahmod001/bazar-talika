import openDB from "..";
import { RegularShoppingItem as RegularShoppingItemType } from "./types";

/**
 * @function all
 * 
 * @returns  a collection of records
 */
const all = async () => {
    const db = await openDB();
    return await db.getAllAsync(`SELECT * FROM regular_shopping_items ORDER BY id`);
};


/**
 * @function create insert record in the table
 * 
 * @param data 
 * @returns 
 */
const create = async ({
    description = null,
    ...data
}: RegularShoppingItemType) => {
    const db = await openDB();
    const result = await db.runAsync(
        `INSERT INTO regular_shopping_items (title, amount, is_completed, description) VALUES (?, ?, ?, ?)`,
        [data.title, data.amount, data.is_completed ? 1 : 0, description]
    );
    return result.lastInsertRowId;
};



/**
 * @function update basically updates a record in the table
 * 
 * @param id 
 * @param data 
 */
const update = async (
    id: number,
    data: RegularShoppingItemType
) => {
    const db = await openDB();

    const sql = `
    UPDATE regular_shopping_items 
    SET title = ?, amount = ?, is_completed = ?, description = ? 
    WHERE id = ?
  `;

    await db.runAsync(sql, [
        data.title,
        data.amount,
        data.is_completed ? 1 : 0,
        data.description ?? null,
        id,
    ]);
};


/**
 * @function destroy deletes a record from the table
 * 
 * @param id 
 */
const destroy = async (id: number) => {
    const db = await openDB();
    await db.runAsync(`DELETE FROM regular_shopping_items WHERE id = ?`, [id]);
};



/**
 * @function destroyAll deletes all record from the table
 * 
 * @param id 
 */

const destroyAll = async () => {
    const db = await openDB();
    await db.runAsync(`DELETE FROM regular_shopping_items `)
}


/**
 * @function find returns a single record by ID
 * 
 * @param id 
 * @returns a single record or null if not found
 */
const find = async (id: number) => {
    const db = await openDB();
    const item = await db.getFirstAsync(
        `SELECT * FROM regular_shopping_items WHERE id = ?`,
        [id]
    );
    return item ?? null;
};



const RegularShoppingItem = {
    all,
    find,
    create,
    update,
    destroy,
    destroyAll
};

export default RegularShoppingItem;
