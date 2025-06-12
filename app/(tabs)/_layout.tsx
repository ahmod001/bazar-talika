import Logo from '@/components/Logo';
import TabMenu from '@/features/shopping-list/regular-shopping-list/components/TabMenu';
import colors from '@/theme/colors';
import { Tabs } from 'expo-router'
import React from 'react'

const Layout = () => {
    return (
        <Tabs screenOptions={{ tabBarStyle: { display: 'none' }, title: 'বাজার তালিকা', headerTintColor: colors.secondary.dark, headerStyle: { elevation: 0, backgroundColor: colors.secondary.light } }}  >

            <Tabs.Screen name="index" options={{ headerLeft: logo, headerRight: () => (<TabMenu className="me-2.5" />) }} />

        </Tabs>
    )
}

const logo = () => (<Logo className='w-11 h-11 ms-3 me-1' fullIcon={false} />)

export default Layout;