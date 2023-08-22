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
  Pressable,
} from "react-native";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import React from "react";
import SignButtons from "../components/SignButtons";
import SignLink from "../components/SignLinks";
import ModalComp from "../components/Modal";

const emailIcon = require("../assets/email.png");
const padLockIcon = require("../assets/padlock.png");
const eyeCloseIcon = require("../assets/eyeClose.png");
const bg_image = require("../assets/loginpath.png");

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const SignInPage = ({ navigation }) => {
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
                    <Image source={padLockIcon} style={styles.emailIcon} />
                  </View>

                  <TextInput
                    style={styles.inputContainer}
                    type="password"
                    secureTextEntry={true}
                    placeholder="Password"
                  />
                  <View style={styles.iconBox}>
                    <Image source={eyeCloseIcon} style={styles.emailIcon} />
                  </View>
                </View>
                <View style={styles.forgotPasswordContainer}>
                  <Pressable
                    onPress={() => navigation.navigate("PasswordResetPage")}
                  >
                    <Text style={[styles.text, { color: "#6a3cf7" }]}>
                      Forgot Password?
                    </Text>
                  </Pressable>
                </View>
              </View>
              <View style={styles.submitSection}>
                <ModalComp name="Sign In" />
                <View style={styles.infoSection}>
                  <View>
                    <Text style={styles.text}>Don't have an account?</Text>
                  </View>

                  <View>
                    <SignLink
                      name="Sign Up"
                      navigation={navigation}
                      action={"SignUpPage"}
                    />
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
  text: {
    fontSize: 20,
  },
  submitSection: {
    // borderWidth: 1,
    // borderColor: "gold",
    flex: 1,
    width: "95%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  infoSection: {
    // borderWidth: 1,
    // borderColor: "gold",
    flex: 0.5,
    width: "85%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
