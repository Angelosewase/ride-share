import { Stack } from "expo-router"

const TransportLayout = () => {
  return (
     <Stack>
          <Stack.Screen name="selectTransport" options={{
            headerShown:false
          }}/>
          <Stack.Screen name="selectAvailableCar"  options={{headerShown:false,animation:"slide_from_right"}}/>
          <Stack.Screen name="AvailableCars" options={{headerShown:false}}/>
          <Stack.Screen name="CarDetails" options={{headerShown:false}} />
          <Stack.Screen name="requestRent"  options={{
            headerShown:false
          }}/>
          <Stack.Screen name="Thanks" options={{
            headerShown:false
          }}/>
     </Stack>
  )
}

export default TransportLayout