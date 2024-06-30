import { View, Text, StyleSheet, Image, TouchableOpacity, ImageSourcePropType } from "react-native";
import React, { useEffect, useState } from "react";
import Modal from "react-native-modal";
import { modalstates } from "../ui/sideMenu";
import { MapPinIcon, StarIcon, XMarkIcon } from "react-native-heroicons/solid";

import { paymentDetailsSelector } from "@/features/paymentSlice";
import { useSelector } from "react-redux";
import { carSelector } from "@/features/carSlice";
import { useRouter } from "expo-router";



const TransportDetails = ({ state, setState }: modalstates) => {
  function handleCancel() {
    setState(false);
  }
  const router= useRouter()
  

  return (
    <Modal
      isVisible={state}
      className=" bg-white mt-[50vh] justify-start pt-1"
      style={styles.Modal}
      animationIn={"slideInUp"}
      animationOut={"slideOutDown"}
    >
      <View className="flex-row w-full  mx-auto pt-3 pb-4 justify-center px-1 pr-2 ">
        <View className="flex-1 items-center justify-center">
          <View className="w-48 h-2 rounded-lg bg-gray-400  ml-8" />
        </View>
        <XMarkIcon
          size={25}
          color={"#000000"}
          onPress={() => handleCancel()}
          className=""
        />
      </View>

      <Text className="text-2xl font-semibold text-gray-600 border-b w-full  pl-4 pb-2.5 border-gray-300">
        Your driver is coming at 3:35
      </Text>
      <RideDetailComponent />
      <View className="w-full px-3 ">
        <PaymentDetailsComponent />
      </View>

      <View className="flex-row items-center  gap-4 mt-2 px-3">
        <TouchableOpacity className="border border-emerald-700 rounded-lg py-3  px-8 flex-1" onPress={()=>{setState(false); router.navigate('contact/callScreen')}}>
          <Text className="text-xl text-center">Call</Text>
        </TouchableOpacity>
        <TouchableOpacity className="border border-emerald-600 bg-emerald-500 rounded-lg py-3 px-8 flex-1" onPress={()=>{setState(false);router.navigate('contact/messageScreen')}}>
          <Text className="text-xl text-white text-center">Message</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  Modal: {
    marginBottom: 0,
    marginHorizontal: 0,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
});

export default TransportDetails;

export const RideDetailComponent: React.FC = () => {
  const car = useSelector(carSelector);

  return (
    <>
      <View className="w-full items-center flex-row space-x-4 px-4 mt-6 border-b border-gray-400 pb-4">
        <Image
          source={require("@/assets/ride_share/Rectangle 553.png")}
          className=" h-16 w-16"
        />
        <View className="flex-1">
          <Text className="text-xl mb-0.5">Sergio Ramos</Text>
          <View className="flex-row space-x-1">
            <MapPinIcon size={20} color={"#000000"} />
            <Text className="text-base  text-gray-500 ">800m (5 min away)</Text>
          </View>
          <View className="flex-row  items-center space-x-1">
            <StarIcon size={20} color={"#facc15"} />
            <View className="flex-row  space-x-1">
              <Text className="text-gray-500 text-base">{car?.stars}</Text>
              <Text className="text-gray-500 text-base">
                ({car.reviews} reviews)
              </Text>
            </View>
          </View>
        </View>

        <Image
          source={car.image || require("@/assets/ride_share/Car (2).png")}
          className="mx-auto"
        />
      </View>
    </>
  );
};

const PaymentDetailsComponent: React.FC = () => {
  const details = useSelector(paymentDetailsSelector);
  return (
    <>
      <View>
        <View className="flex-row justify-between  mt-4  mb-3">
          <Text className="text-xl font-semibold">Payment Method</Text>
          <Text className="text-3xl text-gray-500 font-semibold">
            {(details.amountDetails?.amount &&
              details.amountDetails?.amount + details.amountDetails?.tax) ||
              0}$
          </Text>
        </View>
        <CreditcardComponent  {...details?.creditCardDetails } />
      </View>
    </>
  );
};

interface props{
  image?:Record<string,ImageSourcePropType>
  numberDetails?: string| number 
  expiryDate?:string 

}

const CreditcardComponent = ({image,numberDetails,expiryDate}:props) => {

  return (
    <>
      <View
        className={`flex-row border border-emerald-500 bg-emerald-50 rounded p-2 w-full items-center space-x-2 
        `}
      >
        <Image source={image} />
        <View>
          <Text className="text-xl font-semibold tet-gray-600">
            {numberDetails}
          </Text>
          <Text className="text-base text-gray-500">Expires:{expiryDate}</Text>
        </View>
      </View>
    </>
  );
};
