import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, TouchableNativeFeedback, Platform, ImageBackground } from "react-native";



const MealItem = (props) => {

    let Touchablecmp = TouchableOpacity

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        Touchablecmp = TouchableOpacity
    }

    return (
        <Touchablecmp
            onPress={props.onSelectItem}
            style={styles.mealItem}>
            <View style={StyleSheet.mainImageContainer}>
                <ImageBackground
                    source={{ uri: props.image }}
                    style={styles.imageBg}>

                    <Text>{props.title}</Text>
                </ImageBackground>
            </View>
            <View style={styles.mealOverview}></View>
        </Touchablecmp>
    );
};

const styles = StyleSheet.create({
    mainImageContainer: {
        
    },
    mealOverview: {
        flexDirection: 'row'
    },
    imageBg: {
        width: '100%',
        height: '100%'
    },
    mealItem: {
        width: '100%',
        height: 200,
        flex: 1
    }
});

export default MealItem;
