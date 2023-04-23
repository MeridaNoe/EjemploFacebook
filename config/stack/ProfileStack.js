import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../../modules/profile/adaprters/screens/Profile";

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#fff" },
      }}>
      <Stack.Screen
        name="profileStack"
        options={{ title: "" }}
        component={Profile}
      />
    </Stack.Navigator>
  );
}
