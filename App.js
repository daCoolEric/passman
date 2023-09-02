import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPage from "./screens/LandingPage";
import SignInPage from "./screens/SignInPage";
import SignUpPage from "./screens/SignUpPage";
import HomePage from "./screens/HomePage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={{ background: "white" }}>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen
          name="LandingPage"
          options={{ headerShown: false }}
          component={LandingPage}
        />
        <Stack.Screen
          name="SignInPage"
          options={{ headerShown: false }}
          component={SignInPage}
        />
        <Stack.Screen
          name="SignUpPage"
          options={{ headerShown: false }}
          component={SignUpPage}
        />
        <Stack.Screen
          name="HomePage"
          options={{ headerShown: false }}
          component={HomePage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
