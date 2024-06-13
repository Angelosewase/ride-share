import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Back } from "@/components/ui/utils";
import { SafeAreaView } from "react-native-safe-area-context";
import { ClipboardDocumentCheckIcon } from "react-native-heroicons/outline";

export default function Referral() {
  const [copytext, setcopytext] = React.useState<string>("RInf34nv");

  return (
    <SafeAreaView className="flex-1 bg-white px-3">
      <View className="flex-row  mt-3 items-center">
        <Back />
        <Text className="text-2xl font-semibold  mx-auto">Referral</Text>
      </View>
      <View className="w-full mt-10 ">
        <Text className="text-2xl font-semibold">
          Refer to a friend and earn $20
        </Text>
      </View>
      <View className="w-full border-2 border-zinc-300  rounded-lg flex-row items-center justify-between p-3 mt-4 ">
        <Text className="text-xl">{copytext}</Text>
        <TouchableOpacity>
          <ClipboardDocumentCheckIcon color={"#78716c"} size={25} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        className="w-full py-3 bg-emerald-500 rounded-lg mb-4 mt-10"
      >
        <Text className="font-semibold text-white text-center text-lg">
           Invite
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
