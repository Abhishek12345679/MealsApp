import React from "react";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const FavouritesScreen = props => {
    const dummyMeals = MEALS.filter(meal => meal.id === "m1" || meal.id === "m3");
    return <MealList
        displayedMeals={dummyMeals}
        navigation={props.navigation} />;
};

FavouritesScreen.navigationOptions = navData => {
    return {
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    iconName="ios-menu"
                    title="Menu"
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        )
    };
};

export default FavouritesScreen;
