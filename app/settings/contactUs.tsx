import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Back } from "@/components/ui/utils";
import { countryData } from "@/placeholderData";
import CountryPicker from "@/components/ui/dropDowns";
import { KeyboardAvoidingView } from "react-native";

export default function ContactUs() {
  return (
    <View className="bg-white flex-1 px-3 py-10">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View className="flex-row  mt-3 items-center">
          <Back />
          <Text className="text-2xl font-semibold ml-16">Contact us</Text>
        </View>
        <Text className="w-full text-center  text-2xl  mt-8">
          Contact us for ride share
        </Text>
        <View className="w-full">
          <Text className="w-full text-center text-2xl font-semibod mt-4">
            Address
          </Text>
          <Text className="w-full text-center text-base text-gray-600 leading-5 px-4 mt-2 ">
            House# 72, Road# 21, Banani, Dhaka-1213 (near Banani Bidyaniketon
            School & College, beside University of South Asia)
          </Text>
          <Text className="w-full text-center text-gray-600 text-base mt-5">
            Call: 13301(24/7)
          </Text>
          <Text className="w-full text-center text-gray-600 text-base ">
            Email:support@ride_share.com
          </Text>

          <View className="w-full">
            <Text className="text-2xl text-center font-normal  mt-5">
              Send message
            </Text>
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
              className="border-2 border-gray-200 rounded-lg flex-row items-center space-x-2 my-3  p-2
        "
            >
              <CountryPicker data={countryData} />
              <TextInput
                placeholder="your phone number"
                keyboardType="phone-pad"
                className=" border-gray-200  placeholder:text-lg my-2 flex-1"
              />
            </View>

            <TextInput
              placeholder="Write your text"
              keyboardType="default"
              className="h-40 border-2 border-zinc-300 rounded-lg mt-4 p-3 placeholder:text-lg text-lg"
              textAlignVertical="top"
            />
          </View>
        </View>

        <TouchableOpacity className="w-full py-3 bg-emerald-500 rounded-lg  mt-10">
          <Text className="font-semibold text-white text-center text-lg">
            Send Message
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
