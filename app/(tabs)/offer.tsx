import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import SideMenu from '@/components/ui/sideMenu'
import { HamburgerIcon } from '@/components/ui/utils'
import React from 'react'


export interface offerProps{
  title?:string,
  description:string,
  actionName:string
}


const OfferComponent=({title,description,actionName}:offerProps)=>{
  return <>
  <View className='flex-row border rounded-lg border-emerald-400 my-2 w-[100%] justify-between py-2.5 px-3'>
    <View>
      <Text className='text-yellow-400 text-xl'>{title}</Text>
      <Text className='text-gray-400'>{description}</Text>
    </View>
    <View>
      <TouchableOpacity className='rounded-lg px-8 py-2.5 bg-emerald-500'>
        <Text className='font-semibold text-lg text-white text-center'>{actionName}</Text>
      </TouchableOpacity>
    </View>
  </View>
  
  </>
}

const Offer = () => {
  const [showsSideMenu,setshowSideMenu]= React.useState<boolean>(false)
  return (
    <SafeAreaView className='bg-white flex-1 px-3'>
        {showsSideMenu && <SideMenu setState={setshowSideMenu} state={showsSideMenu}/>}
      <View className='flex-row w-full  items-center mt-4'>
        <HamburgerIcon  setshowSideMenu={setshowSideMenu}/>
        <Text className='text-2xl font-semibold mx-auto'>Offers</Text>
      </View>
      <ScrollView className='w-full mt-5 flex-1' scrollEnabled={true} showsVerticalScrollIndicator={false}>
       <OfferComponent title='15% off' description='Black Friday' actionName='Collect'/>

      </ScrollView>
    </SafeAreaView >
  )
}

export default Offer