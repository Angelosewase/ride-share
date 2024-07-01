
import { Stack } from 'expo-router'

const WalletLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='index'  options={{headerShown:false}}/>
        <Stack.Screen name='Add_amount'  options={{headerShown:false}}/>
        <Stack.Screen name='bank'  options={{headerShown:false}}/>
    </Stack>
  )
}

export default WalletLayout