import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Back } from "@/components/ui/utils";
import { carsData } from "@/data/placeholderData";
import { car } from "@/features/carSlice";
import { MapPinIcon } from "react-native-heroicons/solid";
import { useDispatch } from "react-redux";
import { addCarVehicle } from "@/features/carSlice";
import { useRouter } from "expo-router";



const CarDisplay = ({...data }: car) => {
  const dispatch= useDispatch()
  const router= useRouter()
  
  function handleRideRequest(){
    dispatch(addCarVehicle({...data}))
    router.navigate('transport/CarDetails')
  }

  return (
    <>
      <View className="w-full  border border-emerald-500 rounded-lg bg-emerald-50 py-3 px-4 mb-4">
        <View className="w-full items-center flex-row ">
          <View>
            <Text className="text-xl mb-0.5">{data.name}</Text>
            <View className="flex-row space-x-2 mb-0.5">
              <Text className="text-gray-400">{data.features?.gearType} |</Text>
              <Text className="text-gray-400">{data.features?.seats} seats |</Text>
              <Text className="text-gray-400">{data.features?.fuelType}</Text>
            </View>
            <View className="flex-row space-x-2">
              <MapPinIcon size={23} color={"#000000"} />
              <Text className="text-base font-semibold">800m (5 min away)</Text>
            </View>
          </View>

          <Image source={data.image || require("@/assets/ride_share/Car (2).png")} className="mx-auto" />
        </View>

        <View className="w-full flex-row space-x-2 mb-2 mt-4">
          <TouchableOpacity className="flex-1 border border-emerald-500 bg-emerald-50 rounded-lg p-3 items-center justify-center">
            <Text className="text-emerald-500 font-semibold text-center text-lg">Book later</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 border border-emerald-500 bg-emerald-500 rounded-lg p-3">
            <Text className="text-white font-semibold text-center text-lg  " onPress={handleRideRequest}>Ride now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const SelectAvailableCar = () => {
  return (
    <SafeAreaView className="flex-1 bg-white px-3 ">
      <Back />
      <View className="mt-5">
        <Text className="text-3xl font-semibold text-gray-600 ">
          Available cars for ride
        </Text>
        <Text className="text-base text-gray-500">{carsData.length } cars found </Text>
        <ScrollView showsVerticalScrollIndicator={false} className="mt-6">
          {carsData.map((data,idx)=><CarDisplay {...data} key={idx} />)}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SelectAvailableCar;
