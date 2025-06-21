import { Stack } from "expo-router"

const RootLayout = () => {
    return (
        <Stack >
            <Stack.Screen name="privacy-policy" options={{ title: 'Privacy Policy' }} />
            <Stack.Screen name="about" options={{ title: 'About' }} />
        </Stack>
    )
}

export default RootLayout