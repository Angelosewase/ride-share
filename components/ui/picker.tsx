import { View, Text ,StyleSheet} from 'react-native'
import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select'
import { SelectCountry } from 'react-native-element-dropdown';


export interface country_data {
  value:string,
  lable:string,
  image:{
    uri:string
  }
}


export default function  SelectCountryScreen({data}:{data:Array<country_data>}) {
  const [country, setCountry] = useState('1');

  return (
    <SelectCountry
      style={styles.dropdown}
      mode='auto'
      selectedTextStyle={styles.selectedTextStyle}
      placeholderStyle={styles.placeholderStyle}
      imageStyle={styles.imageStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      search
      maxHeight={200}
      value={country}
      data={data}
      valueField="value"
      labelField="lable"
      imageField="image"
      placeholder="Select country"
      searchPlaceholder="Search..."
      onChange={e => {
        setCountry(e.value);
      }}
    />
  );
};


export const GenderPicker:React.FC =()=>{
    const [value,setValue]= React.useState(null)
    return <>
     <View className='border-gray-200 border-2 rounded-lg my-2'>
        
    <RNPickerSelect 
      onValueChange={(value)=>setValue(value) }
      placeholder={{label:"gender"}}

      items={[
        {
            label:"male",
            value:"male"
        },     
        {
            label:"female",
            value:"female"
        },        {
            label:"others",
            value:"others"
        },
      ]}
    />
     </View>
     
    </>
}



const styles = StyleSheet.create({
  dropdown: {
    flex:1,
    width:100
  },
  imageStyle: {
    width: 24,
    height: 24,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 20,
    fontSize: 16,
  },
});