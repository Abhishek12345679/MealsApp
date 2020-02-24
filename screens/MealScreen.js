import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const MealScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text> Meal Screen </Text>
            <Button
                title="Details"
                style={{ marginVertical: '10' }}
                onPress={() => {
                    props.navigation.navigate({ routeName: "MealDetail" })
                }} />
            <Button title="pop" onPress={()=>{
                props.navigation.pop()
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
    
export default MealScreen