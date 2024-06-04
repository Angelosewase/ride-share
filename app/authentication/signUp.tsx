import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Pressable,
  Image,
  FlatList,
} from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import { ScrollView } from "react-native";
import CountryPicker, { GenderPicker } from "@/components/ui/picker";
import { CheckCircleIcon } from "react-native-heroicons/outline";
import HorizontalLine from "@/components/ui/HorizontalLine";

const SignUp = () => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView className="bg-white flex-1 px-2">
      <ScrollView  showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          className="flex-row items-center gap-1 pt-2 "
          onPress={() => navigation.goBack()}
        >
          <ChevronLeftIcon size={24} color={"#000000"} />
          <Text className="text-xl">Back</Text>
        </TouchableOpacity>
        <Text className="text-3xl mt-8 text-center">
          Sign up with your email or phone number
        </Text>

        <View className="mt-6">
          <TextInput
            placeholder="Name"
            keyboardType="default"
            className="border-2 border-gray-200 rounded-lg px-3 py-4 placeholder:text-xl  my-3"
          />
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            className="border-2 border-gray-200 rounded-lg px-3 py-4 placeholder:text-lg my-3"
          />
          <View
            className="border-2 border-gray-200 rounded-lg flex-row items-center space-x-2 my-3  
        "
          >
            <CountryPicker />
            <TextInput
              placeholder="your phone number"
              keyboardType="phone-pad"
              className=" border-gray-200  placeholder:text-lg my-2 flex-1"
            />
          </View>
          <GenderPicker />
        </View>
        <View className="flex-row space-x-2 items-center">
          <CheckCircleIcon size={25} stroke={"#00CCBB"} />
          <Text className="text-base text-gray-400">
            By signing up. You agree to the{" "}
            <Text className="text-emerald-400">terms of service </Text> and{" "}
            <Text className="text-emerald-400">Privacy Policy</Text>
          </Text>
        </View>

        <TouchableOpacity className="bg-emerald-600 items-center rounded-lg mt-12 mb-3 p-3" onPress={()=>navigation.navigate("VerifyOTP")}>
          <Text className="text-white text-xl">Sign up </Text>
        </TouchableOpacity>
        <View className="flex-row items-center mb-5 mt-1">
          <HorizontalLine />
          <Text className="mx-2">or</Text>
          <HorizontalLine />
        </View>
        
          <View>
            <Pressable className="rounded-lg  my-2 p-3 border flex-row items-center justify-center space-x-2 border-gray-600 ">
              <Image
                source={require("@/assets/ride_share/gmail.png")}
                className=" "
              />
              <Text className="text-lg ">sign up with gmail</Text>
            </Pressable>
            <Pressable className="rounded-lg  my-2 p-3 border flex-row items-center justify-center space-x-2 border-gray-600 ">
              <Image
                source={require("@/assets/ride_share/Apple.png")}
                className=""
              />
              <Text className="text-lg ">sign up with apple</Text>
            </Pressable>

            <Pressable className="rounded-lg  my-2 p-3 border flex-row items-center justify-center space-x-2 border-gray-600 ">
              <View className="w-6 h-6 rounded-full bg-blue-400 items-center justify-center">
              <Image
                source={require("@/assets/ride_share/f.png")}
                className=""
              />

              </View>
              <Text className="text-lg ">sign up with facebook</Text>
            </Pressable>
          </View>
          <Text className="text-center font-semibold text-base">
            Already have an account? <Text className="font-normal text-emerald-500 underline">Sign in </Text>
          </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
