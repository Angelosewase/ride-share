import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const HomeLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="transport" options={{
        headerShown:false
      }} />
      <Stack.Screen name="delivery" />
    </Stack>
  );
};

export default HomeLayout;
