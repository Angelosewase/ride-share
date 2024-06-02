import { Stack } from "expo-router"

const OnBoardingLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="OnBoarding01" options={{
        headerShown:false,
       animation:"slide_from_right"
      }}/>
      <Stack.Screen name="OnBoarding02" options={{
        headerShown:false,
        animation:"slide_from_right"
        

      }} />
      <Stack.Screen name="OnBoarding03" options={{
        headerShown:false,
        animation:"slide_from_right"        

      }}/>
    </Stack>
  )
}

export default OnBoardingLayout