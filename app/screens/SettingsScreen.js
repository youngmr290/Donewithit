import React from "react";
import { Text, View, Alert } from "react-native";
import { useEffect, useState } from "react";

import { F_MenuBar } from "../config/MenuBar";
import { styles } from "../config/Styles";
import { Input } from "../Components/UserInput";
import { Button } from "../Components/Button";
import { storeData } from "../Components/Functions";
console.log("done import BEGINING!!!");

function EntryScreen({ route, navigation }) {
  const [barleyInputStorage, setBarleyStorage] = useState(0); //should be able to do this with function but dont know how yet
  const [oatsInputStorage, setOatsStorage] = useState(0);
  const [lupinsInputStorage, setLupinsStorage] = useState(0);
  const [pelletsInputStorage, setPelletsStorage] = useState(0);
  const [defaultInputBarleyStorage, setDefaultInputBarleyStorage] = useState(
    ""
  );
  const [defaultInputOatsStorage, setDefaultInputOatsStorage] = useState("");
  const [defaultInputLupinsStorage, setDefaultInputLupinsStorage] = useState(
    ""
  );
  const [defaultInputPelletsStorage, setDefaultInputPelletsStorage] = useState(
    ""
  );

  const { feedAvailable } = route.params;
  const { feedStorage } = route.params;

  console.log("barley storage");
  console.log("barley storage", feedStorage);
  console.log("barley storage", feedStorage.barley);

  const handleSet = () => {
    setDefaultInputBarleyStorage("");
    setDefaultInputOatsStorage("");
    setDefaultInputLupinsStorage("");
    setDefaultInputPelletsStorage("");

    console.log(feedStorage);
    if (!Number.isNaN(+barleyInputStorage)) {
      feedStorage.barley = +barleyInputStorage;
    }
    if (!Number.isNaN(+oatsInputStorage)) {
      feedStorage.oats = +oatsInputStorage;
    }
    if (!Number.isNaN(+lupinsInputStorage)) {
      feedStorage.lupins = +lupinsInputStorage;
    }
    if (!Number.isNaN(+barleyInputStorage)) {
      feedStorage.pellets = +pelletsInputStorage;
    }
    storeData("feedStorage", feedStorage);
    console.log("barley storage", feedStorage.barley);
  };

  return (
    <View style={styles.background}>
      {F_MenuBar(navigation, feedAvailable, feedStorage)}
      <Text style={styles.heading}>{feedStorage.barley}</Text>
      <View style={styles.entryContainer}>
        <Input
          label="Barley"
          placeholder="Enter barley storage capacity"
          onChangeText={(barleyInputStorage) => {
            setBarleyStorage(barleyInputStorage);
            setDefaultInputBarleyStorage(barleyInputStorage);
          }}
          textInput={defaultInputBarleyStorage}
        />
        <Input
          label="Oats"
          placeholder="Enter oats storage capacity"
          onChangeText={(oatsInputStorage) => {
            setOatsStorage(oatsInputStorage);
            setDefaultInputOatsStorage(oatsInputStorage);
          }}
          textInput={defaultInputOatsStorage}
        />
        <Input
          label="Lupins"
          placeholder="Enter lupins storage capacity"
          onChangeText={(lupinsInputStorage) => {
            setLupinsStorage(lupinsInputStorage);
            setDefaultInputLupinsStorage(lupinsInputStorage);
          }}
          textInput={defaultInputLupinsStorage}
        />
        <Input
          label="Pellets"
          placeholder="Enter pellets storage capacity"
          onChangeText={(pelletsInputStorage) => {
            setPelletsStorage(pelletsInputStorage);
            setDefaultInputPelletsStorage(pelletsInputStorage);
          }}
          textInput={defaultInputPelletsStorage}
        />

        <View style={styles.buttonContainer}>
          <Button text="Set" onPress={() => handleSet()} />
        </View>
      </View>
    </View>
  );
}

export default EntryScreen;
