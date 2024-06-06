import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  PermissionsAndroid,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import LocationIcon from "../ui/LocationIcon";
import { useNavigation } from "expo-router";
import { setUserlocation } from "@/features/locationSlice";
import * as Location from "expo-location";
import { useDispatch } from "react-redux";

const LocationRequestModal = () => {
  const dispatch = useDispatch()
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const navigation = useNavigation<any>();

  const [showModal, setShowModal] = useState(true);

  //this is the function to request the user to acces his/her location
  const handlePermissionGranted = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === Location.PermissionStatus.GRANTED) {
        let geolocation = await Location.getCurrentPositionAsync({});
        setLocation(geolocation);
        dispatch(setUserlocation({lat:geolocation?.coords?.latitude,long:geolocation?.coords?.longitude}))
      } else {
        console.log("Location permission denied");
      }
      setShowModal(false);
      navigation.navigate("welcome");
    } catch (err) {
      console.warn("Error requesting location permission", err);
    }
  };

  //funtion to handle the
  const handlePermissionDenied = () => {
    navigation.navigate("welcome");
    setShowModal(false);
  };

  return (
    <Modal
      isVisible={showModal}
      className="bg-white h-[400px] justify-start pt-12 rounded-xl"
      style={styles.modal}
    >
      <LocationIcon />

      <View className="items-center gap-2 pt-12">
        <Text className="text-2xl font-QuickSand font-semibold">
          Enable your location
        </Text>
        <Text className="text-gray-500 items-center w-[70%] text-center text-lg leading-5">
          Choose youe cloation to start finding request near you
        </Text>
      </View>

      <View className="mt-12 px-5">
        <TouchableOpacity
          className="px-4 bg-green-500 rounded-lg hover:scale-105 transition animate-pulse"
          onPress={handlePermissionGranted}
        >
          <Text className="text-white px-3 py-2 text-lg text-center">
            Use my location
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="px-4 rounded-lg hover:scale-105 transition animate-pulse mt-2"
          onPress={handlePermissionDenied}
        >
          <Text className="px-3 py-2 text-lg text-center text-gray-600">
            {" "}
            Skip for now
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    maxHeight: 500,
    marginVertical: "auto",
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LocationRequestModal;
