import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Platform,
} from "react-native";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./HomePageScreens/Home";
import Favorites from "./HomePageScreens/Favorites";
import SocialMedia from "./HomePageScreens/SocialMedia";
import EWallets from "./HomePageScreens/EWallets";
import Emails from "./HomePageScreens/Emails";
import Settings from "./Settings";
import Profile from "./Profile";
import AddPasswordPage from "./AddPasswordPage";
import Crypt from "./Crypt";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: Platform.OS == "ios" ? 90 : 60,
    backgroundColor: "#6a3cf7",
  },
};

const home = require("../assets/home.png");
const crypt = require("../assets/safebox.png");
const setting = require("../assets/setting.png");
const profile = require("../assets/userprofile.png");
const add = require("../assets/add.png");

const HomePage = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.tabContainer}>
                <Image
                  source={home}
                  style={[
                    focused ? styles.active : styles.inactive,
                    styles.icon,
                  ]}
                />
                <Text
                  style={[focused ? styles.activename : styles.inactivename]}
                >
                  HOME
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Crypt"
        component={Crypt}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.tabContainer}>
                <Image
                  source={crypt}
                  style={[
                    focused ? styles.active : styles.inactive,
                    styles.icon,
                  ]}
                />
                <Text
                  style={[focused ? styles.activename : styles.inactivename]}
                >
                  CRYPT
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="AddPasswordPage"
        component={AddPasswordPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.addIconContainer}>
                <Image
                  source={add}
                  style={[
                    focused ? styles.active : styles.inactive,
                    styles.addIcon,
                  ]}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.tabContainer}>
                <Image
                  source={setting}
                  style={[
                    focused ? styles.active : styles.inactive,
                    styles.icon,
                  ]}
                />
                <Text
                  style={[focused ? styles.activename : styles.inactivename]}
                >
                  SETTING
                </Text>
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.tabContainer}>
                <Image
                  source={profile}
                  style={[
                    focused ? styles.active : styles.inactive,
                    styles.icon,
                  ]}
                />
                <Text
                  style={[focused ? styles.activename : styles.inactivename]}
                >
                  PROFILE
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  tabContainer: {
    // borderWidth: 1,
    // borderColor: "red",
    height: "90%",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  icon: {
    resizeMode: "contain",
    width: screenWidth / 15,
    height: "50%",
    // borderWidth: 1,
    // borderColor: "red",
  },
  addIcon: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
  active: {
    tintColor: "#fff",
  },
  inactive: {
    tintColor: "#a1a1a1",
  },
  activename: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
  },
  inactivename: {
    fontSize: 12,
    color: "#a1a1a1",
  },
  addIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6a3cf7",
    width: Platform.OS == "ios" ? 60 : 70,
    height: Platform.OS == "ios" ? 60 : 70,
    top: Platform.OS == "ios" ? -25 : -25,
    borderRadius: Platform.OS == "ios" ? 30 : 35,
  },
});
