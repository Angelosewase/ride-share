import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MinusCircleIcon,MapPinIcon } from 'react-native-heroicons/solid'
import { HamburgerIcon } from '@/components/ui/utils'
import SideMenu from '@/components/ui/sideMenu'


export interface  FavouriteLocation{
 name:string,
 location:string,
 coords?:{
  lat:number,
  long:number
 }
}


const FavouriteLocation=({name,location}:FavouriteLocation)=>{
    return(
      <>
      <View className='flex-row border rounded-lg border-gray-200 my-2 w-[100%] justify-evenly py-2.5 '>
        <MapPinIcon size={28} color={'#000000'}/>
        <View>
          <Text className='text-xl font-semibold '>{name}</Text>
          <Text className='text-base text-gray-400 '>{location}</Text>
        </View>
        <MinusCircleIcon   size={20} fill={'#FF0000'}/>
      </View>
      </>
    )
}

const Favourite = () => {
  const [showsSideMenu,setshowSideMenu]= React.useState<boolean>(false)
  return (
    <SafeAreaView className='bg-white items-center flex-1 px-3 '>
      {showsSideMenu && <SideMenu setState={setshowSideMenu} state={showsSideMenu}/>}
      <View className='flex-row w-full  items-center mt-4'>
        <HamburgerIcon  setshowSideMenu={setshowSideMenu}/>
        <Text className='text-2xl font-semibold mx-auto'>Favourites</Text>
      </View>
      <ScrollView className='w-full mt-5 flex-1' scrollEnabled={true} showsVerticalScrollIndicator={false}>
        <FavouriteLocation  name='Office' location='2972 Westheimer Rd Santa,Ana Illinous 84568'/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Favourite