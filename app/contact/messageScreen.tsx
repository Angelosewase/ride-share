import { View, Text, ScrollView, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Back } from "@/components/ui/utils";
import { Image } from "react-native";
import { FaceSmileIcon, PaperAirplaneIcon, PlusCircleIcon } from "react-native-heroicons/outline";

interface message {
  content: string;
  type: "sent" | "received";
  time: string;
  senderId: number;
  receiverId: number;
}

const someMessages: Array<message> = [
  {
    content: "hello driver",
    type: "sent",
    time: "8:30 pm",
    senderId: 1,
    receiverId: 1,
  },
  {
    content: "hello passenger",
    type: "received",
    time: "8:45 pm",
    senderId: 1,
    receiverId: 1,
  },  {
    content: "hello driver",
    type: "sent",
    time: "8:30 pm",
    senderId: 1,
    receiverId: 1,
  },
  {
    content: "hello passenger",
    type: "received",
    time: "8:45 pm",
    senderId: 1,
    receiverId: 1,
  },
];

const MessageScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white  px-3">
      <View className="flex-row w-full items-center  mt-3">
        <Back />
        <Text className="text-2xl font-bold flex-1 text-center items-center">
          Chat
        </Text>
      </View>
      <ScrollView className="mt-10 flex-1">
        {someMessages.map((data, idx) => (
          <Message {...data} key={idx} />
        ))}
      </ScrollView>
      <ChatInput />
    </SafeAreaView>

  );
};

export default MessageScreen;

const Message: React.FC<message> = ({ content, type, time }) => {
  if (type === "received") {
    return (
      <>
        <View className="flex-1  flex-row   space-x-2">
          <Image
            source={require("@/assets/ride_share/Ellipse 43.png")}
            className="h-12 w-12"
          />
          <View  className=" pt-3">
            <View className="bg-gray-100  px-10 py-2 rounded-b-xl rounded-r-xl ">

            <Text className="text-xl w-full">{content}</Text>
            </View>
            <Text className="text-gray-500">{time}</Text>
          </View>
        </View>
      </>
    );
  }

  return (
    <>
      <View className="flex-1  self-end  ">
        <View className="bg-emerald-50 border border-emerald-500 px-10 py-2 rounded-t-xl rounded-l-xl ">
          <Text className="text-xl text-gray-600">{content}</Text>
        </View>
        <Text className="text-right text-gray-500 ">{time}</Text>
      </View>
    </>
  );
};


const  ChatInput:React.FC=()=>{
   return<>
     <View className="w-full mb-3 flex-row space-x-3 p-3 items-center">
        <PlusCircleIcon size={30} color={'#6b7280'}/>
        <View className="flex-1 border border-gray-500 rounded-xl p-2 flex-row ">
          <TextInput keyboardType="default" placeholder="Type your message " className="flex-1 p-1 placeholder:text-xl"/>
          <FaceSmileIcon size={30} color={'#6b7280'}/>
        </View>
        <PaperAirplaneIcon  size={30} color={'#6b7280'} rotation={-45} />
     </View>
   </>
}
