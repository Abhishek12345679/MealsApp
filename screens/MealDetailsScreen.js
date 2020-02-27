import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";

import { CATEGORIES, MEALS } from '../data/dummy-data'
import { ScrollView } from "react-native-gesture-handler";
import Colors from "../constants/Colors";

import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'

import UUIDGenerator from 'react-native-uuid-generator';

const MealDetailsScreen = props => {

    const mealId = props.navigation.getParam('mealId')
    const selectedMeal = MEALS.find(meal => mealId === meal.id)

    const isVegan = selectedMeal.isVegan
    const isVeg = selectedMeal.isVegetarian
    const isLacFree = selectedMeal.isLactoseFree
    const isGlutenFree = selectedMeal.isGlutenFree

    return (
        <ScrollView>
            <View style={styles.screen}>
                <View style={{ height: 200 }}>
                    <ImageBackground
                        source={{ uri: selectedMeal.imageUrl }}
                        style={styles.imageBg}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.text}>{selectedMeal.title}</Text>
                        </View>
                    </ImageBackground>
                </View>
                <Text>Ingredients</Text>
                <View style={styles.List}>
                    {selectedMeal.ingredients.map(ingredients =>
                        <View
                            style={styles.ListItem}>
                            <Text style={{ color: '#fff' }}>{ingredients}</Text>
                        </View>
                    )}
                </View>
                <Text>Steps</Text>
                <View style={styles.List}>
                    {selectedMeal.steps.map(step =>
                        <View style={styles.ListItem}>
                            <Text style={{ color: '#fff' }}>{step}</Text>
                        </View>
                    )}
                </View>
                <View>
                    <View></View>
                    <View></View>
                </View>
                <View>
                    <View></View>
                    <View></View>
                </View>
            </View>
        </ScrollView>
    );
};

MealDetailsScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId')
    const selectedMeal = MEALS.find(meal => mealId === meal.id)

    return {
        headerTitle: selectedMeal.title,
        headerRight: () =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    iconName="ios-star"
                    title='fav'
                    onPress={() => { }} />
            </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    imageBg: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    text: {
        fontSize: 30,
        fontFamily: 'open-sans-bold',
        color: "#fff",
        shadowOpacity: 0.8,
        marginEnd: 10,
        marginBottom: 8
    },
    titleContainer: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    List: {
        padding: 20
    },
    ListItem: {
        padding: 15,
        backgroundColor: Colors.accentColor,
        margin: 5
    }
});

export default MealDetailsScreen;
