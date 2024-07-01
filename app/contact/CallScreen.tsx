import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Back } from "@/components/ui/utils";
import { CameraIcon,MicrophoneIcon,VideoCameraIcon,EllipsisHorizontalIcon, PhoneIcon } from "react-native-heroicons/outline";

const CallScreen = () => {
  const [state,setState]=useState<boolean>(true)
  return (
    <SafeAreaView className="flex-1 bg-white px-3">
      <Back />
      <View className="flex-1   items-center  justify-center">
        <Image
          source={require("@/assets/ride_share/Ellipse 43.png")}
          className="h-32 w-32"
        />
        <View>
          <Text className="text-center text-3xl text-gray-600 font-semibold mt-3">
            Sergio Ramos
          </Text>
          <Text className="text-base text-gray-500 text-center ">
            {state?' Calling ...' : '01:25'}
          </Text>
        </View>
      </View>
      <View className="flex-row justify-evenly pb-4 items-end">
      <CallOptionsComponent Icon={CameraIcon}/>
      <CallOptionsComponent Icon={MicrophoneIcon}/>
      <MainCallComponent state={state} setState={setState}/>
      <CallOptionsComponent Icon={VideoCameraIcon}/>
      <CallOptionsComponent Icon={EllipsisHorizontalIcon}/>
      </View>
    </SafeAreaView>
  );
};

export default CallScreen;

const iconData:Array<React.FC<{color:string,size:number}>>=[CameraIcon,MicrophoneIcon,VideoCameraIcon,EllipsisHorizontalIcon]



const CallOptionsComponent = ({Icon}:{Icon:React.FC<{color:string,size:number}>}) => {
  return (
    <>
      <TouchableOpacity className="bg-emerald-50   rounded-full  p-4 ">
       <Icon color={"#000000"} size={25}/>
      </TouchableOpacity>
    </>
  );
};

const MainCallComponent:React.FC<{state:boolean,setState:Function}>=({state,setState})=>{

  function handleClick(){
   setState(!state)
  }

  return <>
      <TouchableOpacity className={`p-6 rounded-full ${state? ' bg-emerald-400': 'bg-red-400'}`} onPress={handleClick} >
        <PhoneIcon color={'#ffffff'} size={30} rotation={state? 0:90}/>
      </TouchableOpacity>
  </>
}
