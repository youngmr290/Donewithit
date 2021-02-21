import React from "react";
import { Text, View, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

import { F_MenuBar } from "../config/MenuBar";
import { styles } from "../config/Styles";
import { Input } from "../Components/UserInput";
import { Button } from "../Components/Button";
import { Dropdown } from "../Components/Dropdown";
import { storeData } from "../Components/Functions";
console.log("done import BEGINING!!!");

const clearFeed = (feedAvailable) => {
  Alert.alert("Clear log", "Are you sure", [
    {
      text: "Yes",
      onPress: () => {
        clearStoredData(feedAvailable);
      },
    },
    {
      text: "No",
    },
    { cancelable: true },
  ]);
};

const clearStoredData = async (feedAvailable) => {
  console.log(feedAvailable.barley);
  // await AsyncStorage.clear(); //could just storeData after setting to 0 instead of deleteing all stored items.
  for (const feed in feedAvailable) {
    feedAvailable[feed] = 0;
  }
  storeData("feedAvailable", feedAvailable);
  console.log("feed log cleared");
};

function EntryScreen({ route, navigation }) {
  const [barleyInput, setTextBarley] = useState(0); //should be able to do this with function but dont know how yet
  const [oatsInput, setTextOats] = useState(0);
  const [lupinsInput, setTextLupins] = useState(0);
  const [pelletsInput, setTextPellets] = useState(0);
  const [sheepGroup, setTextSheep] = useState("");
  const [defaultInputBarley, setDefaultInputBarley] = useState("");
  const [defaultInputOats, setDefaultInputOats] = useState("");
  const [defaultInputLupins, setDefaultInputLupins] = useState("");
  const [defaultInputPellets, setDefaultInputPellets] = useState("");

  const { feedAvailable } = route.params;
  const { feedStorage } = route.params;

  const handleTopUp = () => {
    setDefaultInputBarley("");
    setDefaultInputOats("");
    setDefaultInputLupins("");
    setDefaultInputPellets("");

    if (!Number.isNaN(+barleyInput)) {
      feedAvailable.barley += +barleyInput;
    }
    if (!Number.isNaN(+oatsInput)) {
      feedAvailable.oats += +oatsInput;
    }
    if (!Number.isNaN(+lupinsInput)) {
      feedAvailable.lupins += +lupinsInput;
    }
    if (!Number.isNaN(+barleyInput)) {
      feedAvailable.pellets += +pelletsInput;
    }
    storeData("feedAvailable", feedAvailable);
    console.log("barley storage", feedAvailable.barley);
  };

  const handleFeed = () => {
    setDefaultInputBarley("");
    setDefaultInputOats("");
    setDefaultInputLupins("");
    setDefaultInputPellets("");

    if (!Number.isNaN(+barleyInput)) {
      feedAvailable.barley -= +barleyInput;
      // console.log(sheepGroup);
    }
    if (!Number.isNaN(+oatsInput)) {
      feedAvailable.oats -= +oatsInput;
    }
    if (!Number.isNaN(+lupinsInput)) {
      feedAvailable.lupins -= +lupinsInput;
    }
    if (!Number.isNaN(+barleyInput)) {
      feedAvailable.pellets -= +pelletsInput;
    }
  };

  console.log("barley available");
  console.log("barley available", feedAvailable);
  console.log("barley available", feedAvailable.barley);
  // console.log("barley storage");
  // console.log("barley storage", feedStorage);
  // console.log("barley storage", feedStorage.barley);

  let dropdownData = [
    { label: "Ewes" },
    { label: "Wethers" },
    { label: "Hoggerts" },
    { label: "Lambs" },
  ];

  return (
    <View style={styles.background}>
      {F_MenuBar(navigation, feedAvailable, feedStorage)}
      <Text style={styles.heading}>{feedAvailable.barley}</Text>
      {/* <Text style={styles.heading}>{feedStorage.barley}</Text> */}
      <View style={styles.entryContainer}>
        <Input
          label="Barley"
          placeholder="Enter barley purchased or fed"
          onChangeText={(barleyInput) => {
            setTextBarley(barleyInput);
            setDefaultInputBarley(barleyInput);
          }}
          textInput={defaultInputBarley}
        />
        <Input
          label="Oats"
          placeholder="Enter oats purchased or fed"
          onChangeText={(oatsInput) => {
            setTextOats(oatsInput);
            setDefaultInputOats(oatsInput);
          }}
          textInput={defaultInputOats}
        />
        <Input
          label="Lupins"
          placeholder="Enter lupins purchased or fed"
          onChangeText={(lupinsInput) => {
            setTextLupins(lupinsInput);
            setDefaultInputLupins(lupinsInput);
          }}
          textInput={defaultInputLupins}
        />
        <Input
          label="Pellets"
          placeholder="Enter pellets purchased or fed"
          onChangeText={(pelletsInput) => {
            setTextPellets(pelletsInput);
            setDefaultInputPellets(pelletsInput);
          }}
          textInput={defaultInputPellets}
        />
        <Dropdown
          dropdownData={dropdownData}
          placeholder="Select sheep group"
          onChangeItem={(item) => setTextSheep(item.label)}
        />
        <View style={styles.buttonContainer}>
          <Button text="Top up" onPress={() => handleTopUp()} />
          <Button text="Feed" onPress={() => handleFeed()} />
          <Button text="Clear" onPress={() => clearFeed(feedAvailable)} />
        </View>
      </View>
    </View>
  );
}

export default EntryScreen;
