import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  PermissionsAndroid,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import LocationIcon from "../ui/LocationIcon";

const LocationRequestModal = () => {
  const [showModal, setShowModal] = useState(true);

  //this is the function to request the usr's location access
  const handlePermissionGranted = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
      } else {
        console.log("Camera permission denied");
      }
      setShowModal(false);
    } catch (err) {
      console.warn(err);
    }
  };

  //funtion to handle the
  const handlePermissionDenied = () => {
    setShowModal(false);
  };

  return (
    <Modal
      isVisible={showModal}
      className="bg-white h-[400px] justify-start pt-10 rounded-xl"
      style={styles.modal}
    >
      <LocationIcon />


      <View  className="items-center gap-2 pt-8">
        <Text className="text-2xl font-QuickSand font-semibold">
          Enable your location
        </Text>
        <Text className="text-gray-500 items-center w-[70%] text-center text-lg leading-5">
          Choose youe cloation to start finding request near you
        </Text>
      </View>


      <View className="mt-8 px-5">
        <TouchableOpacity
          className="px-4 bg-green-500 rounded-lg hover:scale-105 transition animate-pulse"
          onPress={handlePermissionGranted}
        >
          <Text className="text-white px-3 py-2 text-lg text-center">Use my location</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="px-4 rounded-lg hover:scale-105 transition animate-pulse"
          onPress={handlePermissionDenied}
        >
          <Text className="px-3 py-2 text-lg text-center"> Skip for now</Text>
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
