import { Stack } from "expo-router";
import "../global.css";
import SafeArea from "@/services/SafeArea";
import PaperKit from "@/services/PaperKit";
import useInitDB from "@/hooks/useDB";

export default function RootLayout() {
  useInitDB();

  return (
    <PaperKit>
      <SafeArea>
        <Router />
      </SafeArea >
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