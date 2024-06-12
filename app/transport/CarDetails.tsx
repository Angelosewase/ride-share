import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { carSelector } from "@/features/carSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import { Back } from "@/components/ui/utils";
import {
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "react-native-heroicons/solid";
import {
  Battery50Icon,
  BoltIcon,
  WrenchScrewdriverIcon,
  RocketLaunchIcon,
} from "react-native-heroicons/outline";

import { useRouter } from "expo-router";

const CarDetails = () => {
  const car = useSelector(carSelector);

  const carsfeaturesdata: Array<carFeature> = [
    {
      name: "model",
      value: car.features?.model,
    },
    {
      name: "capacity",
      value: `${car.features?.capacity}hp`,
    },
    {
      name: "color",
      value: car.features?.color,
    },
    {
      name: "fuel type",
      value:car.features?.fuelType,
    },
    {
      name: "gear type",
      value: car.features?.gearType,
    },
  ];


  const router= useRouter()

  return (
    <SafeAreaView className="flex-1 bg-white px-2">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Back />

        <View className="mt-10">
          <Text className="text-3xl text-gray-700 font-semibold">
            {car.name}
          </Text>
          <View className="flex-row  items-center space-x-1">
            <StarIcon size={30} color={"#facc15"} />
            <View className="flex-row  space-x-1">
              <Text className="text-gray-400">{car.stars}</Text>
              <Text className="text-gray-400">({car.reviews} reviews) </Text>
            </View>
          </View>
        </View>

        <View className=" w-full items-center mt-8 flex-row justify-center space-x-3  py-4">
          <TouchableOpacity>
            <ChevronLeftIcon size={32} color={"#000000"} />
          </TouchableOpacity>
          <Image
            source={car.mainImage || require("@/assets/ride_share/Car (1).png")}
            className="flex-1"
          />
          <TouchableOpacity>
            <ChevronRightIcon size={32} color={"#000000"} />
          </TouchableOpacity>
        </View>

        <View className="mt-10">
          <Text className="text-2xl text-gray-700 ">
            Specifications
          </Text>
          <View className="flex-row space-x-3.5">
            <View className="flex-row  mb-5 mt-2">
              <View className="border border-emerald-500 rounded-xl bg-emerald-50 p-2 items-center justify-center">
                <Battery50Icon size={38} color={"#4b5563"} rotation={-90} />
                <Text className="text-base text-gray-600 font-semibold">
                  Max.power
                </Text>
                <Text className=" text-gray-500">
                  {car.specification?.max_power}hp
                </Text>
              </View>
            </View>
            <View className="flex-row  mb-5 mt-2">
              <View className="border border-emerald-500 rounded-xl bg-emerald-50 p-2 items-center justify-center">
                <WrenchScrewdriverIcon size={38} color={"#4b5563"} />
                <Text className="text-base text-gray-600 font-semibold">
                  Fuel
                </Text>
                <Text className=" text-gray-500">
                  {car.specification?.max_power}km per liter
                </Text>
              </View>
            </View>

            <View className="flex-row  mb-5 mt-2">
              <View className="border border-emerald-500 rounded-xl bg-emerald-50 p-2  items-center justify-center">
                <BoltIcon size={38} color={"#4b5563"} />
                <Text className="text-base text-gray-600 font-semibold">
                  Max.speed
                </Text>
                <Text className=" text-gray-500">
                  {car.specification?.max_speed}kph
                </Text>
              </View>
            </View>

            <View className="flex-row  mb-5 mt-2">
              <View className="border border-emerald-500 rounded-xl bg-emerald-50 p-2 items-center justify-center">
                <RocketLaunchIcon size={38} color={"#4b5563"} />
                <Text className="text-base text-gray-600 font-semibold">
                  0-60mph
                </Text>
                <Text className=" text-gray-500">
                  {car.specification?.acceleration}sec
                </Text>
              </View>
            </View>
          </View>
        </View>
        <CarFeatures features={carsfeaturesdata} />

        <View className="w-full flex-row space-x-2 mb-2 mt-4">
          <TouchableOpacity className="flex-1 border border-emerald-500  rounded-lg p-3 items-center justify-center">
            <Text className="text-emerald-500 font-semibold text-center text-lg">Book later</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 border border-emerald-500 bg-emerald-500 rounded-lg p-3">
            <Text className="text-white font-semibold text-center text-lg  " onPress={()=> router.navigate('transport/requestRent')} >Ride now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

interface carFeature {
  name: string;
  value: string | null | undefined;
}

const CarFeature = ({ name, value }: carFeature) => {
  return (
    <>
      <View className="flex-1 border border-emerald-500 rounded-md bg-emerald-50 justify-between p-3  flex-row my-1">
        <Text className="text-gray-500 text-lg ">{name}</Text>
        <Text className="text-gray-500 text-lg ">{value}</Text>
      </View>
    </>
  );
};

const CarFeatures = ({ features }: { features: Array<carFeature> }) => {
  return (
    <View className="">
      <Text className="text-2xl text-gray-800  mb-1">Car features</Text>
      <View className="">
        {features.map((feature,idx) => (
          <CarFeature {...feature} key={idx} />
        ))}
      </View>
    </View>
  );
};

export default CarDetails;
