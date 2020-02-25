import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import { CATEGORIES } from "../data/dummy-data";

const MealDetailsScreen = props => {

    const renderDataItem = (itemData) => {
        return (
            <View style={styles.listItem}>
                <Text>{itemData.item.title}</Text>
            </View>);
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
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10
    },
    categoryGrid: {
        padding: 10,
        marginHorizontal: 20
    }
});

export default MealDetailsScreen;
