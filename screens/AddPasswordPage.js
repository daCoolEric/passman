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
import SelectDropdown from "react-native-select-dropdown";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import React from "react";
import SignButtons from "../components/SignButtons";
import SignLink from "../components/SignLinks";
import Input from "../components/Input";
import ModalComp from "../components/Modal";
import Select from "../components/Select";
import SelectComp from "../components/SelectComp";

const emailIcon = require("../assets/email.png");
const padLockIcon = require("../assets/padlock.png");
const eyeCloseIcon = require("../assets/eyeClose.png");
const userIcon = require("../assets/user.png");
const bg_image = require("../assets/bg.png");
const backArrow = require("../assets/backarrow.png");

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const AddPasswordPage = ({ navigation }) => {
  return (
    <KeyboardAvoidingWrapper>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={bg_image}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.navigationContainer}>
            <View style={styles.navigationImageContainer}>
              <Image
                source={backArrow}
                resizeMode="contain"
                style={styles.navigationImage}
              />
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={{ fontSize: 40, color: "white", fontWeight: "bold" }}>
              Add a Password
            </Text>
          </View>

          <View style={styles.loginContainer}>
            <View style={styles.LoginContent}>
              <View style={styles.personalInfo}>
                <Select />

                <Input
                  type="text"
                  placeholder="Account Name"
                  source={userIcon}
                />
                <Input type="text" placeholder="Username" source={userIcon} />
                <Input
                  secureTextEntry={true}
                  placeholder="Password"
                  source={padLockIcon}
                  view={eyeCloseIcon}
                />
                <Input
                  secureTextEntry={true}
                  placeholder="Confirm Password"
                  source={padLockIcon}
                  view={eyeCloseIcon}
                />
              </View>
              <View style={styles.submitSection}>
                <ModalComp name="Add Password" />
                {/* <SignButtons name="Sign Up" /> */}
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </KeyboardAvoidingWrapper>
  );
};

export default AddPasswordPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: screenHeight - StatusBar.currentHeight * 2,
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
    height: screenHeight / 12,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  navigationContainer: {
    // borderWidth: 1,
    // borderColor: "blue",
    // justifyContent: "center",
    height: screenHeight / 12,
  },
  navigationImageContainer: {
    // borderWidth: 1,
    // borderColor: "red",

    height: "80%",
    width: screenWidth / 6,
  },
  navigationImage: {
    flex: 1,
    width: "100%",
  },
  loginContainer: {
    // borderWidth: 1,
    // borderColor: "red",
    flex: 2,
    justifyContent: "flex-start",
    paddingTop: screenHeight / 20,
    alignItems: "center",
    backgroundColor: "#e6e6e6",
  },
  LoginContent: {
    // borderWidth: 1,
    // borderColor: "blue",
    // flex: 1,
    borderRadius: screenWidth / 20,
    width: "90%",
    height: screenHeight / 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
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
    flex: 0.5,
    width: "95%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  infoSection: {
    // borderWidth: 1,
    // borderColor: "gold",
    flex: 0.7,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
