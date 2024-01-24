import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import React from "react";

export default function WelcomeScreen({ navigation }) {
  return (
    <View className="p-4 flex-1 items-center">
      <View className="w-[30%] items-center">
        <Image
          source={require("../assets/images/welcome1.png")}
          className=" object-scale-down"
        />
      </View>
      <Text className="text-2xl font-bold text-[#f96163]">
        Over 40K+ Recipes
      </Text>
      <Text className="text-xl mt-2 mb-10 font-semibold">Cook Like A Chef</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        className="px-8 py-6 bg-[#f96163] w-[80%] rounded-full items-center"
      >
        <Text className="text-white font-bold text-xl">Okay</Text>
      </TouchableOpacity>
    </View>
  );
}
