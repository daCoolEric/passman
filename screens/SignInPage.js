import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  Platform,
  StatusBar,
  TextInput,
  Text,
  View,
  Image,
} from "react-native";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import React from "react";

const emailIcon = require("../assets/email.png");
const bg_image = require("../assets/loginpath.png");

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const SignInPage = () => {
  return (
    <KeyboardAvoidingWrapper>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={bg_image}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.textContainer}>
            <Text style={{ fontSize: 40, color: "white", fontWeight: "bold" }}>
              Hello, Sign In
            </Text>
          </View>
          <View style={styles.loginContainer}>
            <View style={styles.LoginContent}>
              <View style={styles.personalInfo}>
                <View style={styles.emailContainer}>
                  <View style={styles.iconBox}>
                    <Image source={emailIcon} style={styles.emailIcon} />
                  </View>
                  <TextInput
                    type="text"
                    placeholder="Email"
                    style={styles.inputContainer}
                  />
                </View>
                <View style={styles.passwordContainer}>
                  <View style={styles.iconBox}>
                    <Image source={emailIcon} style={styles.emailIcon} />
                  </View>

                  <TextInput
                    style={styles.inputContainer}
                    type="password"
                    placeholder="Password"
                  />
                </View>
                <View style={styles.forgotPasswordContainer}>
                  <Text>Forgot Password?</Text>
                </View>
              </View>
              <View style={styles.submitSection}>
                <View style={styles.loginButton}>
                  <Text>Sign In</Text>
                </View>
                <View style={styles.infoSection}>
                  <Text>Don't have an account?</Text>
                  <View style={{ marginLeft: "10px", textDecoration: "none" }}>
                    <Text> Sign Up</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </KeyboardAvoidingWrapper>
  );
};

export default SignInPage;

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
  textContainer: {
    // borderWidth: 1,
    // borderColor: "blue",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginContainer: {
    // borderWidth: 1,
    // borderColor: "red",
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  LoginContent: {
    // borderWidth: 1,
    // borderColor: "blue",
    flex: 1,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
  },
  personalInfo: {
    // borderWidth: 1,
    // borderColor: "red",
    flex: 1,
    width: "95%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
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
    width: "100%",
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
  forgotPasswordContainer: {
    // borderWidth: 1,
    // borderColor: "blue",
    height: 45,
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  passwordContainer: {
    // borderWidth: 1,
    // borderColor: "gold",
    borderBottomWidth: 1,
    height: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  submitSection: {
    // borderWidth: 1,
    // borderColor: "gold",
    flex: 1,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
});
