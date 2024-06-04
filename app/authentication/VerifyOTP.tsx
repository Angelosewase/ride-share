import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import { ChevronLeftIcon } from "react-native-heroicons/outline";

const VerifyOTP = () => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView className="bg-white flex-1">
      <TouchableOpacity
        className="flex-row items-center gap-1 pt-2 "
        onPress={() => navigation.goBack()}
      >
        <ChevronLeftIcon size={24} color={"#000000"} />
        <Text className="text-xl">Back</Text>
      </TouchableOpacity>
      <View className="mb-8 mt-14">
        <Text className="text-3xl mt-8 text-center">Phone verification</Text>
        <Text className="text-gray-400 text-lg text-center">
          Enter your otp code
        </Text>
      </View>
      <View className="flex-1">

      <View className="flex-row  justify-evenly w-[80%] self-center ">
        <TextInput
          keyboardType="decimal-pad"
          className="w-14 h-14 border-2 border-gray-300 rounded-lg font-semibold text-5xl  text-center justify-center items-center6 "
          maxLength={1}
        />
        <TextInput
          keyboardType="decimal-pad"
          className="w-14 h-14 border-2 border-gray-300 rounded-lg font-semibold text-5xl  text-center justify-center items-center6 "
          maxLength={1}
        />
        <TextInput
          keyboardType="decimal-pad"
          className="w-14 h-14 border-2 border-gray-300 rounded-lg font-semibold text-5xl  text-center justify-center  "
          maxLength={1}
        />
        <TextInput
          keyboardType="decimal-pad"
          className="w-14 h-14 border-2 border-gray-300 rounded-lg font-semibold text-5xl  text-center justify-center "
          maxLength={1}
        />
        <TextInput
          keyboardType="decimal-pad"
          className="w-14 h-14 border-2 border-gray-300 rounded-lg font-semibold text-5xl  text-center justify-center "
          maxLength={1}
        />
      </View>
      <Text className="text-center font-semibold text-base mt-2">
        Didn't receive the code ?{" "}
        <Text className="font-normal text-emerald-500 ">Resend again </Text>
      </Text>
      </View>

      <TouchableOpacity className="bg-emerald-600 items-center rounded-lg mt-12 p-3 mx-2  mb-10">
          <Text className="text-white text-xl" onPress={()=>navigation.navigate("SetupPassword")}>verify </Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

export default VerifyOTP;
