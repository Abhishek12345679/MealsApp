import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

import { CATEGORIES } from "../data/dummy-data";

const MealDetailsScreen = props => {

    const renderDataItem = (itemData) => {
        return (
            <TouchableOpacity style={styles.listItem} onPress={() => {
                props.navigation.navigate({routeName:'Meals'})
            }}>
                <View>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <FlatList
            contentContainerStyle={styles.categoryGrid}
            data={CATEGORIES}
            renderItem={renderDataItem}
            numColumns={2} />
    );
};

const styles = StyleSheet.create({
    categoryGrid: {
        padding:10,
        justifyContent: 'center',
        alignItems: "center",
        flex:1,
        marginTop:50
    },
    listItem: {
        padding: 5,
        margin: 50,
        height: 150,
        width: '100%'
    }
});

export default MealDetailsScreen;
