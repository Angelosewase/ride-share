import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { Back } from "@/components/ui/utils";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { MapPinIcon as PinIcon, StarIcon } from "react-native-heroicons/solid";
import {
  userfromlocationSelector,
  usertoSelector,
} from "@/features/locationSlice";
import { carSelector } from "@/features/carSlice";
import CreditCards from "@/components/ui/CreditCards";
import { useRouter } from "expo-router";

const Index = () => {
  const router=useRouter()

  return (
    <SafeAreaView className="flex-1 bg-white px-3">
      <View className="flex-row  mt-1">
        <Back />
        <Text className="text-2xl font-semibold mx-auto">Request rent</Text>
      </View>
      <LocationsComponent />
      <CarComponent />
      <View className="w-full mt-4">
        <View className=" border border-gray-400 rounded-lg  px-3 py-4 mb-3">
          <Text className="text-lg text-gray-500">Date</Text>
        </View>
        <View className=" border border-gray-400 rounded-lg  px-3 py-4">
          <Text className="text-lg text-gray-500">time</Text>
        </View>
      </View>
      <CreditCards />
      <TouchableOpacity className="w-full py-3 bg-emerald-500 rounded-lg mb-2" onPress={()=>router.navigate('transport/requestRent/RequestRent')}>
        <Text className="font-semibold text-white text-center text-lg">Confirm booking</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Index;

export const LocationsComponent = () => {
  const to = useSelector(usertoSelector);
  const from = useSelector(userfromlocationSelector);
  const toname = to.name;
  const fromname = from.name;

  return (
    <>
      <View className="flex-row w-full  py-2 items-start space-x-2 px-4 mt-3">
        <PinIcon size={30} className="" color={"#ef4444"} />
        <View className="flex-1">
          <Text className="text-2xl  ">{fromname}</Text>
          <Text className=" text-gray-400">
            3973 Westheimer Rd.santa Ana, Illinous 85486
          </Text>
        </View>
      </View>
      <View className="flex-row w-full  py-2 items-start space-x-2 px-4 ">
        <PinIcon size={30} className="" color={"#4ade80"} />
        <View className="flex-1">
          <Text className="text-2xl ">{toname}</Text>
          <Text className=" text-gray-400 ">
            3973 Westheimer Rd.santa Ana, Illinous 85486
          </Text>
        </View>
        <Text className="text-xl  self-center">1.1km </Text>
      </View>
    </>
  );
};

export const CarComponent = () => {
  const data = useSelector(carSelector);

  return (
    <>
      <View className="w-full items-center flex-row border border-emerald-500 bg-emerald-50 rounded justify-between py-3 px-2 mt-4">
        <View>
          <Text className="text-xl mb-0.5">{data.name}</Text>
          <View className="flex-row space-x-2 mb-0.5"></View>
          <View className="flex-row  items-center space-x-1">
            <StarIcon size={25} color={"#facc15"} />
            <View className="flex-row  space-x-1">
              <Text className="text-gray-400 text-base">{data.stars}</Text>
              <Text className="text-gray-400 text-base">
                ({data.reviews} reviews)
              </Text>
            </View>
          </View>
        </View>

        <Image
          source={data.image || require("@/assets/ride_share/Car (2).png")}
          className="mr-4"
        />
      </View>
    </>
  );
};
