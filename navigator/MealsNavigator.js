import React from 'react'
import {
    Ionicons,
    Foundation
} from '@expo/vector-icons'
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import CategoriesScreen from "../screens/CategoriesScreen";
import MealScreen from "../screens/MealScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import FavouritesScreen from '../screens/FavouritesScreen'
import FilterScreen from '../screens/FilterScreen'

import Colors from "../constants/Colors";

import { Platform } from "react-native";

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
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === "ios" ? "" : Colors.primaryColor
            },
            headerTintColor: Platform.OS === "android" ? "#fff" : Colors.primaryColor
        }
    }
);

const BottomTabNavigator = createBottomTabNavigator(
    {
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
                }
            }
        },
        fav: {
            screen: FavouritesScreen,
            navigationOptions: {
                tabBarLabel: 'Favourites',
                tabBarIcon: (tabBarInfo) => {
                    return (
                        <Ionicons
                            name="ios-heart"
                            size={25}
                            color={tabBarInfo.tintColor} />
                    )
                }
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
                }
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: Colors.accentColor
        }
    })

export default createAppContainer(BottomTabNavigator);
