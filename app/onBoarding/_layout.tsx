import { Stack } from "expo-router"

const OnBoardingLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="OnBoarding01" options={{
        headerShown:false,
        animationDuration:2000
      }}/>
      <Stack.Screen name="OnBoarding02" options={{
        headerShown:false,
        animationDuration:2000
      }} />
      <Stack.Screen name="OnBoarding03" options={{
        headerShown:false,
        animationDuration:2000
      }}/>
    </Stack>
  )
}

export default OnBoardingLayout