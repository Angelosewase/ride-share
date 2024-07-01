import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Back } from "@/components/ui/utils";
import { Link } from "expo-router";
import CreditCards from "@/components/ui/CreditCards";

const Add_amount = () => {
  return (
    <SafeAreaView className="flex-1 bg-white px-3">
      <View className="flex-row w-full items-center  mt-3 justify-center">
        <Back />
        <Text className="text-2xl font-bold flex-1 ml-28 items-center ">
          Amount
        </Text>
      </View>
      <View className="border border-gray-400 rounded-lg flex-row items-center space-x-2 mb-2  p-2 mt-8">
        <TextInput
          placeholder="Amount"
          keyboardType="phone-pad"
          className=" border-gray-200  placeholder:text-lg my-2 flex-1"
        />
      </View>
      <View className="self-end">
        <Link href={"/wallet/bank"} className="w-full flex ">
          <Text className="w-full text-right text-base text-blue-500 font-semibold">
            add Payment amount
          </Text>
        </Link>
      </View>
      <CreditCards />
      <TouchableOpacity className="w-[95%] p-3 bg-emerald-500 rounded-lg items-center mt-auto mb-32">
        <Text className="text-white font-semibold text-xl">
          Confirm
        </Text>
      </TouchableOpacity>
      <Text>something</Text>
    </SafeAreaView>
  );
};

export default Add_amount;
