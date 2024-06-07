import { View, Text, Image ,TextInput} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SideMenu from "@/components/ui/sideMenu";
import { HamburgerIcon } from "@/components/ui/utils";
import { countryData } from "@/placeholderData";
import CountryPicker   from '@/components/ui/dropDowns'

const Profile = () => {
  const [showsSideMenu, setshowSideMenu] = React.useState<boolean>(false);
  return (
    <SafeAreaView className="bg-white flex-1 px-3">
      {showsSideMenu && (
        <SideMenu setState={setshowSideMenu} state={showsSideMenu} />
      )}
      <View className="flex-row w-full  items-center mt-4">
        <HamburgerIcon setshowSideMenu={setshowSideMenu} />
        <Text className="text-2xl font-semibold mx-auto">profile</Text>
      </View>

      <View className="self-center mt-10">
        <Image source={require("@/assets/ride_share/Ellipse 43.png")} className="h-36 w-36"/>
        <Text className="text-3xl font-semibold text-center mt-4 text-gray-600">Nate Samson</Text>
      </View>
      <View className="mt-4">
        <View className="w-full rounded-lg border-gray-400 p-4 border ">
              <Text className="text-xl text-gray-700">net@email.com</Text>
        </View>
        <View
            className="border border-gray-400 rounded-lg flex-row items-center space-x-2 my-3  p-2
        "
          >
            <CountryPicker data={countryData}/>
            <TextInput
              placeholder="your phone number"
              keyboardType="phone-pad"
              className=" border-gray-200  placeholder:text-lg my-2 flex-1"
            />
          </View>
          <View className="w-full rounded-lg border-gray-400 p-4 border my-3">
              <Text className="text-xl text-gray-700">Male</Text>
        </View>          
        <View className="w-full rounded-lg border-gray-400 p-4 border my-3">
              <Text className="text-xl text-gray-700">Address</Text>
        </View>
      </View>
      <View className="w-[98%] rounded-lg border-emerald-400 p-4 border mt-10  self-center py-4">
        <Text className="text-emerald-400 text-xl text-center">
          Log out
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
