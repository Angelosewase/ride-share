import {
  View,
  Text,
  ImageSourcePropType,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Back } from "@/components/ui/utils";
import { CheckCircleIcon } from "react-native-heroicons/outline";

export default function Language() {
  const [languagestate, SetlanguageState] = React.useState<number>(7);

  return (
    <SafeAreaView className="flex-1 bg-white px-3">
      <View className="flex-row  mt-3 items-center">
        <Back />
        <Text className="text-2xl font-semibold ml-16">change language</Text>
      </View>
      <ScrollView className="mt-10">
        {languagesData.map((data, idx) => (
          <LanguageSl
            {...data}
            key={idx}
            state={languagestate}
            setState={SetlanguageState}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

type imagetype = Record<string, ImageSourcePropType>;

interface language {
  name: string;
  id: number;
  flag: imagetype;
  countyname: string;
}

interface props extends language {
  state: number;
  setState: Function;
}

const languagesData: Array<language> = [
  {
    name: "Dutch",
    id: 0,
    flag: require("@/assets/ride_share/Flag.png"),
    countyname: "Netherlands",
  },
  {
    name: "Turkish",
    id: 1,
    flag: require("@/assets/ride_share/Flag (1).png"),
    countyname: "turkey",
  },
  {
    name: "Portugese",
    id: 2,
    flag: require("@/assets/ride_share/Flag (2).png"),
    countyname: "Portugal",
  },
  {
    name: "German",
    id: 3,
    flag: require("@/assets/ride_share/Flag (3).png"),
    countyname: "Germany",
  },
  {
    name: "French",
    id: 4,
    flag: require("@/assets/ride_share/Flag (4).png"),
    countyname: "France",
  },
  {
    name: "arabic",
    id: 5,
    flag: require("@/assets/ride_share/Flag (5).png"),
    countyname: "UAE",
  },
  {
    name: "Hindi",
    id: 6,
    flag: require("@/assets/ride_share/Flag (6).png"),
    countyname: "India",
  },
  {
    name: "English ",
    id: 7,
    flag: require("@/assets/ride_share/Flag (7).png"),
    countyname: "USA",
  },
];

const LanguageSl = ({ name, id, flag, countyname, state, setState }: props) => {
  function haandleclick() {
    setState(id);
  }

  return (
    <>
      <TouchableOpacity
        className={`flex-row w-full p-3  my-2  rounded-lg items-center ${
          state === id
            ? "border-emerald-500 border-2"
            : "border border-zinc-300  "
        }`}
        onPress={haandleclick}
      >
        <View>
          <Image source={flag} className="h-10 w-14" />
        </View>
        <View className="flex-1 ml-2 ">
          <Text className="text-xl  ">{name}</Text>
          <Text className="text-base text-gray-400  ml-1">{countyname}</Text>
        </View>
        <View>
          <CheckCircleIcon
            size={24}
            color={state === id ? "#0d9488" : "#6b7280"}
          />
        </View>
      </TouchableOpacity>
    </>
  );
};
