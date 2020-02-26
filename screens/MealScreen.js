import React from "react";
import { StyleSheet, View, Platform, Text, Image } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import { FlatList } from "react-native-gesture-handler";
import MealItem from "../components/MealItem";

const MealScreen = props => {

    const catId = props.navigation.getParam("categoryId");
    const displayedMeals = MEALS.filter(meal => (meal.categoryIds.indexOf(catId) >= 0))


    const renderMealItem = (itemData) => {
        return (
            <MealItem
                image={itemData.item.imageUrl}
                onSelectItem={() => { }}
                title={itemData.item.title} />
        )
    }


    return (
        <View style={styles.screen}>
            <FlatList
                data={displayedMeals}
                renderItem={renderMealItem} />
        </View>
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
        alignItems: "center",
        justifyContent: "center",
        padding: 10
    }
});

export default MealScreen;
