
import { Stack } from 'expo-router'

const ContactLayout = () => {
  return (
    <Stack>
     <Stack.Screen name='CallScreen'   options={{
        headerShown:false
     }}/>
     <Stack.Screen name='messageScreen'   options={{
        headerShown:false
     }}/>

    </Stack>
  )
}

export default ContactLayout