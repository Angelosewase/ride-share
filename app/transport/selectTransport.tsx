import { View, Text, ImageSourcePropType, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Back } from "@/components/ui/utils";
import { useRouter } from "expo-router";

type ImageMap = Record<string, ImageSourcePropType>;

interface Vehicle {
  title: string;
  imageurl: ImageMap;
  link?:string
}

const vehicleData: Array<Vehicle> = [
  {
    title: "car",
    imageurl: require("@/assets/ride_share/Car.png"),
    link:"transport/AvailableCars"
  },
  {
    title: "Bike",
    imageurl: require("@/assets/ride_share/Bike.png"),
  },
  {
    title: "Cycle",
    imageurl: require("@/assets/ride_share/Cycle.png"),
  },
  {
    title: "Taxi",
    imageurl: require("@/assets/ride_share/Taxi.png"),
  },
];

const VehicleItem = ({ title, imageurl,link }: Vehicle) => {
  const router= useRouter()
  return (
    <>
      <TouchableOpacity className="p-11 border border-emerald-500 rounded-lg bg-emerald-50 items-center justify-center m-2"onPress={()=>{
        if(link){
          router.navigate(link)
        }
      }}>
        <Image source={imageurl} />
        <Text className="font-bold text-base">{title}</Text>
      </TouchableOpacity>
    </>
  );
};

const SelectTransport = () => {
  return (
    <SafeAreaView className="flex-1 bg-white px-3">
      <View className="flex-row w-full items-center  mt-3">
      <Back />
       <Text className="text-2xl font-bold flex-1 text-center items-center">Select transport </Text>
      </View>
      <View className="flex-row flex-wrap flex-1  justify-center my-20">
        {vehicleData.map((data, idx) => (
          <VehicleItem imageurl={data.imageurl} title={data.title} key={idx} link={data?.link} />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default SelectTransport;
