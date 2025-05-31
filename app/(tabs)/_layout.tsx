import React from 'react'
import { Tabs } from 'expo-router'

const Layout = () => {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ title: "Home" }} />
        </Tabs>
    )
}

export default Layout