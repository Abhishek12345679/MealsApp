import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'

import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, View, Text, Switch, Platform } from "react-native";
import Colors from '../constants/Colors';
import { useDispatch } from 'react-redux'
import { setFilters } from '../store/actions/meals';


const FilterSwitch = (props) => {
    return (
        <View style={styles.row}>
            <Text>{props.label}</Text>
            <Switch
                value={props.state}
                thumbColor={Platform.OS === 'ios' ? '#fff' : Colors.primaryColor}
                trackColor={{ true: Platform.OS === 'ios' ? Colors.primaryColor : "" }}
                onValueChange={props.onChange} />
        </View>
    )
}

const FilterScreen = (props) => {
    const { navigation } = props

    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isVegetarian, setIsVegetarian] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(false)

    const dispatch = useDispatch();

    const onSaveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            vegan: isVegan,
            vegetarian: isVegetarian,
            LactoseFree: isLactoseFree
        }
        dispatch(setFilters(appliedFilters))
    },
        [isGlutenFree, isVegan, isVegetarian, isLactoseFree,dispatch])

    useEffect(() => {
        navigation.setParams({ save: onSaveFilters })
    }, [onSaveFilters])


    return (
        <View style={styles.screen}>
            <Text style={styles.header}>Filters</Text>
            <View styles={styles.restrictionList}>
                <FilterSwitch
                    label='Gluten Free'
                    state={isGlutenFree}
                    onChange={newValue => setIsGlutenFree(newValue)} />
                <FilterSwitch
                    label='Vegan'
                    state={isVegan}
                    onChange={newValue => setIsVegan(newValue)} />
                <FilterSwitch
                    label='Vegetarian'
                    state={isVegetarian}
                    onChange={newValue => setIsVegetarian(newValue)} />
                <FilterSwitch
                    label='Lactose Free'
                    state={isLactoseFree}
                    onChange={newValue => setIsLactoseFree(newValue)} />
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
                    onPress={() =>
                        navData.navigation.toggleDrawer()
                    } />
            </HeaderButtons>
        ),
        headerRight: () => (
            <HeaderButtons
                HeaderButtonComponent={HeaderButton}>
                <Item
                    iconName="ios-save"
                    title='save'
                    onPress={navData.navigation.getParam('save')} />
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