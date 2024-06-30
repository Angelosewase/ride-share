import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { store } from "@/store";
import { Provider } from "react-redux";
import { PrinterIcon } from "react-native-heroicons/outline";
import { createContext, useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();

interface notificationontransportdetails {
  state: boolean;
  setState: (state: boolean) => void;
}

export const myContext = createContext<
  notificationontransportdetails | undefined
>(undefined);

export default function RootLayout() {
  const [state, setState] = useState<boolean>(false);

  const [fontsLoaded, fontError] = useFonts({
    QuickSand: require("@/assets/fonts/quickSand/Quicksand-VariableFont_wght.ttf"),
  });

  useEffect(() => {
    const onLayoutRootView = async () => {
      if (fontsLoaded || fontError) {
        await SplashScreen.hideAsync();
      }
    };

    onLayoutRootView();
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }


  return (
    <myContext.Provider value={{ state, setState }}>
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
          <Stack.Screen name="contact" options={{ headerShown: false }} />
        </Stack>
      </Provider>
    </myContext.Provider>
  );
}
