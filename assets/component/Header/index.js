import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

const Header = () => {
  const navigation = useNavigation();

  const onHome = () => {
    navigation.navigate('CarList');
  }

  return (
    <View style={styles.container}>
        <Image style={styles.logo} source={require("../../../asset/images/TeslaImage/logo.png")} />

      <TouchableOpacity onPress={onHome}>
        <Image style={styles.menu} source={require("../../../asset/images/TeslaImage/home.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 47,
    zIndex: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    bottom: 45,
    right: 17,
  },
  menu: {
    width: 22,
    height: 22,
    resizeMode: "contain",
    right: 10,
    top: 1
  },
});