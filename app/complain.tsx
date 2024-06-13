import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Back } from '@/components/ui/utils'
import { someData } from '@/placeholderData'
import { DropdownComponent } from '@/components/ui/dropDowns'
import { ComplainSuccessModal } from '@/components/modals/successModals'

const Complain = () => {
 const [modalstate,setModalState]=React.useState<boolean>(false)

   function handlesubmit(){
     setModalState(true)
   }
  return (
    <SafeAreaView className='bg-white flex-1 px-3 '>
        <ComplainSuccessModal state={modalstate} setState={setModalState}/>
        <View className="flex-row  mt-3 items-center ">
        <Back />
        <Text className="text-2xl font-semibold mx-auto ">Complain</Text>
      </View>
      <View>
      <View className="py-1 px-3 border-2 border-zinc-300 rounded-lg my-2  mt-10">
          <DropdownComponent
            data={someData}
            placeholder="please select your problem"
          />
        </View>
        <TextInput  placeholder='Write your complain here' keyboardType='default' className='h-40 border-2 border-zinc-300 rounded-lg mt-4 p-3 placeholder:text-lg text-lg' textAlignVertical='top'/>
      </View>

      <TouchableOpacity
        className="w-full py-3 bg-emerald-500 rounded-lg mt-10"
        onPress={()=>handlesubmit()}
      >
        <Text className="font-semibold text-white text-center text-lg">
          Submit
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Complain