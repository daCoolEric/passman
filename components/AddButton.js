import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import React from "react";

const addIcon = require("../assets/add.png");

const AddButton = ({ navigation, action }) => {
  return (
    <Pressable
      style={styles.button}
      onPress={() => navigation.navigate(action)}
    >
      <View style={styles.content}>
        <View style={styles.textwrapper}>
          <Text style={styles.text}>Add new</Text>
        </View>
        <View style={styles.iconwrapper}>
          <Image source={addIcon} style={styles.icon} />
        </View>
      </View>
    </Pressable>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  button: {
    width: "90%",
    height: "70%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    // borderWidth: 1,
    // borderColor: "blue",
  },
  content: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: "blue",
  },
  textwrapper: {
    width: "30%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: "blue",
  },
  text: {
    fontSize: 20,
    color: "#000",
  },
  iconwrapper: {
    width: "10%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 3,
    // borderWidth: 1,
    // borderColor: "blue",
  },
  icon: {
    resizeMode: "contain",
    width: "70%",
  },
});
