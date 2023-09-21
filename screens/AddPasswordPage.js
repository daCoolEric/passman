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
const bg_image = require("../assets/signBg.png");
const backArrow = require("../assets/backarrow.png");

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const AddPasswordPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingWrapper>
        <View style={styles.wrapper}>
          <View style={styles.navigationContainer}>
            <ImageBackground
              source={bg_image}
              resizeMode="cover"
              style={styles.image}
            >
              <View style={styles.navigationImageContainer}>
                <Image
                  source={backArrow}
                  resizeMode="contain"
                  style={styles.navigationImage}
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.heading}>
                  Add a Password
                  {/* {alert(
                `Screen Width: ${screenWidth} \nScreen Height: ${screenHeight}`
              )} */}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.LoginContainer}>
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
        </View>
      </KeyboardAvoidingWrapper>
    </SafeAreaView>
  );
};

export default AddPasswordPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: screenHeight,
    width: screenWidth,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  navigationContainer: {
    // borderWidth: 1,
    // borderColor: "blue",
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 0.17,
  },
  wrapper: {
    // borderWidth: 1,
    // borderColor: "red",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: null,
    width: screenWidth,
    height: screenHeight,
  },
  image: {
    // borderWidth: 1,
    // borderColor: "red",
    flex: 1,
    flexDirection: "row",
    width: screenWidth,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  navigationImageContainer: {
    // borderWidth: 1,
    // borderColor: "blue",
    flex: 0.25,
    justifyContent: "center",
    alignItems: "center",
  },
  navigationImage: {
    // borderWidth: 1,
    // borderColor: "red",
    flex: 1,
    width: "45%",
  },
  LoginContainer: {
    // borderWidth: 1,
    // borderColor: "green",
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: screenHeight / 13,
  },
  LoginContent: {
    // borderWidth: 1,
    // borderColor: "blue",
    borderRadius: screenWidth / 20,
    width: "90%",
    height: "70%",
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
  loginContainer: {
    // borderWidth: 1,
    // borderColor: "red",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e6e6e6",
  },

  textContainer: {
    // borderWidth: 1,
    // borderColor: "blue",
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  heading: {
    fontSize: screenWidth / 11,
    color: "white",
    fontWeight: "bold",
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
