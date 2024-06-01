
import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function IndexPage(){
    const router= useRouter()
    return (
        <SafeAreaView>
            <Text>Hello this is the index page</Text>
              <Button title="navigate to other routes" onPress={()=>router.navigate("onBoarding")}/>
        </SafeAreaView>
    )
}