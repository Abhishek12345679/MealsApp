import React from "react";
import { Platform } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";

const MealScreen = props => {
    const catId = props.navigation.getParam("categoryId");
    const availableMeals = useSelector(state => state.meals.filteredMeals)
    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    return (
        <MealList navigation={props.navigation} displayedMeals={displayedMeals} />
    );
};

MealScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam("categoryId");
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title,
        headerTintColor:
            Platform.OS === "android" ? "#fff" : selectedCategory.color,
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? selectedCategory.color : ""
        }
    };
};

export default MealScreen;
