import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  Text,
  View,
} from "react-native";
import React from "react";

const image = require("../assets/bg.png");
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const LandingPage = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.logoContainer}>
          <View style={styles.logoContent}>
            <Text>Logo and App Name goes here</Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.textContent}>
            <Text>Text will go here</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonContent}>
            <Text>Buttons will go here</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: screenWidth,
    height: screenHeight,
  },
});
