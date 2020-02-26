import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Platform, TouchableNativeFeedback } from "react-native";

import Colors from "../constants/Colors";

const CategoryGridTile = (props) => {

    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback
    }
    return (
        <View style={styles.listItem}>
            <TouchableCmp
                activeOpacity={0.65}
                style={{ flex: 1 }}
                onPress={props.onSelect}>
                <View style={{ ...styles.categoryContainer, ...{ backgroundColor: props.color } }}>
                    <Text style={styles.itemText}>{props.title}</Text>
                </View>
            </TouchableCmp>
        </View>);
};

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        margin: 12,
        height: 150,
        borderRadius: 15,
        overflow: 'hidden'
    },
    itemText: {
        fontWeight: 'bold',
        color: '#000',
        fontFamily: 'open-sans-bold',
        fontSize: 20
    },
    categoryContainer: {
        flex: 1,
        padding: 10,
        borderRadius: 15,
        shadowOpacity: 0.5,
        shadowColor: '#000',
        shadowRadius: 3,
        shadowOffset: {
            width: 2,
            height: 5
        },
        elevation: 5,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    }
});

export default CategoryGridTile;