import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { Reducer, useEffect, useReducer, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Back } from "@/components/ui/utils";
import { histoyData } from "@/data/placeholderData";

export default function History() {
  return (
    <SafeAreaView className="bg-white flex-1 px-3">
      <View className="flex-row  mt-3 items-center ">
        <Back />
        <Text className="text-2xl font-semibold mx-auto ">History</Text>
      </View>
      <Tab />
    </SafeAreaView>
  );
}

const TabComponent = ({
  name,
  state,
  dispatch,
}: {
  name: string;
  state: boolean;
  dispatch: React.Dispatch<actionType>;
}) => {
  function handlePress() {
    dispatch({ type: name as "upcoming" | "completed" | "cancelled" });
  }

  return (
    <TouchableOpacity
      className={`py-3 flex-1 rounded-md  ${
        state ? "bg-emerald-500  font-semibold text-white " : " bg-emerald-50"
      }`}
      onPress={handlePress}
    >
      <Text
        className={`text-lg  text-center ${
          state ? "font-semibold text-white " : "text-black"
        }`}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

interface TabState {
  upcoming: boolean;
  completed: boolean;
  cancelled: boolean;
}

const initialTabState: TabState = {
  upcoming: true,
  completed: false,
  cancelled: false,
};

type actionType = {
  type: "upcoming" | "completed" | "cancelled";
};

const reducer: Reducer<TabState, actionType> = (state, action) => {
  switch (action.type) {
    case "upcoming":
      return { upcoming: true, completed: false, cancelled: false };
    case "cancelled":
      return { upcoming: false, completed: false, cancelled: true };
    case "completed":
      return { upcoming: false, completed: true, cancelled: false };
    default:
      return state;
  }
};

const Tab = () => {
  const [state, dispatch] = useReducer(reducer, initialTabState);

  let status: "upcoming" | "completed" | "cancelled" ='cancelled';
 
   if(state.cancelled){
    status='cancelled'
   }else if(state.completed){
    status='completed'
   }else{
    status='upcoming'
   }

  return (
    <View>
      <View className="w-full border-2 border-emerald-500 rounded-md flex-row mt-8 bg-emerald-50 ">
        <TabComponent
          name="upcoming"
          state={state.upcoming}
          dispatch={dispatch}
        />
        <TabComponent
          name="completed"
          state={state.completed}
          dispatch={dispatch}
        />
        <TabComponent
          name="cancelled"
          state={state.cancelled}
          dispatch={dispatch}
        />
      </View>
      <HistoryList status={status}/>
    </View>
  );
};

const HistoryItem = ({
  name,
  carName,
  date,
  status,
}: {
  name: string;
  carName: string;
  date: string;
  status: "upcoming" | "completed" | "cancelled";
}) => {
  return (
    <>
      <View className="flex-row justify-between w-full px-2 py-1 border border-emerald-500 rounded-md  items-center my-2">
        <View>
          <Text className="text-lg font-bold ">{name}</Text>
          <Text className="text-base text-gray-500">{carName}</Text>
        </View>
        <View>
          {status === "upcoming" ? (
            <Text className="text-lg ">{date}</Text>
          ) : status === "completed" ? (
            <Text className="text-green-500  font-semibold">Done</Text>
          ) : (
            <Text className="text-red-500  font-semibold ">
              Cancelled
            </Text>
          )}
        </View>
      </View>
    </>
  );
};

export interface historyItem {
    name: string;
    carName: string;
    date: string;
    status: "upcoming" | "completed" | "cancelled";
  }
  
  const HistoryList = ({ status }: { status: "upcoming" | "completed" | "cancelled" }) => {
    const [array, setArray] = useState<Array<historyItem>>([]);
  
    useEffect(() => {
      const filteredArray: Array<historyItem> = filterHistoryList(status);
      setArray(filteredArray);
    }, [status]);
  
    return (
      <>
        <ScrollView className="mt-10">

          {array.map((item, idx) => <HistoryItem key={idx} {...item} />)}
        </ScrollView>
      </>
    );
  };

function filterHistoryList(status:"upcoming" | "completed" | "cancelled"):Array<historyItem>{
  const NewArray = histoyData.filter(data => data.status === status)

  return NewArray
}
