import { View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { EyeSlashIcon, EyeIcon } from "react-native-heroicons/outline";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const PasswordInput = ({placeholder}:{placeholder:string}) => {
  const [password, setPassword] = useState<string>('');
  const [hiddenPassword, setHiddenPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  function changeIntoStars(password: string): void {
    let hiddenPassword = '';
    for (let index = 0; index < password.length; index++) {
      hiddenPassword += '*';
    }
    setHiddenPassword(hiddenPassword);
  }

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    changeIntoStars(value);
  }

  return (
    <View className="border-2 border-gray-200 rounded-lg flex-row justify-between px-3 py-4 items-center my-2">
      <TextInput
        className="placeholder:text-lg"
        placeholder={placeholder}
        keyboardType="default"
        value={showPassword ? password : hiddenPassword}
        onChangeText={(value)=>handlePasswordChange(value)}
        secureTextEntry={!showPassword}
      />
      <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
        {showPassword ? (
          <EyeSlashIcon size={20} stroke={"#6b7280"} className="stroke-gray-500" />
        ) : (
          <EyeIcon size={20} stroke={"#6b7280"} className="stroke-gray-500" />
        )}
      </TouchableOpacity>
    </View>
  );
};


export function GooglePlacesInput(){
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      onFail={(error)=>console.log("failed",error)}
      onNotFound={()=>console.log(('not found'))}
      query={{
        key: 'AIzaSyCgknORfb9F_EZ4OC5MmhGYY8QDndkRFZ4',
        language: 'en',
      }}
      debounce={3000}
    />
  );
};

export default PasswordInput;
