import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Back } from "@/components/ui/utils";

export default function AboutUs() {
  return (
    <SafeAreaView className="flex-1 bg-white px-3">
      <View className="flex-row  mt-3 items-center">
        <Back />
        <Text className="text-2xl font-semibold  mx-auto">Privacy policy</Text>
      </View>
      <View className="flex-1 mt-8">
        <Text className="text-2xl font-semibold my-4">
          Privacy policy for ride share
        </Text>

        <Text className="text-gray-500 text-lg ">
          At Rideshare, accessible from rideshare.com, one of our main
          priorities is the privacy of our visitors. This Privacy Policy
          document contains types of information that is collected and recorded
          by rideshare and how we use it. If you have additional questions or
          require more information about our Privacy Policy, do not hesitate to
          contact us. This Privacy Policy applies only to our online activities
          and is valid for visitors to our website with regards to the
          information that they shared and/or collect in rideshare. This policy
          is not applicable to any information collected offline or via channels
          other than this website. Our Privacy Policy was created with the help
          of the Free Privacy Policy Generator.
        </Text>
      </View>
    </SafeAreaView>
  );
}
