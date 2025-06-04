import { Stack } from "expo-router";
import "../global.css";
import SafeArea from "@/services/SafeArea";
import PaperKit from "@/services/PaperKit";
import SqliteProvider from "@/services/expo-sqlite/SqliteProvider";

export default function RootLayout() {

  return (
    <PaperKit>
      <SqliteProvider>
        <SafeArea>
          <Router />
        </SafeArea >
      </SqliteProvider>
    </PaperKit>
  );
}

const Router = () => (
  <Stack
    screenOptions={{
      headerStyle: { backgroundColor: "transparent" },
      animation: "fade_from_bottom",
      animationDuration: 300,
      headerShadowVisible: false,
    }}
  >
    <Stack.Screen
      name="(tabs)"
      options={{
        headerShown: false,
      }}
    />

  </Stack>
)
RootLayout.displayName = 'Router';