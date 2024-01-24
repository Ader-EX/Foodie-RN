import { View, Text, TextInput } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
export default function SearchInput({ icon, placeholder }) {
  return (
    <View className="bg-white flex-row p-4 rounded-xl my-4  shadow-xl ">
      <FontAwesome name={icon} size={20} color="#f96163" />
      <TextInput
        className="opacity-70 ml-3"
        placeholder={placeholder}
      ></TextInput>
    </View>
  );
}
