import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Back } from "@/components/ui/utils";
import PasswordInput from "@/components/ui/inputs";
import { useRouter } from "expo-router";

export default function Password() {
    const router= useRouter()
  return (
    <SafeAreaView className="flex-1 bg-white px-3">
      <View className="flex-row  mt-3 items-center">
        <Back />
        <Text className="text-2xl font-semibold  ml-10 mt-1">
          Change password
        </Text>
      </View>
      <View className="mt-10">
        <PasswordInput placeholder="Old password" />
        <PasswordInput placeholder="new password" />
        <PasswordInput placeholder="confirm password" />
      </View>

      <TouchableOpacity className="w-full py-3 bg-emerald-500 rounded-lg mt-6 m-2self-center" onPress={()=>router.back()}>
        <Text className="font-semibold text-white text-center text-lg">
          save
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
