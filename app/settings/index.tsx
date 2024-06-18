import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Back } from "@/components/ui/utils";
import { ChevronRightIcon } from "react-native-heroicons/solid";
import { useRouter } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white px-3">
      <View className="flex-row  mt-3 items-center">
        <Back />
        <Text className="text-2xl font-semibold  mx-auto">settings</Text>
      </View>
       <View className="mt-16">
        {
            settingsnavigationdata.map((data,idx)=> <SettingsItem {...data} key={idx}/>)
        }
       </View>

    </SafeAreaView>
  );
}

interface settingsitems {
  title: string;
  to: string;
}

const settingsnavigationdata: Array<settingsitems> = [
  {
    title: "Change password",
    to: "settings/password",
  },
  {
    title: " change language",
    to: "settings/language",
  },
  {
    title: "privacy policy",
    to: "settings/privacyPolicy",
  },  {
    title: "Contact us",
    to: "settings/contactUs",
  },
  {
    title: "Delete account",
    to: "settings/deleteAccount",
  },
];

const SettingsItem = ({ title,to }: settingsitems) => {
    const router=useRouter()
  function handlePress(to:string){
    router.navigate(to)
  }
  return (
    <TouchableOpacity className="w-full p-3 flex-row justify-between border-2 border-emerald-500 rounded-lg items-center my-2" onPress={()=> handlePress(to)}>
      <Text className="text-lg ">{title}</Text>
      <ChevronRightIcon size={25} color={'#000000'}/>
    </TouchableOpacity>
  );
};
