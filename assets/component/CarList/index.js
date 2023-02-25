import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import styles from "./styles";
import cars from "./cars";
import CarItem from "../CarItem";
import Header from "../Header";

const CarList = (props) => {
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        showsHorizontalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("screen").height}
      />
    </View>
  );
};

export default CarList;
