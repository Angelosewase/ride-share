import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Back } from "@/components/ui/utils";

const Thanks = () => {
  return (
    <SafeAreaView className="flex-1 bg-white items-center  px-3">
      <View className="self-start">
        <Back />
      </View>
      <View className="mt-40 items-center">
        <Image
          source={require("@/assets/ride_share/Group 6476.png")}
          className="h-40 w-40"
        />
        <View>
          <Text className="text-2xl text-center mb-1 mt-2">Thank you</Text>
          <Text className="text-base">
            Your booking has been sent to mr.Sharif Ahmed
          </Text>
        </View>
      </View>

      <TouchableOpacity
        className="w-full py-3 bg-emerald-500 rounded-lg mb-4 mt-auto"
      >
        <Text className="font-semibold text-white text-center text-lg">
          Confirm ride{" "}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Thanks;
