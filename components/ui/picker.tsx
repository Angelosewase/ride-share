import { View, Text ,StyleSheet} from 'react-native'
import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select'
import { SelectCountry } from 'react-native-element-dropdown';


const local_data = [
  {
    value: '1',
    lable: 'Country 1',
    image: {
      uri: '../../assets/ride_share/Flag (1).png',
    },
  },
  {
    value: '2',
    lable: 'Country 2',
    image: {
      uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
    },
  },
  {
    value: '3',
    lable: 'Country 3',
    image: {
      uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
    },
  },
  {
    value: '4',
    lable: 'Country 4',
    image: {
      uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
    },
  },
  {
    value: '5',
    lable: 'Country 5',
    image: {
      uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
    },
  },
];

export default function  SelectCountryScreen  () {
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
      data={local_data}
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
    margin: 16,
    height: 40,
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
    marginLeft: 8,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});