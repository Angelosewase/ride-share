import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    'QuickSand': require('@/assets/fonts/quickSand/Quicksand-VariableFont_wght.ttf'),
  });

  const onLayoutRootView =async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  };

  if (!fontsLoaded && !fontError) {
    return null;
  }

  onLayoutRootView()



  return (
    <Stack >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="onBoarding"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="authentication"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
