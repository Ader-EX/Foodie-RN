import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { recipeList } from "../Constant";
import { useNavigation } from "@react-navigation/native";

export default function RecipeCard() {
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={recipeList}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Detail", { item: item });
              }}
              className="bg-white shadow-xl items-center my-4 px-4 py-6 rounded-xl"
            >
              <Image source={item.image} className="w-[120px] h-[120px]" />
              <Text className="my-2 font-semibold">{item.name}</Text>
              <View className="flex-row ">
                <View>
                  <Text>{item.time}</Text>
                </View>
                <Text> | </Text>
                <View className="flex-row">
                  <Text className="mr-2">{item.rating}</Text>
                  <View className="self-center">
                    <FontAwesome name="star" size={16} color="#f96163" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
