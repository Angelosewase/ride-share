import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import {
  HomeIcon,
  ReceiptPercentIcon,
  WalletIcon,
} from "react-native-heroicons/outline";
import { UserIcon, HeartIcon } from "react-native-heroicons/solid";
import { Hexagon } from "@/components/ui/utils";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#00CCBB",
        tabBarInactiveTintColor: "#000000",
        tabBarStyle: { ...styles.tabBar },
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <View className="items-center">
              <HomeIcon color={color} size={25} />
              <Text
                className="text-sm font-semibold -mt-1"
                style={{ color: color }}
              >
                Home
              </Text>
            </View>
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="favourite"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <View className="items-center">
              <HeartIcon color={color} size={25} />
              <Text
                className="text-sm font-semibold -mt-1"
                style={{ color: color }}
              >
                favourite
              </Text>
            </View>
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <View className="-mt-16 items-center relative">
              <Hexagon width={80} height={90} />
              <Text style={{ color: color }} className="text-sm font-semibold">
                wallet
              </Text>
              <View className="absolute  top-6">
                <WalletIcon stroke={"white"} size={35} />
              </View>
            </View>
          ),
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
        }}
      />
      <Tabs.Screen
        name="offer"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <View className="items-center">
              <ReceiptPercentIcon color={color} size={25} />
              <Text
                className="text-sm font-semibold -mt-1"
                style={{ color: color }}
              >
                offers
              </Text>
            </View>
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <View className="items-center">
              <UserIcon color={color} size={25} />
              <Text
                className="text-sm font-semibold -mt-1"
                style={{ color: color }}
              >
                profile
              </Text>
            </View>
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flex: 1,
    position: "absolute",
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    height: 70,
  },
});
