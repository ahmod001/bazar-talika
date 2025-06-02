import * as SQLite from 'expo-sqlite';

const openDB = async () => {
    const db = await SQLite.openDatabaseAsync('shopping.db');
    await db.execAsync(`PRAGMA journal_mode = WAL`);
    return db;
};
export default openDB