import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";

const CategoriesScreen = props => {

    const renderDataItem = (itemData) => {
        return (
            <TouchableOpacity style={styles.listItem} onPress={() => {
                props.navigation.navigate({
                    routeName: 'Meals',
                    params: {
                        categoryId: itemData.item.id
                    }
                })
            }}>
                <View>
                    <Text style={styles.itemText}>{itemData.item.title}</Text>
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
        padding: 10,
        justifyContent: 'center',
        alignItems: "center"
    },
    listItem: {
        padding: 20,
        margin: 50,
        height: 150,
        width: '100%'
    },
    itemText: {
        color: Colors.accentColor,
        fontWeight: 'bold'
    }
});

export default CategoriesScreen;
