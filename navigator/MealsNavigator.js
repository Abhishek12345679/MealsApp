import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation'

import CategoriesScreen from "../screens/CategoriesScreen";
import MealScreen from "../screens/MealScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";

const MealsNavigator = createStackNavigator({
    CategoriesScreen: CategoriesScreen,
    Meals: MealScreen,
    MealDetail: {
        screen: MealDetailsScreen
    }
});

export default createAppContainer(MealsNavigator);