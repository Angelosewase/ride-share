import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Back } from '@/components/ui/utils'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DropdownComponent } from "@/components/ui/dropDowns";
import {CreditCards2} from '@/components/ui/CreditCards';

interface data {
  value: string;
  label:string
}

const placeholder: Array<data> = [
  {
    value: '1',

    label:'option 1'
  },
  {
    value: '1',
    label: "option1",
  },
  {
    value:' 1',
    label: "option1",
  },
];

const Bank = () => {
  return (
    <SafeAreaView className='flex-1 bg-white px-3 items-center'>
      <View className="flex-row w-full items-center  mt-3 justify-center">
        <Back />
        <Text className="text-2xl font-bold flex-1 ml-28 items-center ">
          Add credit card 
        </Text>
      </View>
      <View className='w-full px-3 border rounded-lg border-stone-400 mt-5 '>
        <DropdownComponent data={placeholder} placeholder='Select Payment method'/>
      </View>

      <View className="border border-gray-400 rounded-lg flex-row items-center space-x-2 mb-2  p-2 mt-4">
        <TextInput
          placeholder="Account Number"
          keyboardType="phone-pad"
          className=" border-gray-200  placeholder:text-lg my-2 flex-1"
        />
      </View>
     <TouchableOpacity className='w-[95%] p-3 bg-emerald-500 rounded-lg items-center mt-3'>
      <Text className='text-white font-semibold text-xl'>Save payment method </Text>
     </TouchableOpacity>
     <View className='mt-4 opacity-40 w-full'>
      <CreditCards2 />
     </View>
    </SafeAreaView >
  )
}

export default Bank