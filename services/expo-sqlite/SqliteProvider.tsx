import { SQLiteProvider } from 'expo-sqlite'
import React, { ReactNode } from 'react'
import runMigrations from './migrations'


const SqliteProvider = ({ children }: { children: ReactNode }) => {
    return (
        <SQLiteProvider databaseName='baraj-talika.db' onInit={runMigrations}>
            {children}
        </SQLiteProvider>
    )
}

export default SqliteProvider