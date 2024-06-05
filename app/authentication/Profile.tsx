import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Back } from "@/components/ui/utils";
import CountryPicker, { DropdownComponent } from "@/components/ui/dropDowns";
import { countryData, cityData } from "@/placeholderData";

const Profile = () => {
  return (
    <SafeAreaView className="flex-1 bg-white px-2">
      <View className="flex-row  items-center">
        <Back />
        <Text className="font-semibold text-2xl ml-28 mt-2">Profile</Text>
      </View>

      <View className="items-center">
        <View className="h-36 w-36 rounded-full bg-gray-200 my-10">
          <TouchableOpacity className="p-1 bg-emerald-500 rounded-full absolute bottom-2 right-2">
            <Image source={require("@/assets/ride_share/camera.png")} />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <TextInput
          placeholder="Full name"
          keyboardType="default"
          className="p-3 border-2 border-zinc-300 rounded-lg my-2 placeholder:text-lg"
        />
        <View className="border-2 border-zinc-300 rounded-lg flex-row items-center space-x-2 my-3  px-2 py-1">
          <CountryPicker data={countryData} />
          <TextInput
            placeholder="your phone number"
            keyboardType="phone-pad"
            className=" border-gray-200  placeholder:text-lg my-2 flex-1"
          />
        </View>
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          className="p-3 border-2 border-zinc-300 rounded-lg my-2 placeholder:text-lg"
        />
        <TextInput
          placeholder="Street"
          keyboardType="default"
          className="p-3 border-2 border-zinc-300 rounded-lg my-2 placeholder:text-lg"
        />
        <View className="py-1 px-3 border-2 border-zinc-300 rounded-lg my-2 ">
          <DropdownComponent data={cityData} placeholder="Select your city" />
        </View>
        <View className="py-1 px-3 border-2 border-zinc-300 rounded-lg my-2 ">
          <DropdownComponent
            data={cityData}
            placeholder="Select your country"
          />
        </View>
      </View>

      <View className="flex-row items-center  gap-4 mt-6">
        <TouchableHighlight className="border border-emerald-500 rounded-xl py-3  px-8 flex-1">
          <Text className="text-xl text-center">Cancel</Text>
        </TouchableHighlight>
        <TouchableOpacity className="border border-emerald-600 bg-emerald-500 rounded-lg py-3 px-8 flex-1">
          <Text className="text-xl text-white text-center">save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
