import React from "react";
import { Text, View, TextInput } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import { styles } from "../config/Styles";

export function Dropdown({ dropdownData, placeholder, onChangeItem }) {
  return (
    <View style={styles.dropdownContainer}>
      <DropDownPicker
        items={dropdownData}
        placeholder={placeholder}
        containerStyle={{ height: 40 }}
        dropDownStyle={{ height: 100 }}
        zIndex={99999}
        onChangeItem={onChangeItem} //{(item) => console.log(item.label, item.value)}
      />
    </View>
  );
}
