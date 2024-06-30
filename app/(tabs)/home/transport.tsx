import { TouchableOpacity, View, Text, Pressable } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { userlocationSelector } from "@/features/locationSlice";
import {
  ViewfinderCircleIcon,
  MagnifyingGlassIcon,
  HeartIcon,
} from "react-native-heroicons/outline";
import { GooglePlacesInput } from "@/components/ui/inputs";
import SideMenu from "@/components/ui/sideMenu";
import { HamburgerIcon } from "@/components/ui/utils";
import { NotificationIcon } from "@/components/ui/utils";
import SelectLocations from "@/components/modals/SelectLocations";
import TransportDetails from "@/components/modals/TransportDetails";
import { paymentDetailsSelector } from "@/features/paymentSlice";
import { myContext } from "@/app/_layout";

const TransportScreen = () => {
  const location = useSelector(userlocationSelector);
  const [showsSideMenu, setshowSideMenu] = React.useState<boolean>(false);
  const [showselectLocations, setShowSelectLocations] =
    React.useState<boolean>(false);
  const [showtransportdetails, setshowtransportdetails] =
    React.useState<boolean>(false);

  const detailsSelector = useSelector(paymentDetailsSelector);

  const context = useContext(myContext);
  const state = context?.state;
  const setState= context?.setState


  return (
    <View className="flex-1">
      <SideMenu state={showsSideMenu} setState={setshowSideMenu} />

      <SelectLocations
        state={showselectLocations}
        setState={setShowSelectLocations}
      />

      {state && (
        <TransportDetails
          state={state}
          setState={setState as Function}
        />
      )}

      <MapView
        initialRegion={{
          latitude: location?.lat || 51.5072,
          longitude: location?.long || 0.1276,
          longitudeDelta: 0.0922,
          latitudeDelta: 0.0421,
        }}
        className="flex-1"
      >
        <Marker
          coordinate={{
            latitude: location?.lat || 29.87,
            longitude: location.long || 1.9,
          }}
          title="your location"
          pinColor="black"
        />
      </MapView>
      <View className=" flex-row   justify-between absolute top-16 px-3 w-full">
        <HamburgerIcon setshowSideMenu={setshowSideMenu} />
        <NotificationIcon />
      </View>
      <View className="absolute bottom-0 left-0 right-0">
        <View className="w-full justify-between px-3 flex-row my-4 items-center">
          <TouchableOpacity className="bg-emerald-500 px-12 py-3 rounded-lg ">
            <Text className="text-white text-xl font-semibold ">Rental</Text>
          </TouchableOpacity>
          <View className=" rounded-lg bg-gray-50  p-2">
            <ViewfinderCircleIcon
              size={25}
              stroke={"#000000"}
              className="m-0"
            />
          </View>
        </View>
        <View className="p-3  mx-2  mb-32 border-2 rounded-lg bg-emerald-100 border-emerald-400 ">
          {/* this requires enabling billing account  i will be using a plain input till i enable it*/}
          {/* <GooglePlacesInput /> */}
          <TouchableOpacity
            className="flex-row w-full p-3 bg-green-50 border border-emerald-400 items-center space-x-4 rounded-xl"
            onPress={() => {
              setShowSelectLocations(!showselectLocations);
            }}
          >
            <MagnifyingGlassIcon size={22} stroke={"grey"} />
            <View className="flex-1 ">
              <Text className="text-gray-500 text-lg">Where Would You go</Text>
            </View>
            {/* <TextInput
              placeholder="Where would you go "
              keyboardType="default"
              className="flex-1  placeholder:text-lg"
              onPress={()=> console.log('presse')}
            /> */}
            <HeartIcon size={22} stroke={"#000000"} />
          </TouchableOpacity>

          <View className="w-full flex-row mb-2 mt-4 bg-green-50 border border-emerald-400 rounded-lg">
            <Pressable className="bg-emerald-400 py-3 flex-1 rounded-lg">
              <Text className="text-white text-xl font-semibold text-center">
                transport
              </Text>
            </Pressable>
            <Pressable className="flex-1 py-3">
              <Text className="text-lg text-center">Delivery</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TransportScreen;
