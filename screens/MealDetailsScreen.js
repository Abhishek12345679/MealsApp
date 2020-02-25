import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const MealDetailsScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Meal Detail Screen</Text>

            <Button title="Go to Parent" onPress={() => {
                props.navigation.popToTop()
            }} />
        </View>);
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    }
});

export default MealDetailsScreen