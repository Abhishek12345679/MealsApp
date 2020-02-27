import React from "react";
import { StyleSheet, View, Text } from "react-native";

const FavouritesScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Favourites Screen</Text>
        </View>);
};

FavouritesScreen.navigationOptions = {
    headerTitle: "Your Picks"
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    }
});

export default FavouritesScreen