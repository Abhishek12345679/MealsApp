import React from "react";
import MealList from '../components/MealList'
import { MEALS } from '../data/dummy-data'

const FavouritesScreen = (props) => {
    const dummyMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm3')
    return (<MealList displayedMeals={dummyMeals} navigation={props.navigation} />);
};

FavouritesScreen.navigationOptions = {
    headerTitle: "Your Picks"
}

export default FavouritesScreen