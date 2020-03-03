import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from "react-native";

const MealItem = (props) => {

    return (
        <View style={styles.mealItem}>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={props.onSelectItem}>
                <View style={{ ...styles.mealOverview, ...styles.mealHeader }}>
                    <ImageBackground
                        source={{ uri: props.image }}
                        style={styles.imageBg}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.bigtext}>{props.title}</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={{ ...styles.mealOverview, ...styles.mealFooter }}>
                    <Text style={styles.text}>{props.duration} Min</Text>
                    <Text style={styles.text}>{props.complexity.toUpperCase()}</Text>
                    <Text style={styles.text}>{props.affordability.toUpperCase()}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mealOverview: {
        flexDirection: 'row'
    },
    imageBg: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
        overflow: 'hidden',
        justifyContent: 'flex-end',
    },
    mealItem: {
        width: '100%',
        height: 200,
        backgroundColor: "#000",
        borderRadius: 15,
        marginVertical: 10
    },
    mealHeader: {
        height: '85%'
    },
    mealFooter: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
        paddingHorizontal: 20
    },
    text: {
        fontFamily: 'open-sans-bold',
        color: "#fff",
    },
    bigtext: {
        fontSize: 20,
        fontFamily: 'open-sans-bold',
        color: "#fff",
        shadowOpacity: 0.8,
        marginEnd: 10,
        marginBottom: 8
    },
    titleContainer: {
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    }
});

export default MealItem;
