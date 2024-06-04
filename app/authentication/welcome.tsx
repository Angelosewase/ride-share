import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const WelcomeScreen = () => {
    const router = useRouter()
  return (
    <SafeAreaView className="flex-1 items-center bg-white">
      <Image
        source={require("@/assets/ride_share/Welcome Screen.png")}
        className="mt-32 mb-4"
      />
      <Text className="text-3xl font-semibold ">Welcome</Text>
      <Text className="text-center text-lg leading-6 text-slate-400 ">
        Have a better Sharing exprience
      </Text>

      <View className="w-full px-4 justify-end mb-10 flex-1 gap-5 ">
        <Pressable className="rounded-lg bg-green-700 items-center py-3 justfy-center border border-green-700" onPress={()=> router.navigate("authentication/signUp")}>
          <Text className="text-white text-lg">Create an account</Text>
        </Pressable>
        <Pressable className="rounded-lg border border-green-700 items-center py-3 justfy-center">
          <Text className="text-lg">login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
