import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, ImageBackground } from "react-native";
import StyleButton from "../StyleButton";
import styles from "./styles";

const CarItem = (props) => {
  const { name, tagline, taglineCTA, image } = props.car;

  const navigation = useNavigation();

  const onButtonPress = () => {
    navigation.navigate('Inventory');
  }

  const onInventory = () => {
    navigation.navigate('SubInventory');
  }

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyleButton
          type="primary"
          content={"Custom Order"}
          onPress={onButtonPress}
        />
        <StyleButton
          type="secondary"
          content={"Existing Inventory"}
          onPress={onInventory}
        />
      </View>
    </View>
  );
};

export default CarItem;
