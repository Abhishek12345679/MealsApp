import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const MealDetailsScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Categories Screen </Text>
            <Button
                title="Meals"
                style={{ marginVertical: '10' }}
                onPress={() => {
                    props.navigation.navigate({ routeName: "Meals" })
                }} />

            <Button title="Push" onPress={()=>{
                props.navigation.push('Meals')
            }}/>

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