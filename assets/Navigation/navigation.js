import React from "react";
import CarItemDetails from "../component/CarItemDetails";
import CarList from "../component/CarList";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CarList"
          component={CarList}
          options={{ title: "CarList" }}
        />
        <Stack.Screen name="CarItemDetails" component={CarItemDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
