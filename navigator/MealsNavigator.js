import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import CategoriesScreen from "../screens/CategoriesScreen";
import MealScreen from "../screens/MealScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";

import Colors from '../constants/Colors'

import { Platform } from 'react-native'

const MealsNavigator = createStackNavigator({
    CategoriesScreen:
    {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Categories'
        }
    },
    Meals: MealScreen,
    MealDetail: {
        screen: MealDetailsScreen
    }
},
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'ios' ? '' : Colors.primaryColor
            },
            headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primaryColor
        }
    });

export default createAppContainer(MealsNavigator);
