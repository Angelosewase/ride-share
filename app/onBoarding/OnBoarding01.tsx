import { View, Text, Image, StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'


const OnBoardin01 = () => {
    const router = useRouter()
  return (
    <SafeAreaView className='flex-1  items-center bg-white'>
        <TouchableOpacity className='self-end pr-4' >
          <Text className='text-lg text-gray-700' onPress={()=> router.navigate("/authentication")
          }>
            skip
          </Text>
        </TouchableOpacity>
        <Image source={require("@/assets/ride_share/Anywhere you are.png")} style={styles.image} className='mt-[100px]'/>
        <View className='mt-10 flex-1 items-center'>
          <Text className='text-4xl '>
            Anywhere you are
          </Text>
           <View className='w-[75%] mt-2'>
           <Text className='text-center text-lg leading-6 text-gray-500 '>
            Sell houses easily with the help of listenary and to make this line big I'm writing more
          </Text>
           </View>

        </View>

        <TouchableOpacity className='mb-20' onPress={()=> router.navigate('/onBoarding/OnBoarding02')}>
          <Image source={require('@/assets/ride_share/Group 296.png')} />
        </TouchableOpacity>
    </SafeAreaView>
  )
}


const styles=StyleSheet.create({
  image:{
    height:250,
    width:'95%',
  }
})

export default OnBoardin01