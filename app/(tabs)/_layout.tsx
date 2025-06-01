import Logo from '@/components/Logo';
import PopupMenu from '@/features/shopping-list/shared/components/popup-menu/Menu';
import colors from '@/theme/colors';
import { Tabs } from 'expo-router'
import React from 'react'

const Layout = () => {
    return (
        <Tabs screenOptions={{ tabBarStyle: { display: 'none' }, title: 'বাজার তালিকা', headerTintColor: colors.secondary.dark, headerStyle: { height: 100 } }} >

            <Tabs.Screen name="index" options={{ headerLeft: logo, headerRight: () => (<PopupMenu />) }} />

        </Tabs>
    )
}

const logo = () => (<Logo className='w-11 h-11 ms-2 me-0.5' fullIcon={false} />)

export default Layout;