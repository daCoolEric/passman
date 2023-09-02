import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import GotoButton from "./GotoButton";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

const arrowIcon = require("../assets/arrow.png");

const Overview = ({ title, icon, count }) => {
  return (
    <Pressable style={[styles.wrapper, styles.shadowProps]}>
      <View style={styles.logowrapper}>
        <View style={styles.logocontainer}>
          <Image source={icon} style={styles.logo} />
        </View>
      </View>
      <View style={styles.infowrapper}>
        <View style={styles.infosection}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.count}>{count}</Text>
        </View>
        <View style={styles.buttonwrapper}>
          <GotoButton arrow={arrowIcon} />
        </View>
      </View>
    </Pressable>
  );
};

export default Overview;

const styles = StyleSheet.create({
  wrapper: {
    // borderWidth: 1,
    // borderColor: "blue",
    width: screenWidth / 2,
    height: "85%",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginHorizontal: 10,
    borderRadius: screenWidth / 25,
    backgroundColor: "#fff",
  },
  shadowProps: {
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },
  logowrapper: {
    // borderWidth: 1,
    // borderColor: "blue",
    width: "90%",
    height: "35%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  logocontainer: {
    // borderWidth: 1,
    // borderColor: "blue",
    width: "30%",
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    resizeMode: "contain",
    width: "90%",
  },
  infowrapper: {
    // borderWidth: 1,
    // borderColor: "blue",
    width: "90%",
    height: "55%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  infosection: {
    // borderWidth: 1,
    // borderColor: "blue",
    width: "70%",
    height: "75%",
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: screenWidth / 27,
    color: "#918f90",
  },
  count: {
    fontSize: screenWidth / 10,
  },
  buttonwrapper: {
    // borderWidth: 1,
    // borderColor: "blue",
    width: "20%",
    height: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
});
