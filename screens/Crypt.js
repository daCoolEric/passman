import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Platform,
  Dimensions,
  StatusBar,
  ImageBackground,
  Image,
} from "react-native";
import React from "react";

const screenHeight = Dimensions.get("screen").height;

const backArrow = require("../assets/backarrow.png");
const bg_image = require("../assets/bg.png");
const logo = require("../assets/logo.png");
const favorite = require("../assets/fav.png");
const email = require("../assets/email.png");
const socialmedia = require("../assets/social.png");
const ewallet = require("../assets/ewallet.png");
const logout = require("../assets/logo.png");

const Crypt = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={bg_image}
        resizeMode="cover"
        style={styles.categoryContainer}
      >
        <View style={styles.contentContainer}>
          <View style={styles.backContainer}>
            <Image
              source={backArrow}
              resizeMode="contain"
              style={styles.image}
            />
          </View>

          <View style={styles.accountTypeContainer}>
            <View style={styles.favoritesContainer}>
              <Image
                source={favorite}
                resizeMode="contain"
                style={styles.image}
              />
            </View>
            <View style={styles.emailsContainer}>
              <Image source={email} resizeMode="contain" style={styles.image} />
            </View>
            <View style={styles.socialmediaContainer}>
              <Image
                source={socialmedia}
                resizeMode="contain"
                style={styles.image}
              />
            </View>
            <View style={styles.ewalletContainer}>
              <Image
                source={ewallet}
                resizeMode="contain"
                style={styles.image}
              />
            </View>
          </View>

          <View style={styles.logoutContainer}>
            <Image source={logout} resizeMode="contain" style={styles.image} />
          </View>
        </View>
      </ImageBackground>
      <View style={styles.passwordsContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.headerWrapper}>
            <View style={styles.logoContainer}>
              <Image source={logo} resizeMode="contain" style={styles.logo} />
            </View>
            <View style={styles.infoContainer}>
              <View style={styles.allContainer}>
                <Text>All</Text>
              </View>
              <View style={styles.recentContainer}>
                <Text>Recent</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.displayContainer}>
          <Text>Display</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Crypt;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e6e6e6",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    height: screenHeight - StatusBar.currentHeight * 2,
    paddingTop:
      Platform.OS === "android"
        ? StatusBar.currentHeight
        : StatusBar.currentHeight * 2,
    borderWidth: 1,
    borderColor: "red",
  },
  categoryContainer: {
    borderWidth: 1,
    borderColor: "red",
    flex: 0.15,
    // height: screenHeight - StatusBar.currentHeight * 3,
    height: "100%",
  },
  contentContainer: {
    borderWidth: 1,
    borderColor: "yellow",
    justifyContent: "space-between",

    // height: screenHeight - StatusBar.currentHeight * 3,
    height: "90%",
  },
  passwordsContainer: {
    borderWidth: 1,
    borderColor: "red",
    flex: 1,
    height: "90%",
  },
  headerContainer: {
    // borderWidth: 1,
    // borderColor: "red",
    flexDirection: "row",
    height: StatusBar.currentHeight * 2.5,
  },
  headerWrapper: {
    // borderWidth: 1,
    // borderColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  infoContainer: {
    // borderWidth: 1,
    // borderColor: "red",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "80%",
  },
  backContainer: {
    // borderWidth: 1,
    // borderColor: "red",
    height: StatusBar.currentHeight * 2.5,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "80%",
  },
  logo: {
    width: "70%",
  },

  accountTypeContainer: {
    // borderWidth: 1,
    // borderColor: "blue",
    height: screenHeight / 2.3,
    justifyContent: "space-evenly",
  },
  logoutContainer: {
    borderWidth: 1,
    borderColor: "green",
    justifyContent: "center",
    alignItems: "center",
    height: screenHeight / 6,
  },
  logoContainer: {
    // borderWidth: 1,
    // borderColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
  },
  emailsContainer: {
    // borderWidth: 1,
    // borderColor: "red",
    height: StatusBar.currentHeight * 3,
    justifyContent: "center",
    alignItems: "center",
  },
  ewalletContainer: {
    // borderWidth: 1,
    // borderColor: "red",
    height: StatusBar.currentHeight * 3,
    justifyContent: "center",
    alignItems: "center",
  },
  socialmediaContainer: {
    // borderWidth: 1,
    // borderColor: "red",
    height: StatusBar.currentHeight * 3,
    justifyContent: "center",
    alignItems: "center",
  },
  favoritesContainer: {
    // borderWidth: 1,
    // borderColor: "red",
    justifyContent: "center",
    alignItems: "center",
    height: StatusBar.currentHeight * 3,
  },
});
