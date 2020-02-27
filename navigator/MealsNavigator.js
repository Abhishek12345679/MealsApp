import React from 'react'
import {
    Ionicons,
    Foundation
} from '@expo/vector-icons'
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import CategoriesScreen from "../screens/CategoriesScreen";
import MealScreen from "../screens/MealScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import FavouritesScreen from '../screens/FavouritesScreen'
import FilterScreen from '../screens/FilterScreen'

import Colors from "../constants/Colors";

import { Platform } from "react-native";

const defaultStackNavOptions = {

    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === "ios" ? "" : Colors.primaryColor
        },
        headerTintColor: Platform.OS === "android" ? "#fff" : Colors.primaryColor
    }
};

const MealsNavigator = createStackNavigator(
    {
        CategoriesScreen: {
            screen: CategoriesScreen,
            navigationOptions: {
                headerTitle: "Categories"
            }
        },
        Meals: MealScreen,
        MealDetail: {
            screen: MealDetailsScreen
        }
    },
    defaultStackNavOptions

);

const FavouritesNavigator = createStackNavigator(
    {
        Favourites: FavouritesScreen,
        MealDetailsScreen: MealDetailsScreen
    },
    defaultStackNavOptions
);

const tabBarConfig = {
    meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarLabel: 'Meals',
            tabBarIcon: (tabBarInfo) => {
                return (
                    <Ionicons
                        name="ios-restaurant"
                        size={25}
                        color={tabBarInfo.tintColor} />
                )
            },
            tabBarColor: Colors.primaryColor
        }
    },
    fav: {
        screen: FavouritesNavigator,
        navigationOptions: {
            tabBarLabel: 'Favourites',
            tabBarIcon: (tabBarInfo) => {
                return (
                    <Ionicons
                        name="ios-heart"
                        size={25}
                        color={tabBarInfo.tintColor} />
                )
            },
            tabBarColor: Colors.accentColor
        }
    },
    filter: {
        screen: FilterScreen,
        navigationOptions: {
            tabBarLabel: 'Filters',
            tabBarIcon: (tabBarInfo) => {
                return (
                    <Foundation
                        name="filter"
                        size={25}
                        color={tabBarInfo.tintColor} />
                )
            },
            tabBarColor: '#000'
        }
    }
};

const BottomTabNavigator =
    Platform.OS === 'android' ?
        createMaterialBottomTabNavigator(
            tabBarConfig, {
            activeTintColor: "#fff",
            shifting: true
        }
        ) :
        createBottomTabNavigator(
            tabBarConfig, {
            tabBarOptions: {
                activeTintColor: Colors.primaryColor
            }
        })

export default createAppContainer(BottomTabNavigator);
