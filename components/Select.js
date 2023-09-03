import { StyleSheet, TextInput, View, Image } from "react-native";
import React from "react";
import SelectDropdown from "react-native-select-dropdown";

const countries = ["Egypt", "Canada", "Australia", "Ireland"];

const Select = () => {
  return (
    <View style={styles.emailContainer}>
      <SelectDropdown
        data={countries}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
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
        style={styles.select}
      />
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  emailContainer: {
    borderBottomWidth: 1,
    // borderColor: "gold",
    height: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  select: {
    width: "100%",
  },
});
