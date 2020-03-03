import React, { useEffect, useCallback } from "react";
import { StyleSheet, View, Text, ImageBackground, ScrollView, Dimensions } from "react-native";
// import { Icon } from 'react-native-elements'

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavourites } from '../store/actions/meals'

const MealDetailsScreen = props => {
    const mealId = props.navigation.getParam("mealId");

    const availableMeals = useSelector(state => state.meals.meals)
    const favouriteMeals = useSelector(state => state.meals.favouriteMeals)

    const selectedMeal = availableMeals.find(meal => mealId === meal.id);

    const isFavourite = favouriteMeals.find(meal => meal.id === selectedMeal.id)

    const dispatch = useDispatch()

    const toggleFavHandler = useCallback(() => {
        dispatch(toggleFavourites(mealId))
    }, [mealId, dispatch])

    useEffect(() => {
        props.navigation.setParams({ mealTitle: selectedMeal.title })
    }, [selectedMeal])

    useEffect(() => {
        props.navigation.setParams({ toggleFav: toggleFavHandler })
    }, [toggleFavHandler])

    useEffect(() => {
        props.navigation.setParams({ isFav: isFavourite })
    }, [isFavourite])

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
                <Text style={styles.sectionHeader}>Ingredients</Text>
                <View style={styles.List}>
                    {selectedMeal.ingredients.map(ingredient => (
                        <View style={{ flexDirection: 'column' }} key={ingredient}>
                            <View style={styles.ListItem}>
                                <Text style={{ color: "#000" }}>{ingredient}</Text>
                            </View>
                            <View style={styles.divider}></View>
                        </View>
                    ))}

                </View>
                <Text style={styles.sectionHeader}>Steps</Text>
                <View style={styles.List}>
                    {selectedMeal.steps.map(step => (
                        <View style={{ flexDirection: 'column' }} key={step}>
                            <View style={styles.ListItem}>
                                <Text style={{ color: "#000" }}>{step}</Text>
                            </View>
                            <View style={styles.divider}></View>
                        </View>
                    ))}
                </View>
                <View styles={styles.foodOrientation}>
                    <Text style={styles.sectionHeader}>Food Habits</Text>
                    <View style={styles.rowOne}>
                        {/* <View>
                            <Icon
                                raised
                                name='leaf'
                                type='font-awesome'
                                color='#f50'
                                onPress={() => console.log('hello')} />
                        </View>
                        <View>
                            <Icon
                                name='leaf'
                                type='font-awesome'
                                color='#f50'
                                onPress={() => console.log('hello')} />
                        </View>
                    </View>
                    <View style={styles.rowTwo}>
                        <View>
                            <Icon
                                raised
                                name='leaf'
                                type='font-awesome'
                                color='#f50'
                                onPress={() => console.log('hello')} />
                        </View>
                        <View>
                            <Icon
                                raised
                                name='leaf'
                                type='font-awesome'
                                color='#f50'
                                onPress={() => console.log('hello')} />
                        </View> */}
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

MealDetailsScreen.navigationOptions = navigationData => {
    const mealTitle = navigationData.navigation.getParam('mealTitle')
    const toggleFav = navigationData.navigation.getParam('toggleFav')
    const isFavourite = navigationData.navigation.getParam('isFav')

    return {
        headerTitle: mealTitle,
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    iconName={isFavourite ? "ios-star" : "ios-star-outline"}
                    title="fav"
                    onPress={toggleFav} />
            </HeaderButtons>
        ),
        headerBackTitle: 'Back'
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        width: Dimensions.get('window').width
    },
    imageBg: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-end"
    },
    text: {
        fontSize: 30,
        fontFamily: "open-sans-bold",
        color: "#fff",
        shadowOpacity: 0.8,
        marginEnd: 10,
        marginBottom: 8
    },
    titleContainer: {
        justifyContent: "space-between",
        alignItems: "center"
    },
    List: {
        padding: 20
    },
    ListItem: {
        padding: 15,
        margin: 0,
        width: '100%',
        backgroundColor: '#fff'
    },
    foodOrientation: {
        flexDirection: 'column'
    },
    rowOne: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30
    },
    rowTwo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30
    },
    sectionHeader: {
        marginHorizontal: 30,
        marginTop: 12,
        fontFamily: 'open-sans-bold',
        fontSize: 30
    },
    divider: {
        height: 1,
        width: '98%',
        marginHorizontal: 5,
        backgroundColor: '#ccc'
    }
});

export default MealDetailsScreen;
