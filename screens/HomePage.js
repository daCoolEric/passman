import { StyleSheet, Text, View } from "react-native";

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./HomePageScreens/Home";
import Favorites from "./HomePageScreens/Favorites";
import SocialMedia from "./HomePageScreens/SocialMedia";
import EWallets from "./HomePageScreens/EWallets";
import Emails from "./HomePageScreens/Emails";

const Tab = createBottomTabNavigator();

const HomePage = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Social Media" component={SocialMedia} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Email" component={Emails} />
      <Tab.Screen name="Wallet" component={EWallets} />
    </Tab.Navigator>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
