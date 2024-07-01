import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { ImageSourcePropType } from "react-native";
import {
  addCreditCardDetails,
  creditcardSelector,
} from "@/features/paymentSlice";
import { useDispatch, useSelector } from "react-redux";

type imageSource = Record<string, ImageSourcePropType>;

export interface creditCardData {
  numberDetails: number | string;
  image: imageSource;
  expiryDate: string;
  id: number;
}

export const creditcardsdata: Array<creditCardData> = [
  {
    numberDetails: "4111 1111 1111 1111 ",
    image: require("@/assets/ride_share/Payment.png"),
    expiryDate: "24/7",
    id: 1,
  },
  {
    numberDetails: "5431 1111 1111 1111 ",
    image: require("@/assets/ride_share/Payment (1).png"),
    expiryDate: "24/7",
    id: 2,
  },
  {
    numberDetails: "mailaddresse@email.com",
    image: require("@/assets/ride_share/Payment (2).png"),
    expiryDate: "24/7",
    id: 3,
  },
  {
    numberDetails: "Cash",
    image: require("@/assets/ride_share/Payment (3).png"),
    expiryDate: "24/7",
    id: 4,
  },
];

interface props extends creditCardData {
  state: number;
  setstate: Function;
}

export const CreditCard = ({
  numberDetails,
  image,
  expiryDate,
  state,
  id,
  setstate,
}: props) => {
  const isSelected: boolean = state === id ? true : false;
  const dispatch = useDispatch();

  function handleclick() {
    setstate(id);
    dispatch(addCreditCardDetails({ numberDetails, image, expiryDate, id }));
  }

  return (
    <>
      <TouchableOpacity
        className={`flex-row border border-emerald-500 bg-emerald-50 rounded p-2 w-full items-center space-x-2 mb-2  ${
          isSelected ? "opacity-100" : "opacity-50"
        }`}
        onPress={() => handleclick()}
      >
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
  const defaultCard = useSelector(creditcardSelector);
  const [selectedcard, setSelectedCard] = React.useState<number>(
    defaultCard?.id || 4
  );
  return (
    <ScrollView className="mt-5  " showsVerticalScrollIndicator={false}>
      <Text className="text-2xl text-gray-600 font-semibold mb-5 ">
        select payment method
      </Text>
      {creditcardsdata.map((data, idx) => (
        <CreditCard
          {...data}
          key={idx}
          state={selectedcard}
          setstate={setSelectedCard}
        />
      ))}
    </ScrollView>
  );
};

export default CreditCards;

const CreditCard2 = ({
  numberDetails,
  image,
  expiryDate,
}: {
  numberDetails: number | string;
  image: imageSource;
  expiryDate: string;
}) => {
  return (
    <>
      <TouchableOpacity
        className={`flex-row border border-emerald-500 bg-emerald-50 rounded p-2 w-full items-center space-x-2 mb-2 opacity-50`}
      >
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

export const CreditCards2 = () => {
  return (
    <>
      <ScrollView className="mt-5  " showsVerticalScrollIndicator={false}>
        {creditcardsdata.map((data, idx) => (
          <CreditCard2 {...data} key={idx} />
        ))}
      </ScrollView>
    </>
  );
};
