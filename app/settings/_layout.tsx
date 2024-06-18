import { Stack } from "expo-router"

export default function SettingsLayout() {
  return (
     <Stack>
        <Stack.Screen name="index" options={{headerShown: false, animation:'slide_from_right'}}/>
        <Stack.Screen name="contactUs" options={{headerShown: false, animation:'slide_from_right'}}/>
        <Stack.Screen name="deleteAccount" options={{headerShown: false, animation:'slide_from_right'}}/>
        <Stack.Screen name="language" options={{headerShown: false, animation:'slide_from_right'}}/>
        <Stack.Screen name="password" options={{headerShown: false, animation:'slide_from_right'}}/>
        <Stack.Screen name="privacyPolicy" options={{headerShown: false, animation:'slide_from_right'}}/>
     </Stack>
  )
}