import {
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Dimensions,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import React from "react";

const bg_image = require("../assets/loginpath.png");

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("window").width;

const KeyboardAvoidingWrapper = ({ children }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.select({ android: "height", ios: "padding" })}
      style={{
        height:
          Platform.OS === "android"
            ? screenHeight + StatusBar.currentHeight
            : null,
        borderWidth: 1,
        borderColor: "red",
      }}
    >
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {children}
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingWrapper;

const styles = StyleSheet.create({
  image: {
    borderWidth: 1,
    borderColor: "blue",
    flex: 1,
    justifyContent: "center",
    width: screenWidth,
    height: screenHeight,
  },
});
