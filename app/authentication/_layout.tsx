import { Stack } from "expo-router"

const  AuthenticationLayyout= () => {
  return (
    <Stack>
        <Stack.Screen name="EnableLocation" options={{
            headerShown:false
        }} />
    </Stack>
  )
}

export default AuthenticationLayyout