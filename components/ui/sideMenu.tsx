import { View, Text, TouchableOpacity, StyleSheet, Image,FlatList } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import {
  ChevronLeftIcon,
  NewspaperIcon,
  QuestionMarkCircleIcon,
  UserGroupIcon,
  ExclamationCircleIcon,
  Cog6ToothIcon,
  ArrowLeftEndOnRectangleIcon,
} from "react-native-heroicons/outline";

export interface sidenavItem {
  Icon: any;
  title: string;
}

const navItems: Array<sidenavItem> = [
  {
    Icon: NewspaperIcon ,
    title: "History",
  },
  {
    Icon: ExclamationCircleIcon ,
    title: "Company",
  },
  {
    Icon: UserGroupIcon ,
    title: "Refferal",
  },
  {
    Icon: ExclamationCircleIcon ,
    title: "About us",
  },
  {
    Icon: Cog6ToothIcon,
    title: "settings",
  },
  {
    Icon: QuestionMarkCircleIcon,
    title: "Help and support",
  },
  {
    Icon: ArrowLeftEndOnRectangleIcon ,
    title: "Log out",
  },
];

const Back = ({ setState, state }: { setState: Function; state: boolean }) => {
  return (
    <>
      <TouchableOpacity
        className="flex-row items-center gap-1 pt-2  px-3"
        onPress={() => setState(!state)}
      >
        <ChevronLeftIcon size={24} color={"#000000"} />
        <Text className="text-xl font-semibold">Back</Text>
      </TouchableOpacity>
    </>
  );
};

const SideNavItem = ({Icon,title}:sidenavItem) => {
  return (
    <>
      <View className="flex-row space-x-4 border-b  py-2 px-3 items-center mt-3 border-gray-300">
        <Icon size={25} color={"#000000"} />
        <Text className="font-semibold text-lg">{title}</Text>
      </View>
    </>
  );
};

const SideMenu = ({
  setState,
  state,
}: {
  setState: Function;
  state: boolean;
}) => {
  return (
    <>
      <Modal
        isVisible={state}
        className=" bg-white  "
        style={styles.modalView}
        animationIn={"slideInLeft"}
        animationOut={"slideOutLeft"}
        animationOutTiming={2000}
      >
        <View className=" mb-auto py-5">
          <Back setState={setState} state={state} />
          <View className="mt-12 mb-8  px-3">
            <Image source={require("@/assets/ride_share/Ellipse 43.png")} />
            <View className="mt-2">
              <Text className="text-2xl font-semibold">Nate Samson</Text>
              <Text className=" texl-lg">Nate@email.com</Text>
            </View>
          </View>
         <FlatList data={navItems} renderItem={(data)=><SideNavItem Icon={data.item.Icon} title={data.item.title}/>}/>
        </View>
      </Modal>
    </>
  );
};

export default SideMenu;

const styles = StyleSheet.create({
  modalView: {
    marginLeft: 0,
    marginBottom: 0,
    marginTop: 0,
    height: "auto",
    marginRight: 140,
    borderBottomRightRadius: 100,
    borderTopRightRadius: 100,
  },
});
