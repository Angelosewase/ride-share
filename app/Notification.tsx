import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Back } from "@/components/ui/utils";

interface notification {
  time: string;
  title: string;
  description: string;
  type:"positive" | 'negative'
}

const NotificationItem = ({time, title, description,type }: notification) => {
  return (
    <View className={`flex flex-col space-y-2 p-4  rounded-lg bg-sky-50 my-2 ${ type === 'negative' ? 'bg-white' : 'bg-sky-50'}  `}>
      <Text className="text-xl font-semibold ">{title}</Text>
      <Text className="text-gray-500 text-base leading-5">{description}</Text>
      <Text className="text-base  text-gray-400 font-light">{time}</Text>
  
    </View>
  );
};

const Notification = () => {
  return (
    <SafeAreaView className="flex-1 bg-white px-3">
      <View className="flex-row  mt-3">
        <Back />
        <Text className="text-2xl font-semibold mx-auto">Notifications</Text>
      </View>



      <View className="flex-1 mt-5">
        <Text className="text-xl font-thick my-2">Today</Text>
        <NotificationItem
          title="payment cofirmation"
          description="Lorem ipsum dolor sit amconsectetur adipisicing elit. Impedit deleniti, non nisi maxime error voluptates illum amet nulla sapiente aspernatur temporibus doloremque"
          time="25 minutes ago "
          type="positive"
        />        
        <NotificationItem
          title="payment cofirmation"
          description="Lorem ipsum dolor sit amconsectetur adipisicing elit. Impedit deleniti, non nisi maxime error voluptates illum "
          time="25 minutes ago "
          type="negative"
        />
      </View>
    </SafeAreaView>
  );
};

export default Notification;
