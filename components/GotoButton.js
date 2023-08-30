import { Pressable, StyleSheet, View, Image } from "react-native";
import React from "react";

const GotoButton = ({ arrow }) => {
  return (
    <Pressable style={styles.buttonwrapper}>
      <View style={styles.iconwrapper}>
        <Image source={arrow} style={styles.icon} />
      </View>
    </Pressable>
  );
};

export default GotoButton;

const styles = StyleSheet.create({
  buttonwrapper: {
    // borderWidth: 1,
    // borderColor: "blue",
    width: "100%",
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  iconwrapper: {
    // borderWidth: 1,
    // borderColor: "blue",
    width: "100%",
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    resizeMode: "contain",
    width: "130%",
  },
});
