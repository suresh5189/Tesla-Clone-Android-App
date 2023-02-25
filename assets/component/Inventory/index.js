import {
  View,
  Text,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
// import { useNavigation } from "@react-navigation/native";
import Header from "../Header";
import styles from "./styles";
import { Video } from "expo-av";
import { useRef } from "react";
import { useNavigation } from "@react-navigation/native";

const Inventory = () => {

  const navigation = useNavigation();

  const onInventory = () => {
   navigation.navigate("SubInventory");
  }

  const CarItemDetails = () => {
    navigation.navigate('CarItemDetails');
  }

  const list = [
    {
      id: "e1",
      name: "Model S",
      image: require("../../../asset/images/TeslaImage/modelSImage.png"),
      range: "652km",
      topSpeed: "250km/h",
      zeroToHundred: "3.2sec",
      rangeHeader: "Range (EPA est.)",
      topSpeedHeader: "Top Speed",
      zeroToHundredHeader: "0-100 km/h",
      delivery: "Est. Delivery: March-April",
    },
    {
      id: "e2",
      name: "Model X",
      image: require("../../../asset/images/TeslaImage/modelXImage.png"),
      range: "580km",
      topSpeed: "250km/h",
      zeroToHundred: "3.9sec",
      rangeHeader: "Range (EPA est.)",
      topSpeedHeader: "Top Speed",
      zeroToHundredHeader: "0-100 km/h",
      delivery: "Est. Delivery: March-April",
    },
    {
      id: "e3",
      name: "Model Y",
      image: require("../../../asset/images/TeslaImage/modelYImage.png"),
      range: "525km",
      topSpeed: "217km/h",
      zeroToHundred: "5.0sec",
      rangeHeader: "Range (EPA est.)",
      topSpeedHeader: "Top Speed",
      zeroToHundredHeader: "0-100 km/h",
      delivery: "Est. Delivery: March",
    },
    {
      id: "e4",
      name: "Model 3",
      image: require("../../../asset/images/TeslaImage/model3Image.png"),
      range: "568km",
      topSpeed: "233km/h",
      zeroToHundred: "4.4sec",
      rangeHeader: "Range (EPA est.)",
      topSpeedHeader: "Top Speed",
      zeroToHundredHeader: "0-100 km/h",
      delivery: "Est. Delivery: December",
    },
  ];

  const videoList = [
    {
      id: "f1",
      videoClip: require("../../../asset/video/autopilot-tesla.mp4"),
    },
    {
      id: "f2",
      videoClip: require("../../../asset/video/parking.mp4"),
    },
    {
      id: "f3",
      videoClip: require("../../../asset/video/parallel.mp4"),
    },
  ];

  const video = useRef(null);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, width: "100%", backgroundColor: "white" }}
    >
      <Header />
      <FlatList
        data={list}
        horizontal
        style={{ paddingBottom: 10 }}
        showsHorizontalScrollIndicator={false}
        snapToAlignment={"center"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").width}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{padding:12}}>
            <View
              style={{
                flex: 1,
                position: "absolute",
                height: "80%",
                width: "93%",
                top: 0,
                backgroundColor: "#f3f3f3",
                left: 25,
                borderRadius: 25,
                marginTop: 120,
              }}
              ></View>
            <TouchableOpacity onPress={CarItemDetails}>
            <Image
              style={{
                height: 390,
                width: 385,
                resizeMode: "contain",
                top: 30,
              }}
              source={item.image}
            />
            </TouchableOpacity>
            <View style={{ bottom: 55 }}>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "500",
                  fontSize: 29,
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  color: "grey",
                }}
              >
                {item.delivery}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginTop: -15,
                marginBottom:30,
                right: 7,
              }}
            >
              <View>
                <Text style={styles.value}>{item.range}</Text>
                <Text style={styles.header}>{item.rangeHeader}</Text>
              </View>
              <View>
                <Text style={styles.value}>{item.topSpeed}</Text>
                <Text style={styles.header}>{item.topSpeedHeader}</Text>
              </View>
              <View>
                <Text style={styles.value}>{item.zeroToHundred}</Text>
                <Text style={styles.header}>{item.zeroToHundredHeader}</Text>
              </View>
            </View>
          </View>
        )}
      />

      <View
        style={{
          width: "80%",
          backgroundColor: "grey",
          top: 50,
          height: 0.4,
          left: 40,
        }}
      >
        <Text>1</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={{ top: 110 }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "500",
            }}
          >
            Full Self-Driving Capability
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontWeight: "400",
              textAlign: "center",
              marginTop: 7,
            }}
          >
            $10,600
          </Text>
        </View>

        <Text
          style={{
            marginTop: 150,
            right: 117,
            marginBottom: 6,
            fontSize: 17,
            fontWeight: "500",
          }}
        >
          Navigate on AutoPilot
        </Text>
        <View style={styles.textContainer}>
          <Text style={{ color: "grey", fontWeight: "300", fontSize: 12 }}>
            Automatic driving from highway on-ramp to off-ramp includes
            automatic lane changes, Traffic-Aware Cruise Control with complete
            stopping and re-engagement, Autosteer, and overtaking slow cars in
            your lane.
          </Text>
        </View>
        <Video
          shouldPlay={true}
          ref={video}
          source={videoList[0].videoClip}
          isLooping={true}
          isMuted={true}
          resizeMode={'contain'}
          style={{
            marginTop:-40,
            height: 350,
            width: "100%",
            marginBottom: -150,
            borderRadius: 10,
          }}
        />

        <Text
          style={{
            marginTop: 100,
            right: 153,
            marginBottom: 6,
            fontSize: 17,
            fontWeight: "500",
          }}
        >
          AutoPark
        </Text>
        <View style={styles.textContainer}>
          <Text style={{ color: "grey", fontWeight: "300", fontSize: 12}}>
            Park with ease in both parallel and perpendicular parking spaces
            with a single button tap on the Center Display. Model S will alert
            you to available parking spots by continuously monitoring the space
            around you while driving under 24 km/h.
          </Text>
        </View>
        <Video
          shouldPlay={true}
          ref={video}
          source={videoList[2].videoClip}
          isLooping={true}
          isMuted={true}
          resizeMode={'contain'}
          style={{
            height: 300,
            width: "100%",
            marginBottom: -170,
            borderRadius: 10,
          }}
        />
        <Text
          style={{
            marginTop: 110,
            right: 157,
            marginBottom: 6,
            fontSize: 16,
            fontWeight: "500",
          }}
        >
          Summon
        </Text>
        <View style={styles.textContainer}>
          <Text style={{ color: "grey", fontWeight: "300", fontSize: 12 }}>
            Activated by the Tesla App, your parked car will come find you
            anywhere in a parking lot, and even park or unpark itself in tight
            spaces. Summon navigates complex parking situations while abiding by
            lane markings and stop signs, avoiding pedestrians and obstacles
            like traffic cones, trash bins and rogue shopping carts.
          </Text>
        </View>
        <Video
          shouldPlay={true}
          ref={video}
          source={videoList[1].videoClip}
          isLooping={true}
          isMuted={true}
          resizeMode={'contain'}
          style={{
            height: 300,
            width: "100%",
            marginBottom: 30,
            borderRadius: 10,
          }}
        />
      </View>

      <View style={{ alignItems: "center", paddingBottom: 50 }}>
        <TouchableOpacity
          style={{
            height: 40,
            width: "50%",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#4769D9",
          }}
          onPress={onInventory}
        >
          <Text
            style={{
              fontSize: 13,
              fontWeight: "500",
              textTransform: "uppercase",
              color: "white",
            }}
          >
            Our Inventory
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Inventory;
