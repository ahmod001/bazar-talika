import Logo from '@/components/Logo';
import PopupMenu from '@/features/shopping-list/shared/components/popup-menu/Menu';
import colors from '@/theme/colors';
import { Tabs } from 'expo-router'
import React from 'react'

const Layout = () => {
    return (
        <Tabs screenOptions={{ tabBarStyle: { display: 'none' }, title: 'বাজার তালিকা', headerTintColor: colors.secondary.dark, headerStyle: { elevation: 0, backgroundColor: colors.secondary.light } }}  >

            <Tabs.Screen name="index" options={{ headerLeft: logo, headerRight: () => (<PopupMenu className="me-2.5" />) }} />

        </Tabs>
    )
}

const logo = () => (<Logo className='w-11 h-11 ms-3 me-1' fullIcon={false} />)

export default Layout;