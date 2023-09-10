import { StyleSheet, TextInput, View, Image } from "react-native";
import React from "react";
import SelectDropdown from "react-native-select-dropdown";

const countries = ["Egypt", "Canada", "Australia", "Ireland"];
const img = require("../assets/logo.png");
const Select = () => {
  return (
    <View style={styles.emailContainer}>
      <View style={styles.iconBox}>
        <Image source={img} style={styles.emailIcon} />
      </View>
      <SelectDropdown
        data={countries}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        defaultButtonText="Select account type"
        buttonStyle={styles.dropdown2BtnStyle}
        buttonTextStyle={styles.dropdown2BtnTextStyle}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item;
        }}
      />
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  emailContainer: {
    // borderColor: "gold",
    height: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
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
    width: "90%",
    resizeMode: "contain",
  },
  dropdown2BtnStyle: {
    flex: 1,
    width: "80%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 4,
    borderColor: "#6a3cf7",
  },
  dropdown2BtnTextStyle: {
    fontSize: 25,
    marginRight: 40,
  },
});
