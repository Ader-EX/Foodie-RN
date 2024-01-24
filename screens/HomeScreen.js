import { View, Text, Image } from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import CategoryFilters from "../components/CategoryFilters";
import RecipeCard from "../components/RecipeCard";

export default function HomeScreen() {
  return (
    <View className="m-8 flex-1 py-8">
      <Text>Welcome</Text>
      <Header headerText="Hi, Nana" headerIcon={"bell-o"} />
      <SearchInput icon="search" placeholder={"Enter Your Recipes... "} />

      <View className="mb-4">
        <Text className="font-semibold text-xl mb-4">Categories</Text>
        <CategoryFilters />
      </View>

      <View className="mb-4">
        <Text className="font-semibold text-xl mb-4">Recipe List</Text>
        <RecipeCard />
      </View>
    </View>
  );
}
