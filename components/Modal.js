import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Dimensions,
  Image,
} from "react-native";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
const spinner = require("../assets/spinner.gif");

const ModalComp = ({ name, action, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalContent}>
              <Image source={spinner} />
              <Text style={styles.modalText}>
                {action == "Sign In" ? "Logging In" : "Signing Up"}
              </Text>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  navigation.navigate("HomePage");
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>HomePage</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>{name}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: screenWidth,
    height: screenHeight,
    margin: 20,
    backgroundColor: "rgba(0, 0, 0, 0.8)",

    padding: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "100%",
    height: 70,
    borderRadius: 35,
    backgroundColor: "#6a3cf7",
    justifyContent: "center",
    alignItems: "center",
    // borderRadius: 20,
    // padding: 10,
    // elevation: 2,
  },
  modalContent: {
    width: "95%",
    height: "60%",
    borderRadius: 35,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontSize: 27,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    fontSize: 27,
    color: "#36454f",
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
});

export default ModalComp;
