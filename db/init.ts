import openDB from ".";
import runMigrations from "./migrations";


export const initDB = async () => {
    const db = await openDB();
    await runMigrations(db);
    return db;
};
