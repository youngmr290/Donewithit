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
import { getData, sum } from "../Components/Functions";
import { Fullness } from "../Components/Progress";

let defaultFeedAvailable = {
  barley: 0,
  oats: 0,
  lupins: 0,
  pellets: 0,
};
let defaultFeedFed = {
  barley: { Ewes: 0, Wethers: 0, Hoggerts: 0, Lambs: 0 },
  oats: { Ewes: 0, Wethers: 0, Hoggerts: 0, Lambs: 0 },
  lupins: { Ewes: 0, Wethers: 0, Hoggerts: 0, Lambs: 0 },
  pellets: { Ewes: 0, Wethers: 0, Hoggerts: 0, Lambs: 0 },
};
let defaultFeedStorage = { barley: 0, oats: 0, lupins: 0, pellets: 0 };

function FeedSummaryScreen({ navigation }) {
  const [feedAvailable, setTextFeed] = useState({
    barley: 0,
    oats: 0,
    lupins: 0,
    pellets: 0,
  });
  const [feedFed, setTextFeedFed] = useState({
    barley: { Ewes: 0, Wethers: 0, Hoggerts: 0, Lambs: 0 },
    oats: { Ewes: 0, Wethers: 0, Hoggerts: 0, Lambs: 0 },
    lupins: { Ewes: 0, Wethers: 0, Hoggerts: 0, Lambs: 0 },
    pellets: { Ewes: 0, Wethers: 0, Hoggerts: 0, Lambs: 0 },
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
    getData("feedFed", setTextFeedFed, defaultFeedFed);
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

  var fedEwe = 0;
  for (var key in feedFed) {
    fedEwe += feedFed[key]["Ewes"];
  }
  var fedWeth = 0;
  for (var key in feedFed) {
    fedWeth += feedFed[key]["Wethers"];
  }
  var fedHog = 0;
  for (var key in feedFed) {
    fedHog += feedFed[key]["Hoggerts"];
  }
  var fedLamb = 0;
  for (var key in feedFed) {
    fedLamb += feedFed[key]["Lambs"];
  }

  console.log("prog", progressBarley);
  console.log("bar", feedAvailable.barley);
  console.log("ewe", fedEwe);

  return (
    <View style={styles.background}>
      {F_MenuBar(
        navigation,
        feedAvailable,
        feedStorage,
        feedFed,
        defaultFeedFed,
        defaultFeedAvailable
      )}
      <View style={styles.entryContainer}>
        {/* <Text>{feedAvailable.barley}</Text> */}
        {/* <Text style={styles.heading}>{progressBarley}</Text> */}
        <Text style={{ fontSize: 16 }}>Silo Status</Text>
        {/* <ProgressBar progress={0.4} width={200} height={30} borderWidth={2} /> */}
        <Fullness progress={progressBarley} label={"Barley: "} />
        <Fullness progress={progressOats} label={"Oats: "} />
        <Fullness progress={progressLupins} label={"Lupins: "} />
        <Fullness progress={progressPellets} label={"Pellets: "} />
        <View style={styles.feedSummaryContainer}>
          <Text style={{ fontSize: 16 }}>Suplement Fed</Text>
          <View style={styles.feedbar}>
            <View>
              <Text>Ewes</Text>
              <Text>{fedEwe}</Text>
            </View>
            <View>
              <Text>Wethers</Text>
              <Text>{fedWeth}</Text>
            </View>
            <View>
              <Text>Hoggerts</Text>
              <Text>{fedHog}</Text>
            </View>
            <View>
              <Text>Lambs</Text>
              <Text>{fedLamb}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default FeedSummaryScreen;
