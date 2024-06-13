import Modal from "react-native-modal";
import { modalstates } from "../ui/sideMenu";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { XMarkIcon } from "react-native-heroicons/solid";

export function ComplainSuccessModal({ state, setState }: modalstates) {
  function handleCancel() {
    setState(false);
  }

  const router = useRouter();
  return (
    <Modal
      isVisible={state}
      className="bg-white h-[400px] justify-start rounded-xl"
      style={styles.modal}
    >
        <View className="mt-1 w-full items-end pr-5">

      <XMarkIcon
        size={30}
        color={"#000000"}
        onPress={() => handleCancel()}
        className=""
      />
        </View>

      <View className="items-center mt-16">
        <Image
          source={require("@/assets/ride_share/Group 6476.png")}
          className="h-40 w-40"
        />
        <View>
          <Text className="text-2xl text-center mb-1 mt-2">
            Sent Succesfully
          </Text>
          <Text className="text-base">
            Your complain has been sent succesfully
          </Text>
        </View>
      </View>

      <View className="mt-4 px-5">
        <TouchableOpacity
          className="px-4 bg-emerald-500 rounded-lg hover:scale-105 transition animate-pulse"
          onPress={() => router.navigate("/home")}
        >
          <Text className="text-white px-3 py-2 text-lg text-center">
            Back Home
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

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
