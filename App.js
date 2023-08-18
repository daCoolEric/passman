import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LandingPage from "./screens/LandingPage";
import SignInPage from "./screens/SignInPage";
import SignUpPage from "./screens/SignUpPage";
import AddPasswordPage from "./screens/AddPasswordPage";
import EditPasswordPage from "./screens/EditPasswordPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
          name="AddPasswordPage"
          options={{ headerShown: false }}
          component={AddPasswordPage}
        />
        <Stack.Screen
          name="EditPasswordPage"
          options={{ headerShown: false }}
          component={EditPasswordPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
