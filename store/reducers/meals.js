import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVOURITES } from '../actions/meals'

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favouriteMeals: []
};

const mealsReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_FAVOURITES:
            const existingIndex = state.favouriteMeals.findIndex(
                meal => meal.id === action.mealId)
            if (existingIndex >= 0) {
                const updatedList = [...state.favouriteMeals]
                updatedList.splice(existingIndex, 1)
                return { ...state, favouriteMeals: updatedList }
            }
            else {
                const meal = state.meals.find(meal => meal.id === action.mealId)
                return { ...state, favouriteMeals: state.favouriteMeals.concat(meal) }
            }
            default:
                return state;
    }
};

export default mealsReducer;