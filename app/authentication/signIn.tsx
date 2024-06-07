import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Back } from "@/components/ui/utils";
import PasswordInput from "@/components/ui/inputs";
import { useNavigation, useRouter } from "expo-router";
import HorizontalLine from "@/components/ui/HorizontalLine";

const SignIn = () => {
  const navigation = useNavigation<any>();
  const router = useRouter();
  return (
    <SafeAreaView className="bg-white px-2 flex-1 pb-10">
      <Back />
      <Text className="text-3xl mt-16    pr-5">
        Sign in with your email or phone number
      </Text>

      <View className="mt-10 mb-4 ">
        <TextInput
          placeholder="Email or phone number"
          keyboardType="default"
          className="p-3 border border-zinc-300 rounded-lg my-4 placeholder:text-lg placeholder:text-gray-400"
        />
        <PasswordInput placeholder="Enter your password" />
        <Text className="text-red-400 font-semibold self-end " onPress={()=> router.navigate("authentication/sendVerification")}>
          Forgot password ?
        </Text>
      </View>

      <TouchableOpacity
        className="bg-emerald-500 items-center rounded-lg mt-11 mb-4 p-3"
        onPress={() => router.navigate("authentication/EnableLocation")}
      >
        <Text className="text-white text-xl">Sign in </Text>
      </TouchableOpacity>
      <View className="flex-row items-center mb-8 mt-1 ">
        <HorizontalLine />
        <Text className="mx-2">or</Text>
        <HorizontalLine />
      </View>

      <View className="">
        <Pressable className="rounded-lg  my-2 p-3 border-2 flex-row items-center justify-center space-x-2 border-gray-300 ">
          <Image
            source={require("@/assets/ride_share/gmail.png")}
            className=" "
          />
          <Text className="text-lg ">sign up with gmail</Text>
        </Pressable>
        <Pressable className="rounded-lg  my-2 p-3 border-2 flex-row items-center justify-center space-x-2 border-gray-300 ">
          <Image
            source={require("@/assets/ride_share/Apple.png")}
            className=""
          />
          <Text className="text-lg ">sign up with apple</Text>
        </Pressable>

        <Pressable className="rounded-lg   my-2 p-3 border-2 flex-row items-center justify-center space-x-2 border-gray-300 ">
          <View className="w-6 h-6 rounded-full bg-blue-400 items-center justify-center">
            <Image source={require("@/assets/ride_share/f.png")} className="" />
          </View>
          <Text className="text-lg ">sign up with facebook</Text>
        </Pressable>
      </View>

      <Text className="text-center font-semibold text-base">
        Don't have an account?{" "}
        <Text
          className="font-normal text-emerald-500 underline"
          onPress={() => router.navigate("authentication/signUp")}
        >
          Sign up{" "}
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default SignIn;
