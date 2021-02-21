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
import { useEffect, useState } from "react";
// import ProgressBar from "react-native-progress/Bar";

import { F_MenuBar } from "../config/MenuBar";
import { styles } from "../config/Styles";
import { getData } from "../Components/Functions";
import { Fullness } from "../Components/Progress";

let defaultFeedAvailable = { barley: 0, oats: 0, lupins: 0, pellets: 0 };
let defaultFeedStorage = { barley: 0, oats: 0, lupins: 0, pellets: 0 };

function FeedSummaryScreen({ navigation }) {
  const [feedAvailable, setTextFeed] = useState({
    barley: 0,
    oats: 0,
    lupins: 0,
    pellets: 0,
  });
  const [feedStorage, setTextFeedStorage] = useState({
    barley: 0,
    oats: 0,
    lupins: 0,
    pellets: 0,
  });

  // console.log(route.params.feedAvailableNew);
  // setTextFeed(route.params.feedAvailableNew);
  // const { feedAvailableNew } = route.params;
  // setTextFeed(route.params.feedAvailableNew);
  // const { feedStorageNew } = route.params;
  // console.log("barley sdfghj", feedAvailableNew);

  useEffect(() => {
    getData("feedAvailable", setTextFeed, defaultFeedAvailable);
    getData("feedStorage", setTextFeedStorage, defaultFeedStorage);
  }, []);

  let progressBarley =
    Math.min(
      Math.max(
        Math.round((feedAvailable.barley / feedStorage.barley) * 100) / 100,
        0
      ),
      1
    ) || 0;
  let progressOats =
    Math.min(
      Math.max(
        Math.round((feedAvailable.oats / feedStorage.oats) * 100) / 100,
        0
      ),
      1
    ) || 0;
  let progressLupins =
    Math.min(
      Math.max(
        Math.round((feedAvailable.lupins / feedStorage.lupins) * 100) / 100,
        0
      ),
      1
    ) || 0;
  let progressPellets =
    Math.min(
      Math.max(
        Math.round((feedAvailable.pellets / feedStorage.pellets) * 100) / 100,
        0
      ),
      1
    ) || 0;
  console.log("prog", progressBarley);

  return (
    <View style={styles.background}>
      {F_MenuBar(navigation, feedAvailable, feedStorage)}
      <View style={styles.entryContainer}>
        {/* <Text>{feedAvailable.barley}</Text> */}
        {/* <Text style={styles.heading}>{progressBarley}</Text> */}
        <Text style={{ fontSize: 16 }}>Feed available in storage</Text>
        {/* <ProgressBar progress={0.4} width={200} height={30} borderWidth={2} /> */}
        <Fullness progress={progressBarley} label={"Barley: "} />
        <Fullness progress={progressOats} label={"Oats: "} />
        <Fullness progress={progressLupins} label={"Lupins: "} />
        <Fullness progress={progressPellets} label={"Pellets: "} />
      </View>
    </View>
  );
}

export default FeedSummaryScreen;
