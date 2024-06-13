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
        <Text className="text-gray-500 text-lg ">
          Professional Rideshare Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of Rideshare, with a focus on dependability and Earning. We're working to turn our passion for Rideshare into a booming online website. We hope you enjoy our Rideshare as much as we enjoy offering them to you. I will keep posting more important posts on my Website for all of you. Please give your support and love.Professional Rideshare Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of Rideshare, with a focus on dependability and Earning We're working to turn our passion for Rideshare into a booming online website. We hope you enjoy our Rideshare as much as we enjoy offering them to you. I will keep posting more important posts on my Website for all of you. Please give your support and love.
        </Text>
      </View>
    </SafeAreaView>
  );
}
