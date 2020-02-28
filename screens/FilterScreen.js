import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'

import React, { useState } from "react";
import { StyleSheet, View, Text, Switch, Platform, Dimensions } from "react-native";
import Colors from '../constants/Colors';

const FilterScreen = () => {

    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isVegan, setIsVegan] = useState(true)
    const [isVegetarian, setIsVegetarian] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(true)

    return (
        <View style={styles.screen}>
            <Text style={styles.header}>Filters</Text>
            <View styles={styles.restrictionList}>
                <View style={styles.row}>
                    <Text>Gluten Free</Text>
                    <Switch
                        value={isGlutenFree}
                        thumbColor={Platform.OS === 'ios' ? '#fff' : Colors.primaryColor}
                        trackColor={{ true: Platform.OS === 'ios' ? Colors.primaryColor : "" }}
                        onValueChange={newValue => setIsGlutenFree(newValue)} />
                </View>
                <View style={styles.row}>
                    <Text>Vegetarian</Text>
                    <Switch
                        value={isVegetarian}
                        thumbColor={Platform.OS === 'ios' ? '#fff' : Colors.primaryColor}
                        trackColor={{ true: Platform.OS === 'ios' ? Colors.primaryColor : "" }}
                        onValueChange={newValue => setIsVegetarian(newValue)} />
                </View>
                <View style={styles.row}>
                    <Text>Lactose Free</Text>
                    <Switch
                        value={isLactoseFree}
                        thumbColor={Platform.OS === 'ios' ? '#fff' : Colors.primaryColor}
                        trackColor={{ true: Platform.OS === 'ios' ? Colors.primaryColor : "" }}
                        onValueChange={newValue => setIsLactoseFree(newValue)} />
                </View>
                <View style={styles.row}>
                    <Text>Vegan</Text>
                    <Switch
                        value={isVegan}
                        thumbColor={Platform.OS === 'ios' ? '#fff' : Colors.primaryColor}
                        trackColor={{ true: Platform.OS === 'ios' ? Colors.primaryColor : "" }}
                        onValueChange={newValue => setIsVegan(newValue)} />
                </View>
            </View>
        </View>);
};

FilterScreen.navigationOptions = (navData) => {
    return {
        headerLeft: () => (
            <HeaderButtons
                HeaderButtonComponent={HeaderButton}>
                <Item
                    iconName="ios-menu"
                    title='Menu'
                    onPress={() => {
                        navData.navigation.toggleDrawer()
                    }} />
            </HeaderButtons>
        )
    }

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20
    },
    header: {
        marginHorizontal: 0,
        marginVertical: 12,
        fontFamily: 'open-sans-bold',
        fontSize: 30
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5
    },
    restrictionList: {
        flexDirection: 'column',
        padding: 10
    }
});

export default FilterScreen