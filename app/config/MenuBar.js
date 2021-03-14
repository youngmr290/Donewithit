import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";

import { styles } from "../config/Styles";

export function F_MenuBar(
  navigation,
  feedAvailable,
  feedStorage,
  feedFed,
  defaultFeedFed,
  defaultFeedAvailable
) {
  return (
    <View style={styles.menubar}>
      <TouchableOpacity
        // onPress={() => navigation.navigate("Feed Summary")}
        onPress={() => {
          navigation.navigate("Feed Summary", {
            feedAvailableNew: feedAvailable,
            feedStorage: feedStorage,
            feedFed: feedFed,
          });
        }}
      >
        <Image
          style={styles.menuicon}
          source={require("../assets/homeicon.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Feed Entry", {
            feedAvailable: feedAvailable,
            feedStorage: feedStorage,
            feedFed: feedFed,
            defaultFeedFed: defaultFeedFed,
            defaultFeedAvailable: defaultFeedAvailable,
          });
        }}
      >
        <Image
          style={styles.menuicon}
          source={require("../assets/entryicon.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Alert.alert("", "Coming Soon")}>
        <Image
          style={styles.menuicon}
          source={require("../assets/logicon.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Settings", {
            feedAvailable: feedAvailable,
            feedStorage: feedStorage,
            feedFed: feedFed,
          });
        }}
      >
        <Image
          style={styles.menuicon}
          source={require("../assets/settingsicon.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

// const styles = StyleSheet.create({
//   menubar: {
//     width: "100%",
//     height: 70,
//     backgroundColor: "#3498DB",
//     // backgroundColor: "#6495ED",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-evenly",
//   },
//   menuicon: {
//     height: 60,
//     width: 60,
//   },
// });
