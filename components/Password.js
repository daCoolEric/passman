import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React from "react";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

const arrowIcon = require("../assets/arrow.png");
const emailIcon = require("../assets/mail.png");
const socialIcon = require("../assets/social.png");
const ewalletIcon = require("../assets/ewallet.png");

const Password = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.infosection}>
        <View style={styles.logosection}>
          <View style={styles.logocontainer}>
            <Image
              source={socialIcon}
              style={{ resizeMode: "contain", width: "100%" }}
            />
          </View>
        </View>
        <View style={styles.detailsection}>
          <View style={styles.accountnamesection}>
            <Text style={styles.accountname}>Figma Account</Text>
          </View>
          <View style={styles.usernamesection}>
            <Text style={styles.username}>johnsmith@gmail.com</Text>
          </View>
        </View>
      </View>
      <View style={styles.gotosection}>
        <View style={styles.iconcontainer}>
          <Image
            source={arrowIcon}
            style={{ resizeMode: "contain", width: "80%" }}
          />
        </View>
      </View>
    </View>
  );
};

export default Password;

const styles = StyleSheet.create({
  wrapper: {
    // borderWidth: 1,
    // borderColor: "blue",
    borderRadius: screenWidth / 40,
    width: "100%",
    height: screenWidth / 5,
    backgroundColor: "#fff",
    marginTop: screenWidth / 60,
    marginBottom: screenWidth / 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  infosection: {
    // borderWidth: 1,
    // borderColor: "blue",
    flex: 1,
    flexDirection: "row",
    height: screenWidth / 7,
  },
  logosection: {
    // borderWidth: 1,
    // borderColor: "blue",
    flex: 0.25,
    justifyContent: "center",
    alignItems: "center",
  },
  logocontainer: {
    // borderWidth: 1,
    // borderColor: "blue",
    width: "80%",
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  detailsection: {
    // borderWidth: 1,
    // borderColor: "blue",
    flex: 1,
  },
  accountname: {
    fontSize: screenWidth / 19,
    fontWeight: "bold",
  },
  gotosection: {
    // borderWidth: 1,
    // borderColor: "blue",
    flex: 0.2,
    height: screenWidth / 7,
    justifyContent: "center",
    alignItems: "center",
  },
  iconcontainer: {
    // borderWidth: 1,
    // borderColor: "blue",
    width: "80%",
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
});
