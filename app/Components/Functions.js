import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, value) => {
  const jsonValue = JSON.stringify(value);
  console.log("store data", jsonValue);
  await AsyncStorage.setItem(key, jsonValue);
};
// export default storeData;

export const getData = async (key, settext, defaultValue) => {
  const jsonValue = await AsyncStorage.getItem(key);
  // var value = JSON.parse(jsonValue);
  var value = jsonValue != null ? JSON.parse(jsonValue) : defaultValue;
  settext(value);
  return value;
};

export function sum(obj) {
  return Object.keys(obj).reduce(
    (sum, key) => sum + parseFloat(obj[key] || 0),
    0
  );
}
