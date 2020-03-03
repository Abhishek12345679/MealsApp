import React from "react";
import MealList from "../components/MealList";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { useSelector } from "react-redux";

const FavouritesScreen = props => {

    const availableMeals = useSelector(state => state.meals.favouriteMeals)

    return (
        <MealList
            displayedMeals={availableMeals}
            navigation={props.navigation} />
    );
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
