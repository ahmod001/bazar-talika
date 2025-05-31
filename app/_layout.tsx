import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return <Stack screenOptions={{
    headerStyle: { backgroundColor: "transparent" },
    animation: "fade_from_bottom",
    animationDuration: 300,
    headerShadowVisible: false,
  }}>

    <Stack.Screen
      name="index"
      options={{
        title: "",
        headerTintColor: "#000",
      }}
    />
  

  </Stack>;
}
