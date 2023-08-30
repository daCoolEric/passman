import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Platform,
  StatusBar,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import AddButton from "../../components/AddButton";
import Overview from "../../components/Overview";
import Password from "../../components/Password";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

const logo = require("../../assets/addlogo.png");
const profile = require("../../assets/profile.png");

const logoIcon = require("../../assets/logo.png");
const emailIcon = require("../../assets/mail.png");
const socialIcon = require("../../assets/social.png");
const ewalletIcon = require("../../assets/ewallet.png");

const OverviewData = [
  {
    id: 1,
    icon: logoIcon,
    title: "Saved passwords",
    counts: 32,
  },
  {
    id: 2,
    icon: emailIcon,
    title: "Saved emails",
    counts: 32,
  },
  {
    id: 3,
    icon: socialIcon,
    title: "Saved social media",
    counts: 32,
  },
  {
    id: 4,
    icon: ewalletIcon,
    title: "Saved ewallets",
    counts: 32,
  },
];

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
        <View style={styles.profilewrapper}>
          <View style={styles.profile}>
            <Image source={profile} style={styles.image} />
          </View>
        </View>
      </View>
      <View style={styles.main}>
        <View style={[styles.addsection, styles.shadowProps]}>
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

        <FlatList
          horizontal
          data={OverviewData}
          renderItem={({ item }) => (
            <Overview title={item.title} icon={item.icon} count={item.counts} />
          )}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
          }}
          style={styles.overviewsection}
        />
        <View style={styles.latestsection}>
          <View style={styles.wrapper}>
            <View style={styles.innerwrapper}>
              <View style={styles.title}>
                <Text>Saved password</Text>
              </View>
              <View style={styles.button}>
                <Text>Button</Text>
              </View>
            </View>
          </View>
          <View style={styles.mainwrapper}>
            <ScrollView style={styles.maininner}>
              <Password />
              <Password />
            </ScrollView>
          </View>
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
  profilewrapper: {
    // borderWidth: 1,
    // borderColor: "green",
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
  },
  profile: {
    // borderWidth: 1,
    // borderColor: "green",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  image: {
    resizeMode: "contain",
    width: "90%",
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
  shadowProps: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 10,
  },
  addwrapper: {
    // borderWidth: 1,
    // borderColor: "blue",
    width: "95%",
    height: "90%",
    backgroundColor: "#4dc37d",
    borderRadius: 15,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 7,
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
  overviewsection: {
    // borderWidth: 1,
    // borderColor: "brown",
    flex: 1,
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

  latestsection: {
    // borderWidth: 1,
    // borderColor: "brown",
    flex: 1,
  },
  wrapper: {
    // borderWidth: 1,
    // borderColor: "brown",
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  innerwrapper: {
    // borderWidth: 1,
    // borderColor: "brown",
    flex: 1,
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainwrapper: {
    // borderWidth: 1,
    // borderColor: "brown",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  maininner: {
    // borderWidth: 1,
    // borderColor: "brown",
    flex: 1,
    width: "95%",
  },
});
