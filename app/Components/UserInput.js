import React from "react";
import { Text, View, TextInput, textInput } from "react-native";

import { styles } from "../config/Styles";

export function Input({ label, placeholder, onChangeText, textInput }) {
  return (
    <View style={styles.inputContainer}>
      <Text>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder={placeholder}
        selectTextOnFocus={true}
        value={textInput}
      />
    </View>
  );
}
