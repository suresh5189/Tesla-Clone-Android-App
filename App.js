import { StatusBar } from "expo-status-bar";
import { StyleSheet} from "react-native";
import CarList from "./assets/component/CarList";
import CarItemDetails from "./assets/component/CarItemDetails";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inventory from "./assets/component/Inventory";
import SubInventory from "./assets/component/Inventory/inventory";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="CarList" component={CarList} />
        <Stack.Screen name="CarItemDetails" component={CarItemDetails} />
        <Stack.Screen name="Inventory" component={Inventory} />
        <Stack.Screen name="SubInventory" component={SubInventory} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
