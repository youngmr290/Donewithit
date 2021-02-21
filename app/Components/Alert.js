import { Alert as NativeAlert } from "react-native";

const defaultButtons = (resolve, reject) => [
  {
    text: "OK",
    onPress: () => {
      resolve();
    },
  },
];

const AsyncAlert = (title, msg, getButtons = defaultButtons) =>
  new Promise((resolve, reject) => {
    console.log("new");
    NativeAlert.alert(title, msg, getButtons(resolve, reject), {
      cancelable: false,
    });
  });

export default AsyncAlert;

//not used but is a good example of wraping in a async function. this function means the clearAll function is not executed until alert is confirmed.
const AsyncAlert = async () =>
  new Promise((resolve, reject) => {
    Alert.alert("Clear log", "Are you sure", [
      {
        text: "Yes",
        onPress: () => {
          resolve("YES");
        },
      },
      {
        text: "No",
      },
      { cancelable: true },
    ]);
  });

const clearAllCondition = async () => {
  await AsyncAlert();
  clearAll();
};
