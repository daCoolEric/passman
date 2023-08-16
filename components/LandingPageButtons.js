import { StyleSheet, Text, Pressable, View } from "react-native";
import React from "react";

const createNewAccount = () => {};

const LandingPageButtons = ({ name }) => {
  return (
    <Pressable onPress={createNewAccount} style={styles.buttonContainer}>
      <View style={styles.button}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </Pressable>
  );
};

export default LandingPageButtons;

const styles = StyleSheet.create({
  buttonContainer: {
    // borderWidth: 1,
    // borderColor: "green",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "95%",
    height: "83%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2a6cff",
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 23,
  },
});
