import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { useSelector } from "react-redux";
import Colors from '../constants/Colors';


const FavouritesScreen = props => {

    const favMeals = useSelector(state => state.meals.favouriteMeals)

    if (favMeals.length === 0 || !favMeals) {
        return (
            <View style={styles.screen}>
                <Text style={{color:Colors.primaryColor, fontFamily:'open-sans'}}>Please Gobble Up First 🍟 </Text>
            </View>
        );
    } else {
        return (
            <MealList
                displayedMeals={favMeals}
                navigation={props.navigation} />
        )
    }
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

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20,
        alignItems: "center",
        justifyContent: 'center'
    }
})

export default FavouritesScreen;
