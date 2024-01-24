import { View, Text, ScrollView } from "react-native";
import React from "react";
import { categories } from "../Constant";

export default function CategoryFilters() {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, i) => {
          return (
            <View
              key={i}
              className={` mr-4 px-4 py-4 rounded-xl mb-4 shadow-xl  ${
                i === 0 ? "bg-[#f96163] " : "bg-white"
              }`}
            >
              <Text
                className={` font-medium ${
                  i === 0 ? "text-white " : "text-black"
                } `}
              >
                {category.category}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
