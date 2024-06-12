import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Modal from "react-native-modal";
import { modalstates } from "../ui/sideMenu";
import { XMarkIcon } from "react-native-heroicons/solid";
import {
  ViewfinderCircleIcon,
  MapPinIcon,
  ArrowsPointingInIcon,
} from "react-native-heroicons/outline";
import { MapPinIcon as PinIcon } from "react-native-heroicons/solid";
import { useDispatch } from "react-redux";
import { setTolocation, setFromlocation } from "@/features/locationSlice";
import { useRouter } from "expo-router";
// import { useNavigation } from "expo-router";

interface recentPlace {
  name: string;
  location: string;
  distance: number;
}

export default function SelectLocations({ state, setState }: modalstates) {
//  const navigation=useNavigation<any>()
  const router = useRouter()
  const dispatch = useDispatch();
  const [focused, setFocused] = React.useState<boolean>(false);
  const [fromInput, setFromInput] = React.useState<string>();
  const [toInput, setToInput] = React.useState<string>();
  const [issubmitted, setIsSumbited] = React.useState<boolean>(false);

  function handleCancel() {
    setIsSumbited(false);
    setFromInput("");
    setState(false);
    setToInput("");
    setFocused(false);
  }

  function handleFocus() {
    if (fromInput?.length !== 0) {
      setFocused(true);
    } else {
      setFocused(false);
    }
  }

  function handleSubmit() {
    if (fromInput?.length !== 0 && toInput?.length !== 0) {
      setIsSumbited(true);
    } else {
      setIsSumbited(false);
    }
  }

  function confirmlocations() {
    dispatch(setFromlocation({ name: fromInput, lat: null, long: null }));
    dispatch(setTolocation({ name: toInput, lat: null, long: null }));
    router.navigate('transport')
  }

  return (
    <Modal
      isVisible={state}
      style={styles.Modal}
      className={`bg-white ${
        issubmitted ? "mt-[55vh]" : "mt-[70%]"
      }  rounded-t-2xl  items-center justify-start `}
    >
      <View className="flex-row w-full  mx-auto pt-3 pb-4 justify-center px-1">
        <View className="flex-1 items-center justify-center">
          <View className="w-48 h-2 rounded-lg bg-gray-400  ml-8" />
        </View>
        <XMarkIcon
          size={30}
          color={"#000000"}
          onPress={() => handleCancel()}
          className=""
        />
      </View>

      <Text className="text-3xl font-semibold text-gray-600 border-b w-full  text-center pb-2.5 border-gray-300">
        Select Address
      </Text>

      {!issubmitted ? (
        <>
          <View className="w-full p-2 mt-3 space-y-4 border-b border-gray-300 pb-5">
            <View
              className={` flex-row space-x-2 rounded-md px-2 py-1 items-center ${
                focused
                  ? "border-green-500  border-2"
                  : "border-gray-400 border"
              }`}
            >
              <ViewfinderCircleIcon
                size={30}
                color={`${focused ? "#22c55e" : "#6b7280"}`}
              />
              <TextInput
                placeholder="from"
                className=" placeholder:text-xl placeholder:text-black p-3 flex-1"
                onChangeText={(value: string) => setFromInput(value)}
                onEndEditing={() => handleFocus()}
                value={fromInput}
              />
              <ArrowsPointingInIcon
                size={30}
                color={focused ? "#dc2626" : "#ffffff"}
              />
            </View>

            <View className="border flex-row space-x-2 border-gray-400 rounded-md px-2  py-1 bg-white items-center">
              <MapPinIcon size={30} color={"#6b7280"} />
              <TextInput
                placeholder="To"
                className=" placeholder:text-xl placeholder:text-black  flex-1 p-3"
                value={toInput}
                onChangeText={(value) => setToInput(value)}
                onEndEditing={() => handleSubmit()}
              />
            </View>
          </View>
          <View className="flex-1 w-full py-3 ">
            <Text className="text-xl font-semibold w-full mx-3">
              Recent places
            </Text>
            <ScrollView showsVerticalScrollIndicator={false}>
              <RecentPlace
                name="Office"
                location="3973 Westheimer Rd.santa Ana, Illinous 85486"
                distance={2.7}
              />
            </ScrollView>
          </View>
        </>
      ) : (
        <>
          <View className="flex-row w-full  py-3 items-start space-x-2 px-4 mt-3">
            <PinIcon size={30} className="" color={"#dc2626"} />
            <View className="flex-1">
              <Text className="text-2xl font-semibold ">{fromInput}</Text>
              <Text className=" text-gray-500">
                3973 Westheimer Rd.santa Ana, Illinous 85486
              </Text>
            </View>
          </View>
          <View className="flex-row w-full  py-3 items-start space-x-2 px-4 ">
            <PinIcon size={30} className="" color={"#22c55e"} />
            <View className="flex-1">
              <Text className="text-2xl font-semibold ">{toInput}</Text>
              <Text className=" text-gray-500 ">
                3973 Westheimer Rd.santa Ana, Illinous 85486
              </Text>
            </View>
            <Text className="text-xl font-semibold self-center">1.1km </Text>
          </View>
          <TouchableOpacity className="w-[95%] rounded-lg bg-emerald-600 py-3 my-auto" onPress={confirmlocations}>
            <Text className="text-center text-white text-lg font-semibold">
              Confirm location
            </Text>
          </TouchableOpacity>
        </>
      )}
    </Modal>
  );
}

const RecentPlace = ({ name, location, distance }: recentPlace) => {
  return (
    <>
      <View className="flex-row w-full px-3 py-3 items-start space-x-2">
        <PinIcon size={30} className="" color={"#000000"} />
        <View className="flex-1">
          <Text className="text-xl font-semibold ">{name}</Text>
          <Text className=" text-gray-400 ">{location}</Text>
        </View>
        <Text className="text-xl font-semibold">{distance} KM</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Modal: {
    marginBottom: 0,
    marginHorizontal: 0,
  },
});
