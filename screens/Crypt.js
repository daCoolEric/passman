import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Platform,
  Dimensions,
  StatusBar,
} from "react-native";
import React from "react";

const screenHeight = Dimensions.get("screen").height;

const Crypt = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.categoryContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.backContainer}>
            <Text>Return</Text>
          </View>

          <View style={styles.accountTypeContainer}>
            <View style={styles.favoritesContainer}>
              <Text>Favorites</Text>
            </View>
            <View style={styles.emailsContainer}>
              <Text>Emails</Text>
            </View>
            <View style={styles.socialmediaContainer}>
              <Text>Social Media</Text>
            </View>
            <View style={styles.ewalletContainer}>
              <Text>Ewallets</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.passwordsContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.headerWrapper}>
            <View style={styles.logoContainer}>
              <Text>Logo</Text>
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
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    height: screenHeight - StatusBar.currentHeight * 2,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
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
    borderColor: "blue",

    // height: screenHeight - StatusBar.currentHeight * 3,
    height: "93%",
  },
  passwordsContainer: {
    borderWidth: 1,
    borderColor: "red",
    flex: 1,
    height: "93%",
  },
  headerContainer: {
    borderWidth: 1,
    borderColor: "red",
    flexDirection: "row",
    height: StatusBar.currentHeight * 2,
  },
  headerWrapper: {
    borderWidth: 1,
    borderColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  infoContainer: {
    borderWidth: 1,
    borderColor: "red",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "80%",
  },
});
