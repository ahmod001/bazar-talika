import { Stack } from "expo-router";
import "../global.css";
import SafeArea from "@/services/SafeArea";
import PaperKit from "@/services/PaperKit";

export default function RootLayout() {
  return (
    <PaperKit>
      <SafeArea>
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
      </SafeArea >
    </PaperKit>
  );
}
