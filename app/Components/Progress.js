import React from "react";
import { Text, View } from "react-native";
import ProgressBar from "react-native-progress/Bar";

import { styles } from "../config/Styles";

export function Fullness({ progress, label }) {
  return (
    <View style={styles.inputContainer}>
      <Text>
        {label}
        {Math.round(progress * 100)}%
      </Text>
      <ProgressBar
        progress={progress}
        width={200}
        height={30}
        borderWidth={2}
      />
    </View>
  );
}
