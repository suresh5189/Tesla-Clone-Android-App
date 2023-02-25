import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  StyleSheet,
  Modal,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Header from "../Header";
import { Icon } from "react-native-elements";

function SubInventory() {
  const data = [
    {
      id: "d1",
      name: "Model S",
      image: require("../../../asset/images/TeslaImage/modelSImage.png"),
      price: "$82,990",
    },
    {
      id: "d2",
      name: "Model X",
      image: require("../../../asset/images/TeslaImage/modelXBlack.png"),
      price: "$93,190",
    },
    {
      id: "d3",
      name: "Model 3",
      image: require("../../../asset/images/TeslaImage/model3Red.png"),
      price: "$34,190",
    },
    {
      id: "d4",
      name: "Model S",
      image: require("../../../asset/images/TeslaImage/modelSRed.png"),
      price: "$82,990",
    },
    {
      id: "d5",
      name: "Model X",
      image: require("../../../asset/images/TeslaImage/modelXGrey.png"),
      price: "$93,190",
    },
    {
      id: "d6",
      name: "Model 3",
      image: require("../../../asset/images/TeslaImage/model3Blue.png"),
      price: "$34,190",
    },
    {
      id: "d7",
      name: "Model Y",
      image: require("../../../asset/images/TeslaImage/modelYBlack.png"),
      price: "$48,190",
    },
  ];

  const choice = [
    {
      id: "1",
      title: "Add",
    },
    {
      id: "2",
      title: "Remove",
    },
  ];

  const navigation = useNavigation();

  const CarItemDetails = () => {
    navigation.navigate("CarItemDetails");
  };

  const [selected, setSelected] = useState("");
  const [selectedChoice, setSelectedChoice] = useState("");
  const [modalVisible, setModalVisible] = useState("");

  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <Header />
      <Text
        style={{ top: 100, marginLeft: 10, fontSize: 20, fontWeight: "500" }}
      >
        Our Current Inventory
      </Text>
      <View style={{ height: 200 }}>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ top: 120 }}
          keyExtractor={(item) => item.id}
          renderItem={({ item: { id, name, image }, item }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <TouchableOpacity
                onPress={() => setSelected(item)}
                style={[id === selected.id ? styles.highlight : styles.card]}
              >
                <Image
                  style={{ height: 100, width: 270, resizeMode: "contain" }}
                  source={item.image}
                />
                <View>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 15,
                      fontWeight: "500",
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 11,
                      fontWeight: "200",
                    }}
                  >
                    {item.price}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <View style={{ top: 150 }}>
        <Text style={{ fontWeight: "500", fontSize: 20, marginLeft: 13 }}>
          Full Self-Driving Capability
        </Text>
        <FlatList
          data={choice}
          style={{ top: 20, left: 20 }}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item: { id, title }, item }) => (
            <View style={{ marginTop: 10 }}>
              <TouchableOpacity
                onPress={() => setSelectedChoice(item)}
                style={[
                  id === selectedChoice.id
                    ? styles.buttonHighlight
                    : styles.button,
                ]}
              >
                <Text style={{ textAlign: "center", top: 5, color: "white",fontSize:16 }}>
                  {title}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <View style={{ top: 250, flex: 1, alignItems: "center" }}>
        <TouchableOpacity
          style={{
            width: "70%",
            height: 30,
            backgroundColor: "#212121",
            borderRadius: 20,
          }}
          onPress={() => setModalVisible(true)}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              top: 6,
              textTransform: "uppercase",
            }}
          >
            Place Order
          </Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <Header />
        <View style={{ backgroundColor: "white", height: "100%" }}>
          <Text
            style={{
              color: "black",
              top: 200,
              textAlign: "center",
              fontSize: 30,
              fontWeight: "500",
            }}
          >
            Order Placed
          </Text>
          <View style={{ top: 230, alignItems: "center" }}>
            <Image
              source={selected?.image}
              style={{ height: 300, width: 300, resizeMode: "contain" }}
            />
            <Text style={{ bottom: 50, fontWeight: "500", fontSize: 20 }}>
              Your {selected?.name} will arrive in March.
            </Text>
            <TouchableOpacity
              style={{
                width: "90%",
                height: 40,
                backgroundColor: "#4769D9",
                borderRadius: 100,
                top: 15,
              }}
              onPress={() => navigation.navigate("CarList")}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  top: 9,
                  textTransform: "uppercase",
                  fontSize: 17,
                }}
              >
                Ok
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ bottom: 165 }}>
            <Icon
              name="checkmark-circle"
              type="ionicon"
              color="green"
              size={45}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default SubInventory;

const styles = StyleSheet.create({
  cars: {
    height: 70,
    width: 170,
    resizeMode: "contain",
  },
  card: {
    height: 150,
    width: "95%",
    backgroundColor: "#f1f1f1",
    left: 10,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  highlight: {
    backgroundColor: "#d7d7d7",
    borderRadius: 5,
    width: "95%",
    left: 10,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 100,
    height: 30,
    backgroundColor: "#aeaeae",
    marginHorizontal: 35,
    borderRadius: 20,
  },
  buttonHighlight: {
    width: 100,
    height: 30,
    backgroundColor: "#4769D9",
    marginHorizontal: 35,
    borderRadius: 20,
  },
  modal: {
    height: "30%",
    width: "80%",
    backgroundColor: "black",
    flex: 1,
  },
});
