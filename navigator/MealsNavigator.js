import React from 'react'
import { Ionicons, Foundation } from '@expo/vector-icons'
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { HeaderButton } from '../components/HeaderButton'

import CategoriesScreen from "../screens/CategoriesScreen";
import MealScreen from "../screens/MealScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import FavouritesScreen from '../screens/FavouritesScreen'
import FilterScreen from '../screens/FilterScreen'

import Colors from "../constants/Colors";

import { Platform } from "react-native";

//default navigationOptions
const defaultStackNavOptions = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === "ios" ? "" : Colors.primaryColor
        },
        headerTintColor: Platform.OS === "android" ? "#fff" : Colors.primaryColor,
        headerBackTitle: 'Back',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === "ios" ? "" : Colors.primaryColor
            },
            headerTintColor: Platform.OS === "android" ? "#fff" : Colors.primaryColor,
            headerBackTitle: 'Back',

        }
    }

};

// cat-->meals-->detail stack
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

// favMeal --> detail stack
const FavouritesNavigator = createStackNavigator(
    {
        Favourites: FavouritesScreen,
        MealDetailsScreen: MealDetailsScreen
    },
    defaultStackNavOptions
);

// stacknavig used just to give the filtersScreen the header
const FiltersNavigator = createStackNavigator(
    {
        Filters: FilterScreen
    },
    defaultStackNavOptions
);

// default bottomnavtab configuration
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
        // },
        // filter: {
        //     screen: FiltersNavigator,
        //     navigationOptions: {
        //         tabBarLabel: 'Filters',
        //         tabBarIcon: (tabBarInfo) => {
        //             return (
        //                 <Foundation
        //                     name="filter"
        //                     size={25}
        //                     color={tabBarInfo.tintColor} />
        //             )
        //         },
        //         tabBarColor: '#000'
        //     }
    }
};

// Platform-specific bottomNav
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

//side-drawer stack

const MainNavigator = createDrawerNavigator({
    MealsFavsFilters: BottomTabNavigator,
    Filters: FiltersNavigator,
})

export default createAppContainer(MainNavigator);
