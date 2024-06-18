import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { HamburgerIcon, NotificationIcon } from "@/components/ui/utils";
import SideMenu from "@/components/ui/sideMenu";
import { ArrowLongLeftIcon, ArrowLongRightIcon } from "react-native-heroicons/solid";

export interface financialStatsProps {
  amount: number;
  description: string;
}

export interface transactionProps {
  name: string;
  time: string;
  amount: number;
  type: "income" | "expense";
}

const FinancialStats = ({ amount, description }: financialStatsProps) => {
  return (
    <>
      <View className="border border-emerald-500 rounded-lg bg-blue-50 px-9 py-8 ">
        <Text className="text-center text-3xl font-semibold">${amount}</Text>
        <Text className="text-base">{description}</Text>
      </View>
    </>
  );
};

const TransactionRecord = ({ name, time, amount, type }: transactionProps) => {
  return (
    <>
      <View className="flex-row items-center border rounded-lg border-emerald-500 my-2 w-[100%]  p-2.5 ">
        {type === "expense" ? (
          <View className="p-3 rounded-full bg-red-300 mr-3 -rotate-45">
            <ArrowLongLeftIcon size={28} color={"#000000"} />
          </View>
        ) : (
          <View className="p-3 rounded-full bg-green-200 mr-3 -rotate-45">
            <ArrowLongRightIcon size={28} color={"#000000"} />
          </View>
        )}
        <View className="flex-1">
          <Text className="text-xl font-semibold ">{name}</Text>
          <Text className="text-base  ">{time}</Text>
        </View>
        <Text className="text-xl font-semibold ml-3">{type==="expense" && "-"}${amount}</Text>
      </View>
    </>
  );
};

const Wallet = () => {
  const [showsSideMenu, setshowSideMenu] = React.useState<boolean>(false);
  return (
    <SafeAreaView className="bg-white flex-1  px-3">
      {showsSideMenu && (
        <SideMenu setState={setshowSideMenu} state={showsSideMenu} />
      )}
      <View className=" flex-row justify-between mt-4 w-full">
        <HamburgerIcon setshowSideMenu={setshowSideMenu} />
        <NotificationIcon />
      </View>
      <View className="w-full items-center mt-8">
        <TouchableOpacity className="border border-emerald-500 rounded-lg px-12 py-3 ml-auto mr-1.5 ">
          <Text className="text-lg text-emerald-500 font-semibold">
            Add money
          </Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row mt-10 justify-between ">
        <FinancialStats amount={500} description="Available Balance" />
        <FinancialStats amount={200} description="Total expense"/>
      </View>
      <View className="w-full justify-between flex-row mt-10 items-center">
        <Text className="text-xl font-semibold">Transactions</Text>
        <Text className="text-emerald-500">see all</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TransactionRecord name="Welton" time="Today at 9:30 am" type="expense" amount={500} />
        <TransactionRecord name="Angel" time="Yesterday at 9:30 am" type="income" amount={1000} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Wallet;
