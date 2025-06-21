import { RelativePathString, useRouter } from 'expo-router'
import React from 'react'
import { Menu } from 'react-native-paper'

const Settings = ({ closeMenu }) => {
    const router = useRouter()

    const onPress = () => {
        closeMenu()
        router.push("/settings" as RelativePathString)
    }
    return (
        <Menu.Item title="সেটিংস" leadingIcon={'cog'} onPress={onPress} />
    )
}

export default Settings