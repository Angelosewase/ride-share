import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useNavigation } from "expo-router";
import PasswordInput from "@/components/ui/inputs";
import { Back } from "@/components/ui/utils";

const SetupPassword = () => {
  const router = useRouter();
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView className="bg-white flex-1 px-2">
      <Back />
     <View className="mb-8 mt-14">
        <Text className="text-3xl mt-8 text-center">Set new password</Text>
        <Text className="text-gray-400 text-lg text-center">
          set your password
        </Text>
      </View>
      <View className="flex-1">
        <PasswordInput placeholder="Enter new  password" />
        <PasswordInput placeholder="confirm password" />
      <Text className="text-gray-400 text-[15px]">Atleast a number or a special character</Text>
      </View>

      <TouchableOpacity className="bg-emerald-600 items-center rounded-lg  mb-12 p-3" onPress={()=>navigation.navigate("Profile")}>
          <Text className="text-white text-xl">save </Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SetupPassword;
