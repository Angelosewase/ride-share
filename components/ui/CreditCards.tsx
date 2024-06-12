import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { ImageSourcePropType } from "react-native";

type imageSource = Record<string, ImageSourcePropType>;

interface creditCardData {
  numberDetails: number | string;
  image: imageSource;
  expiryDate: string;
}

const creditcardsdata: Array<creditCardData> = [
  {
    numberDetails: "4111 1111 1111 1111 ",
    image: require("@/assets/ride_share/Payment.png"),
    expiryDate: "24/7",
  },
  {
    numberDetails: "5431 1111 1111 1111 ",
    image: require("@/assets/ride_share/Payment (1).png"),
    expiryDate: "24/7",
  },
  {
    numberDetails: "mailaddresse@email.com",
    image: require("@/assets/ride_share/Payment (2).png"),
    expiryDate: "24/7",
  },
  {
    numberDetails: "Cash",
    image: require("@/assets/ride_share/Payment (3).png"),
    expiryDate: "24/7",
  },
];

const CreditCard = ({ numberDetails, image, expiryDate }: creditCardData) => {
  return (
    <>
      <TouchableOpacity className="flex-row border border-emerald-500 bg-emerald-50 rounded p-2 w-full items-center space-x-2 mb-2">
        <Image source={image} />
        <View>
          <Text className="text-xl font-semibold tet-gray-600">
            {numberDetails}
          </Text>
          <Text className="text-base text-gray-500">Expires:{expiryDate}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const CreditCards = () => {
  return (
     <ScrollView className="mt-5  " showsVerticalScrollIndicator={false}>
        <Text className="text-2xl text-gray-600 font-semibold mb-5 ">select payment method</Text>
        {
            creditcardsdata.map((data,idx)=> <CreditCard {...data} key={idx}/>)
        }
     </ScrollView>
  );
};

export default CreditCards;
