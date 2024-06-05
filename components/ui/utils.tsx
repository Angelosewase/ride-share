import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import { ChevronLeftIcon } from "react-native-heroicons/outline";

export default function utils() {
  return (
    <View>
      <Text>utils</Text>
    </View>
  );
}

export const Back = () => {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        className="flex-row items-center gap-1 pt-2 "
        onPress={() => navigation.goBack()}
      >
        <ChevronLeftIcon size={24} color={"#000000"} />
        <Text className="text-xl">Back</Text>
      </TouchableOpacity>
    </>
  );
};
