import { Text, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function App() {
  const router=useRouter()

  return (
    <SafeAreaView className='flex-1 items-center justify-center '>
      <Text style={{ fontSize: 30 ,fontFamily:"QuickSand"}} 
      className=''>QuickSand</Text>
      <TouchableOpacity onPress={()=> router.navigate("/onBoarding")} className='p-4 bg-gray-300 mt-5'>
         <Text>navigate to othe route</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

