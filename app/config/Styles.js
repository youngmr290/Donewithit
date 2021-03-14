import { StyleSheet, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";

const { width, height } = Dimensions.get("screen");
const pad = 10;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#A0A0A0",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingTop: StatusBar.height,
  },
  button: {
    padding: pad,
    marginHorizontal: 10,
    backgroundColor: "#3498DB",
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  buttonContainer: {
    flexDirection: "row",
    // position: "absolute",
    // bottom: 170,
    justifyContent: "center",
    padding: pad,
    zIndex: 99,
  },
  dropDown: {
    borderColor: "black",
    borderWidth: 1,
    width: width / 1.3,
    padding: pad,
    backgroundColor: "white",
  },
  dropdownContainer: {
    backgroundColor: "white",
    width: width / 1.3,
    borderWidth: 1,
    marginVertical: 10,
    zIndex: 999,
  },
  entryContainer: {
    alignItems: "center",
    position: "absolute",
    top: 10,
    // marginVertical: 20,
  },
  feedbar: {
    width: "100%",
    // height: 70,
    // backgroundColor: "#3498DB",
    // backgroundColor: "#6495ED",
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  feedSummaryContainer: {
    marginVertical: 20,
    // padding: 100,
    // width: "100%",
    // height: 70,
    // backgroundColor: "#3498DB",
    // backgroundColor: "#6495ED",
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  heading: {
    position: "absolute",
    top: 70,
    fontSize: 24,
  },

  input: {
    borderColor: "black",
    borderWidth: 1,
    width: width / 1.3,
    padding: pad,
    backgroundColor: "white",
  },
  inputContainer: {
    marginVertical: 10,
  },
  menubar: {
    width: "100%",
    height: 70,
    backgroundColor: "#3498DB",
    // backgroundColor: "#6495ED",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  menuicon: {
    height: 60,
    width: 60,
  },
});

export { styles };
