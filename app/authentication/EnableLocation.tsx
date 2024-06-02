import { View } from "react-native";
import React, { useEffect, useState } from "react";
import MapView from "react-native-maps";
import LocationRequestModal from "@/components/modals/LocationPermission";
 

const EnableLocation = () => {
   
  const [showModal,setShowModal]= useState(false)

  useEffect(()=>{
    setShowModal(true)
  },[])


  return (
    <View className="flex-1">
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        className="flex-1"
      />
      {
       showModal && <LocationRequestModal />
      }
    </View>
  );
};

export default EnableLocation;
