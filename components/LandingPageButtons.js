import { StyleSheet, Text, Pressable, View } from "react-native";
import React, { useState } from "react";

const createNewAccount = () => {};

const LandingPageButtons = ({ name }) => {
  const createNewAccount = "Create new account";
  return (
    <Pressable onPress={createNewAccount} style={styles.buttonContainer}>
      <View
        style={
          name === createNewAccount
            ? styles.createAccountButton
            : styles.signInButton
        }
      >
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
  createAccountButton: {
    width: "95%",
    height: "83%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2a6cff",
    borderRadius: 10,
  },
  signInButton: {
    width: "95%",
    height: "83%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6a3cf7",
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 2,
  },
  text: {
    color: "white",
    fontSize: 23,
  },
});
