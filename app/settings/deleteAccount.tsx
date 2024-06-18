import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Back } from "@/components/ui/utils";

export default function DeleteAccount() {
  return (
    <SafeAreaView className="bg-white flex-1 px-2">
      <View className="flex-row  mt-3 items-center">
        <Back />
        <Text className="text-2xl font-semibold ml-16">Delete account</Text>
      </View>
      <Text className="text-base text-gray-600 w-full mt-8">
        Are you sure you want to delete your account? Please read how account
        deletion will affect. Deleting your account removes personal information
        our database. Tour email becomes permanently reserved and same email
        cannot be re-use to register a new account.
      </Text>

      <TouchableOpacity className="w-full py-3 bg-red-500 rounded-lg  mt-10">
        <Text className="font-semibold text-white text-center text-lg">
          Delete account
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
