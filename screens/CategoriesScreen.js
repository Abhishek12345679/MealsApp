import React from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = props => {

    const renderDataItem = (itemData) => {
        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'Meals',
                        params: {
                            categoryId: itemData.item.id
                        }
                    })
                }} />);
    }

    return (
        <FlatList
            data={CATEGORIES}
            renderItem={renderDataItem}
            numColumns={2} />
    );
};


const styles = StyleSheet.create({
});

export default CategoriesScreen;
