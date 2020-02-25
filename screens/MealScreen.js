import React from "react";
import { StyleSheet, View, Text, Button} from "react-native";


import { CATEGORIES } from '../data/dummy-data'

const MealScreen = props => {

    const catId = props.navigation.getParam('categoryId')

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

    return (
        <View style={styles.screen}>
            <Text> Meal Screen </Text>
            <Button
                title="Details"
                style={{ marginVertical: "10" }}
                onPress={() => {
                    props.navigation.navigate({ routeName: "MealDetail" });
                }}
            />
            <Button
                title="pop"
                onPress={() => {
                    props.navigation.pop();
                }}
            />
        </View>
    );
};

MealScreen.navigationOptions = navigationData => {

    const catId = navigationData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

    return {
        headerTitle: selectedCategory.title,
    }

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10
    }
});

export default MealScreen;
