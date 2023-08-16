import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  Platform,
  StatusBar,
  Text,
  View,
  Image,
} from "react-native";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import LandingPageButtons from "../components/LandingPageButtons";
import React from "react";

const bg_image = require("../assets/bg.png");
const logo = require("../assets/logo.png");
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const LandingPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={bg_image}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.logoContainer}>
          <View style={styles.logoContent}>
            <Image source={logo} style={styles.logo} />

            <View style={styles.appNameContainer}>
              <Text style={styles.appName}>PassMan</Text>
            </View>
          </View>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.textContent}>
            <View style={styles.toptext}>
              <Text style={styles.toptextStyle}>Transparent &</Text>
              <Text style={styles.toptextStyle}>Secure</Text>
            </View>
            <View>
              <Text style={styles.slogan}>
                Only you can see your personal data
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonContent}>
            <LandingPageButtons name="Create new account" />
            <LandingPageButtons name="Sign In" />
            {/* <Text>Buttons</Text> */}
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: screenHeight,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: screenWidth,
    height: screenHeight,
  },
  logoContainer: {
    //borderWidth: 1,
    // borderColor: "red",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContent: {
    width: "75%",
    height: "100%",
    // borderWidth: 1,
    // borderColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  logo: {
    width: "30%",
    height: "100%",
    resizeMode: "contain",
    // borderWidth: 1,
    // borderColor: "white",
  },
  appNameContainer: {
    // borderWidth: 1,
    // borderColor: "blue",
    width: "65%",
    justifyContent: "center",
    alignItems: "center",
  },
  appName: {
    color: "white",
    fontSize: 45,
    fontWeight: "bold",
  },
  textContainer: {
    // borderWidth: 1,
    // borderColor: "gold",
    flex: 1,
  },
  textContent: {
    // borderWidth: 1,
    // borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    height: "75%",
  },
  toptext: {
    justifyContent: "center",
    alignItems: "center",
  },
  toptextStyle: {
    fontWeight: "bold",
    color: "white",
    fontSize: 40,
  },
  slogan: {
    color: "#7aa1fe",
    fontSize: 18.5,
  },
  buttonContainer: {
    // borderWidth: 1,
    // borderColor: "green",
    flex: 1,
  },
  buttonContent: {
    // borderWidth: 1,
    // borderColor: "gold",
    width: "100%",
    height: "90%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
