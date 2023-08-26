import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import React from "react";
import AddButton from "../../components/AddButton";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

const logo = require("../../assets/addlogo.png");

const Favorites = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.user}>
          <View style={styles.username}>
            <Text
              style={{ fontSize: 30, fontWeight: "bold", color: "#181310" }}
            >
              Hello, Eric
            </Text>
          </View>
          <View style={styles.slogan}>
            <Text style={{ color: "#918f90" }}>
              Save your password easily and securely
            </Text>
          </View>
        </View>
        <View style={styles.profile}>
          <Text>Profile Pic</Text>
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.addsection}>
          <View style={styles.addwrapper}>
            <View style={styles.logo}>
              <View style={styles.logowrapper}>
                <Image source={logo} style={styles.logostyle} />
              </View>
            </View>
            <View style={styles.info}>
              <View style={styles.infocontent}>
                <Text style={styles.infoheader}>New password</Text>
                <Text style={styles.infoslogan}>
                  Save your new password with ease
                </Text>
              </View>
            </View>
            <View style={styles.buttoncontainer}>
              <AddButton />
            </View>
          </View>
        </View>
        <View style={styles.overviewsection}>
          <Text>overview</Text>
        </View>
        <View style={styles.latestsection}>
          <Text>latest</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "e2dad7",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    // borderWidth: 1,
    // borderColor: "blue",
    width: "95%",
    height: "15%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  user: {
    // borderWidth: 1,
    // borderColor: "blue",
    width: "75%",
    height: "70%",
  },
  username: {
    // borderWidth: 1,
    // borderColor: "blue",
    flex: 1.5,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  slogan: {
    // borderWidth: 1,
    // borderColor: "blue",
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  profile: {
    borderWidth: 1,
    borderColor: "green",
  },
  main: {
    // borderWidth: 1,
    // borderColor: "red",
    height: "85%",
    width: "95%",
    flexDirection: "column",
    justifyContent: "center",
  },
  addsection: {
    // borderWidth: 1,
    // borderColor: "brown",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  addwrapper: {
    // borderWidth: 1,
    // borderColor: "blue",
    width: "95%",
    height: "90%",
    backgroundColor: "#4dc37d",
    borderRadius: 15,
  },
  logo: {
    // borderWidth: 1,
    // borderColor: "brown",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logowrapper: {
    // borderWidth: 1,
    // borderColor: "brown",
    flex: 1,
    width: "90%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  logostyle: {
    // borderWidth: 1,
    // borderColor: "brown",
    resizeMode: "contain",
    width: "13%",
    height: "90%",
  },
  info: {
    // borderWidth: 1,
    // borderColor: "brown",
    flex: 1.2,
    width: "100%",
    height: "80%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  infocontent: {
    // borderWidth: 1,
    // borderColor: "brown",
    // flex: 1,
    width: "90%",
    height: "80%",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  infoheader: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
  infoslogan: {
    color: "#fff",
  },
  buttoncontainer: {
    // borderWidth: 1,
    // borderColor: "brown",
    flex: 1.1,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  overviewsection: {
    borderWidth: 1,
    borderColor: "brown",
    flex: 1,
  },
  latestsection: {
    borderWidth: 1,
    borderColor: "brown",
    flex: 1,
  },
});
