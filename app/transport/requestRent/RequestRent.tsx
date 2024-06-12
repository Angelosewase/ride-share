import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Back } from "@/components/ui/utils";
import { SafeAreaView } from "react-native-safe-area-context";
import CreditCards from "@/components/ui/CreditCards";
import { useRouter } from "expo-router";
import { CarComponent ,LocationsComponent} from ".";

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
        <Text className="text-2xl font-semibold text-gray-700">charge</Text>
        <View className=" px-3 py-2  flex-row justify-between">
          <Text className="text-lg ">Mustang/per hour </Text>
          <Text className="text-lg">$200</Text>
        </View>
        <View className="  px-3 py-2 flex-row justify-between">
          <Text className="text-lg ">Vat</Text>
          <Text className="text-lg ">$20</Text>
        </View>
      </View>
      <CreditCards />
      <TouchableOpacity className="w-full py-3 bg-emerald-500 rounded-lg mb-2" onPress={()=>router.navigate('transport/Thanks')}>
        <Text className="font-semibold text-white text-center text-lg">Confirm ride </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Index;


