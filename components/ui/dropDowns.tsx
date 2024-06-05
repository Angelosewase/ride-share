import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SelectCountry, Dropdown } from "react-native-element-dropdown";

export interface country_data {
  value: string;
  lable: string;
  image: {
    uri: string;
  };
}

export interface city_data {
  label: string;
  value: string;
}

const SelectCountryScreen = ({ data }: { data: Array<country_data> }) => {
  const [country, setCountry] = useState("1");

  return (
    <SelectCountry
      style={styles.dropdown}
      selectedTextStyle={styles.selectedTextStyle}
      placeholderStyle={styles.placeholderStyle}
      imageStyle={styles.imageStyle}
      iconStyle={styles.iconStyle}
      maxHeight={200}
      value={country}
      data={data}
      valueField="value"
      labelField="lable"
      imageField="image"
      placeholder="Select country"
      searchPlaceholder="Search..."
      onChange={(e) => {
        setCountry(e.value);
      }}
    />
  );
};

export const DropdownComponent = ({
  data,
  placeholder,
}: {
  data: Array<city_data>;
  placeholder: string;
}) => {
  const [value, setValue] = useState(null);

  return (
    <Dropdown
      style={Styles.dropdown}
      mode="modal"
      placeholderStyle={Styles.placeholderStyle}
      selectedTextStyle={Styles.selectedTextStyle}
      inputSearchStyle={Styles.inputSearchStyle}
      iconStyle={Styles.iconStyle}
      data={data}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={placeholder}
      searchPlaceholder="Search..."
      value={value}
      onChange={(item: any) => {
        setValue(item?.value);
      }}
    />
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    width: 150,
    paddingHorizontal: 8,
  },
  imageStyle: {
    width: 24,
    height: 24,
    borderRadius: 12,
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
});

//this are the styles for the dropdown component

const Styles = StyleSheet.create({
  dropdown: {
    height: 50
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    color:"#9ca3af"
  },
  selectedTextStyle: {
    fontSize: 16,
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

export default SelectCountryScreen;
