import React from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = props => {
    const renderDataItem = itemData => {
        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={
                    () => {
                        props.navigation.navigate({
                            routeName: "Meals",
                            params: {
                                categoryId: itemData.item.id
                            }
                        });
                    }
                }
            />
        );
    };

    return (
        <FlatList
            data={CATEGORIES}
            renderItem={renderDataItem}
            numColumns={2}
        />
    );
};

CategoriesScreen.navigationOptions = (navData) => {
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

const styles = StyleSheet.create({});

export default CategoriesScreen;