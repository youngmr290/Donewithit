import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import AsyncStorage from "@react-native-async-storage/async-storage";

import FeedSummaryScreen from "./app/screens/FeedSummaryScreen";
import EntryScreen from "./app/screens/EntryScreen";
import SettingsScreen from "./app/screens/SettingsScreen";

const Stack = createStackNavigator();

// const storeData = async (value) => {
//   const jsonValue = JSON.stringify(value);
//   console.log("store data", jsonValue);
//   await AsyncStorage.setItem("@storage_Key", jsonValue);
// };

// const getData = async () => {
//   const jsonValue = await AsyncStorage.getItem("@storage_Key");
//   var value = JSON.parse(jsonValue);
//   return jsonValue != null ? JSON.parse(jsonValue) : null;
// };

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Feed Summary" component={FeedSummaryScreen} />
        <Stack.Screen
          name="Feed Entry"
          component={EntryScreen}
          options={{
            headerLeft: () => {
              return null;
            },
          }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerLeft: () => {
              return null;
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Home"
    //       component={EntryScreen}
    //       // options={{ title: "Welcome" }}
    //     />
    //     <Stack.Screen name="Profile" component={FeedSummaryScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

// <FeedSummaryScreen />

// <SafeAreaView style={styles.container}>
//   <View
//     style={styles.background}
//   ></View>

//   <Text>sup cunty fuck fucks</Text>

//   <TouchableOpacity onPress={() => console.log("pressed")}>
//     <Image
//       resizeMode={"center"}
//       style={{ width: 100, height: 200 }}
//       source={require("./assets/icon.png")}
//     />
//   </TouchableOpacity>

//   <Button
//     color="orange"
//     title="Press if you are a cunt"
//     onPress={() => console.log("buton presed")}
//     onPress={() =>
//       Alert.alert("My title", "message", [
//         { text: "yes", onPress: () => console.log("but y") },
//         { text: "NO", onPress: () => console.log("but N") },
//       ])
//     }
//   />

//   <Image
//     source={{
//       width: 100,
//       height: 200,
//       uri: "https://picsum.photos/200/300",
//     }}
//   />
//   <StatusBar style="auto" />
// </SafeAreaView>
