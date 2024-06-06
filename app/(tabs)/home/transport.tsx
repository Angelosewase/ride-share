import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { userlocationSelector } from "@/features/locationSlice";
import {
  Bars3Icon,
  BellIcon,
  ViewfinderCircleIcon,
  MagnifyingGlassIcon,
  HeartIcon,
} from "react-native-heroicons/outline";
import { GooglePlacesInput } from "@/components/ui/inputs";
import SideMenu from "@/components/ui/sideMenu";

const TransportScreen = () => {
  const location = useSelector(userlocationSelector);
  const [showsSideMenu,setshowSideMenu]=React.useState<boolean>(false)
  return (
    <View className="flex-1">
      {showsSideMenu && <SideMenu state={showsSideMenu} setState={setshowSideMenu}/>}
      <MapView
        initialRegion={{
          latitude: location?.lat || 0,
          longitude: location?.long || 0,
          longitudeDelta: 0.0922,
          latitudeDelta: 0.0421,
        }}
        className="flex-1"
      >
        <Marker
          coordinate={{
            latitude: location?.lat || 0,
            longitude: location.long || 0,
          }}
          title="your location"
          pinColor="black"
        />
      </MapView>
      <View className=" flex-row   justify-between absolute top-16 px-3 w-full">
        <TouchableOpacity className=" rounded-lg bg-emerald-400 p-2 items-center justify-center  " onPress={()=>setshowSideMenu(true)}>
          <Bars3Icon size={30} stroke={"#000000"} />
        </TouchableOpacity>
        <View className=" rounded-lg bg-gray-50 p-1 items-end justify-center">
          <BellIcon size={30} stroke={"#000000"} />
        </View>
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
          <View className="flex-row w-full p-3 bg-green-50 border border-emerald-400 items-center space-x-4 rounded-xl">
            <MagnifyingGlassIcon size={22} stroke={"grey"} />
            <TextInput
              placeholder="Where would you go "
              keyboardType="default"
              className="flex-1  placeholder:text-lg"
            />
            <HeartIcon size={22} stroke={"#000000"} />
          </View>

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
