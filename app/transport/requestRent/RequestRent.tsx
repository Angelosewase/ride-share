import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Back } from "@/components/ui/utils";
import { SafeAreaView } from "react-native-safe-area-context";
import CreditCards from "@/components/ui/CreditCards";
import { useRouter } from "expo-router";
import { CarComponent ,LocationsComponent} from ".";
import { addAmountDetails } from "@/features/paymentSlice";
import { useDispatch } from "react-redux";

const Index = () => {

//these calculations of paymnet amounts in base on the google latrix api which is not yet implemented

   const amount:{amount:number, tax:number} = {
   amount:200,
   tax:20
   }



  const router=useRouter()

  const dispatch = useDispatch()

  function handleconfirmation(){
    dispatch(addAmountDetails(amount))
    router.navigate('transport/Thanks')
  }


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
          <Text className="text-lg">${amount.amount}</Text>
        </View>
        <View className="  px-3 py-2 flex-row justify-between">
          <Text className="text-lg ">Vat</Text>
          <Text className="text-lg ">${amount.tax}</Text>
        </View>
      </View>
      <CreditCards />
      <TouchableOpacity className="w-full py-3 bg-emerald-500 rounded-lg mb-2" onPress={()=>handleconfirmation()}>
        <Text className="font-semibold text-white text-center text-lg">Confirm ride </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Index;


