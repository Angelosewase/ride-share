import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Back } from "@/components/ui/utils";

export default function AboutUs() {
  return (
    <SafeAreaView className="flex-1 bg-white px-3">
      <View className="flex-row  mt-3 items-center">
        <Back />
        <Text className="text-2xl font-semibold  mx-auto">About us</Text>
      </View>
      <View className="flex-1 mt-8">
        <Text className="text-2xl font-semibold my-4">Help and support </Text>

        <Text className="text-gray-500 text-lg ">
          Lorem ipsum dolor sit amet consectetur. Sit pulvinar mauris mauris eu
          nibh semper nisl pretium laoreet. Sed non faucibus ac lectus eu arcu.
          Nulla sit congue facilisis vestibulum egestas nisl feugiat pharetra.
          Odio sit tortor morbi at orci ipsum dapibus interdum. Lorem felis est
          aliquet arcu nullam pellentesque. Et habitasse ac arcu et nunc euismod
          rhoncus facilisis sollicitudin.
        </Text>
      </View>
    </SafeAreaView>
  );
}
