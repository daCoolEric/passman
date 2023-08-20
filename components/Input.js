import { StyleSheet, TextInput, View, Image } from "react-native";
import React from "react";

const Input = ({ type, placeholder, source, view, secureTextEntry }) => {
  return (
    <View style={styles.emailContainer}>
      <View style={styles.iconBox}>
        <Image source={source} style={styles.emailIcon} />
      </View>
      <TextInput
        type={type}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        style={styles.inputContainer}
      />
      {secureTextEntry ? (
        <View style={styles.iconBox}>
          <Image source={view} style={styles.emailIcon} />
        </View>
      ) : null}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  emailContainer: {
    borderBottomWidth: 1,
    // borderColor: "gold",
    height: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconBox: {
    // borderWidth: 1,
    // borderColor: "red",
    flex: 0.15,
    height: "100%",
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  emailIcon: {
    flex: 1,
    width: "80%",
    resizeMode: "contain",
  },
  inputContainer: {
    // borderWidth: 1,
    // borderColor: "blue",

    flex: 1,
    height: "100%",
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 25,
    color: "#6a3cf7",
    paddingLeft: 10,

    // border-style: none;
    // :focus{
    //   outline: none;
    // }
  },
});
