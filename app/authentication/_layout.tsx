import { Stack } from "expo-router"

const  AuthenticationLayyout= () => {
  return (
    <Stack>
        <Stack.Screen name="EnableLocation" options={{
            headerShown:false
        }} />
        <Stack.Screen name="welcome" options={{
          headerShown:false
        }}/>
        <Stack.Screen name="signUp"  options={{
          headerShown:false
        }}/>    
            <Stack.Screen name="VerifyOTP"  options={{
          headerShown:false
        }}/>   
                 <Stack.Screen name="SetupPassword"  options={{
          headerShown:false
        }}/>
    </Stack>
  )
}

export default AuthenticationLayyout