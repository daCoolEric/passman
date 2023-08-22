import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import React from "react";

const SignButtons = ({ name }) => {
  return (
    <Pressable style={styles.button} onPress={() => loadModal()}>
      <Text style={styles.text}>{name}</Text>
    </Pressable>
  );
};

export default SignButtons;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 70,
    borderRadius: 35,
    backgroundColor: "#6a3cf7",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#fff",
  },
});
