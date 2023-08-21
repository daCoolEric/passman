import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const SignLink = ({ name, navigation, action }) => {
  return (
    <Pressable
      style={styles.button}
      onPress={() => navigation.navigate(action)}
    >
      <Text style={styles.text}>{name}</Text>
    </Pressable>
  );
};

export default SignLink;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "#6a3cf7",
  },
});
