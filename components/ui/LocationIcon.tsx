import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import { MapPinIcon } from 'react-native-heroicons/outline'

const LocationIcon = () => {
  return (
    <View  className=" items-center">
    <TouchableOpacity className="bg-green-100 border border-gray-100 rounded-full p-1">
      <View className="bg-green-400 rounded-full p-4 w-auto">
        <MapPinIcon size={40} color={"black"} />
      </View>
    </TouchableOpacity>
  </View>
  )
}

export default LocationIcon