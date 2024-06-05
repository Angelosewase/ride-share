import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Back } from '@/components/ui/utils'
import { useNavigation } from 'expo-router'

const SendVerification = () => {
    const navigation = useNavigation<any>()
  return (
    <SafeAreaView className='bg-white flex-1 px-2'>
      <Back />
      <Text className="text-3xl mt-16  pr-5">
        Verification email or phone number
      </Text>
      <View className='mt-4 flex-1'>
      <TextInput
          placeholder="Email or phone number"
          keyboardType="default"
          className="p-4 border-2 border-zinc-300 rounded-lg my-4 placeholder:text-lg placeholder:text-gray-400"
        />
      </View>

      <TouchableOpacity className="bg-emerald-500 items-center rounded-lg mt-12 mb-10 p-3" onPress={()=>navigation.navigate("VerifyOTP")}>
          <Text className="text-white text-xl">Send OTP</Text>
        </TouchableOpacity>

    </SafeAreaView>
  )
}

export default SendVerification