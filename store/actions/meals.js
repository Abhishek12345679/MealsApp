export const TOGGLE_FAVOURITES = 'TOGGLE_FAVOURITES'

export const toggleFavourites = (id) => {
    return { type: TOGGLE_FAVOURITES, mealId:id}
}