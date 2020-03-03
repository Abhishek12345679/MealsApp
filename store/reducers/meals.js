import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVOURITES } from '../actions/meals'

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favouriteMeals: []
};

const mealsReducer = (state = initialState, action) => {

    switch (action.type) {
        TOGGLE_FAVOURITES:
}

return state;
};

export default mealsReducer;