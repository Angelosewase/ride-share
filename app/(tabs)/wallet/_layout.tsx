
import { Stack } from 'expo-router'

const WalletLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='index'  options={{headerShown:false}}/>
    </Stack>
  )
}

export default WalletLayout