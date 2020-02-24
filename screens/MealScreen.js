import React from "react";
import { StyleSheet, View, Text } from "react-native";

const MealScreen = () => {
    return (
        <View style={styles.screen}>
            <Text> Meal Screen </Text>
        </View>);
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});

export default MealScreen