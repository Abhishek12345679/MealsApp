import React from "react";
import { Platform, View, StyleSheet, Text } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
import Colors from "../constants/Colors";

const MealScreen = props => {
    const catId = props.navigation.getParam("categoryId");
    const availableMeals = useSelector(state => state.meals.filteredMeals)
    const displayedMeals = availableMeals.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    if (displayedMeals.length <= 0) {
        return (
            <View style={styles.screen}>
                <Text style={{ fontFamily: 'open-sans', color: Colors.primaryColor }}> You have restricted us 👮 </Text>
            </View>
        )
    }

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

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MealScreen;
