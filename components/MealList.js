import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useSelector } from 'react-redux'

import MealItem from './MealItem'

const MealList = (props) => {

    const favMeals = useSelector(state => state.meals.favouriteMeals)

    const renderMealItem = (itemData) => {

        const isFav = favMeals.some(meal => meal.id === itemData.item.id) 
        // some( ) is the alternative for find( )

        return (
            <MealItem
                image={itemData.item.imageUrl}
                onSelectItem={() =>
                    props.navigation.navigate({
                        routeName: 'MealDetail',
                        params: {
                            mealId: itemData.item.id,
                            mealTitle: itemData.item.title,
                            isFav: isFav
                        }
                    })
                }
                title={itemData.item.title}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability} />
        )
    };

    return (
        <View style={styles.list}>
            <FlatList
                style={{ width: "100%" }}
                data={props.displayedMeals}
                renderItem={renderMealItem} />
        </View>
    )
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10
    }
})

export default MealList;
