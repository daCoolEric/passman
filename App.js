import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import LandingPage from "./screens/LandingPage";

export default function App() {
  return (
    <View style={styles.container}>
      <LandingPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
