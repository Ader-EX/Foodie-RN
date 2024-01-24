import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
export default function RecipeDetail({ navigation, route }) {
  const { item } = route.params;
  return (
    <View style={{ backgroundColor: item.color, flex: 1 }}>
      <View className="flex-row justify-between p-8 mt-7">
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <FontAwesome
            name="arrow-circle-left"
            size={28}
            color="white"
            style={{ flex: 1 }}
          />
        </TouchableOpacity>
        <FontAwesome name="heart-o" size={28} color="white" />
      </View>

      <View className="items-center bg-white flex-1 mt-[150px] rounded-t-3xl rounded-r-2xl">
        <View className=" h-[300px] w-[300px] top-[-150px]">
          <Image
            source={item.image}
            style={{ resizeMode: "contain", width: "100%", height: "100%" }}
          />
          <View className="items-center gap-y-4">
            <Text className="font-bold text-2xl text-black">{item.name}</Text>
            <Text className="text-md text-justify">{item.description}</Text>
          </View>
        </View>

        <View className="flex-1">
          <ScrollView>
            <View className="flex-row gap-x-6 self-center">
              <View
                className="rounded-xl bg-[#f96163] items-center p-4"
                style={{
                  backgroundColor: item.color,
                  alignItems: "center",
                  padding: 12,
                }}
              >
                <Entypo name="back-in-time" size={24} color="white" />
                <Text className="text-white">{item.time}</Text>
              </View>
              <View
                className="rounded-xl bg-[#f96163] items-center p-4"
                style={{
                  backgroundColor: item.color,
                  alignItems: "center",
                  padding: 12,
                }}
              >
                <FontAwesome5 name="fire" size={24} color="white" />
                <Text className="text-white">{item.calories}</Text>
              </View>
              <View
                className="rounded-xl bg-[#f96163] items-center p-4"
                style={{
                  backgroundColor: item.color,
                  alignItems: "center",
                  padding: 12,
                }}
              >
                <Entypo name="bar-graph" size={24} color="white" />
                <Text className="text-white">{item.difficulty}</Text>
              </View>
            </View>
            <View className="mt-5 items-center ">
              <Text className="font-semibold text-lg text-justify mb-4">
                Ingredients
              </Text>
              <View className="flex flex-row flex-wrap justify-center gap-x-4 gap-y-2 px-2">
                {item.ingredients.map((ing, i) => {
                  return (
                    <View
                      className=" rounded-xl px-4 py-3"
                      style={{ backgroundColor: item.color }}
                    >
                      <Text key={i} className="text-md text-justify text-white">
                        {ing}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>

            <View className="my-5 px-8 ">
              <Text className="font-semibold text-lg text-justify mb-4">
                Steps
              </Text>
              <View className="flex flex-row flex-wrap justify-start gap-x-4 gap-y-2 ">
                {item.steps.map((ing, i) => {
                  return (
                    <View
                      className=" rounded-xl px-4 py-3"
                      style={{ backgroundColor: item.color }}
                    >
                      <Text key={i} className="text-md text-justify text-white">
                        {i + 1}.{ing}{" "}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
