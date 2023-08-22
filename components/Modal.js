import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Dimensions,
} from "react-native";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const ModalComp = ({ name }) => {
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
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
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
    marginBottom: 15,
    textAlign: "center",
  },
});

export default ModalComp;
