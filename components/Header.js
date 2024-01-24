import { View, Text } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function Header({ headerText, headerIcon }) {
  return (
    <View className="flex-row justify-between ">
      <Text className="text-2xl font-bold">{headerText}</Text>
      <FontAwesome
        name={headerIcon}
        size={24}
        color="#f96163"
        className="self-center  justify-center items-center"
      />
    </View>
  );
}
