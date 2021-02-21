import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { styles } from "../config/Styles";

export function Button({ text, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={{ color: "#fff", fontSize: 15, fontWeight: "bold" }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
