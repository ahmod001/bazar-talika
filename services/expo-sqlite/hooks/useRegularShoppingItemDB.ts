import { useSQLiteContext } from 'expo-sqlite'
import { RegularShoppingItemInput } from '../types/regular-shopping-items';

const useRegularShoppingItemDB = () => {
    const db = useSQLiteContext()

    const all = async () => {
        const data = await db.getAllAsync(`SELECT * FROM regular_shopping_items ORDER BY id`);
        return data;
    };

    const create = async (data: RegularShoppingItemInput) => {

        const result = await db.runAsync(
            `INSERT INTO regular_shopping_items (title, amount, is_completed, description) VALUES (?, ?, ?, ?)`,
            [data.title, data.amount, data.is_completed ? 1 : 0, data.description ?? null]
        );
        return result.lastInsertRowId;
    };

    const update = async (
        id: number,
        data: RegularShoppingItemInput
    ) => {

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

    const destroy = async (id: number) => {
        await db.runAsync(`DELETE FROM regular_shopping_items WHERE id = ?`, [id])
    };

    const destroyAll = async () => {
        await db.runAsync(`DELETE FROM regular_shopping_items `)
    }

    const find = async (id: number) => {
        const item = await db.getFirstAsync(
            `SELECT * FROM regular_shopping_items WHERE id = ?`,
            [id]
        );
        return item ?? null;
    };


    return { all, create, update, find, destroy, destroyAll }
}

export default useRegularShoppingItemDB