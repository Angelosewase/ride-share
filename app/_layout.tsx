import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { store } from "@/store";
import { Provider } from "react-redux";
import { PrinterIcon } from "react-native-heroicons/outline";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    QuickSand: require("@/assets/fonts/quickSand/Quicksand-VariableFont_wght.ttf"),
  });

  const onLayoutRootView = async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  };

  if (!fontsLoaded && !fontError) {
    return null;
  }

  onLayoutRootView();

  return (
    <Provider store={store}>
      <Stack>
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
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Notification"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="transport"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="complain"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="history" options={{ headerShown: false }} />
        <Stack.Screen name="referral" options={{ headerShown: false }} />
        <Stack.Screen name="aboutUs" options={{ headerShown: false }} />
        <Stack.Screen name="helpSupport" options={{ headerShown: false }} />
        <Stack.Screen name="settings" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
}
