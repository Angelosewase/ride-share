import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { Polygon,Svg } from "react-native-svg";

export default function utils() {
  return (
    <View>
      <Text>utils</Text>
    </View>
  );
}

export const Back = () => {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        className="flex-row items-center gap-1 pt-2 "
        onPress={() => navigation.goBack()}
      >
        <ChevronLeftIcon size={24} color={"#000000"} />
        <Text className="text-xl">Back</Text>
      </TouchableOpacity>
    </>
  );
};

export const Hexagon = ({ width, height }:{width:number,height:number}) => {
  // Calculate the points based on width and height
  const points = `
    ${width / 2},${height * 0.05} 
    ${width * 0.95},${height * 0.25} 
    ${width * 0.95},${height * 0.75} 
    ${width / 2},${height * 0.95} 
    ${width * 0.05},${height * 0.75} 
    ${width * 0.05},${height * 0.25}
  `;

  return (
    <View>
      <Svg height={height} width={width}>
        <Polygon
          points={points}
          fill="#33d399"
          stroke="#00CCBB"
          strokeWidth="1"
        />
      </Svg>
    </View>
  );
};
// ("fill:lime;stroke:purple;stroke-width:1");
