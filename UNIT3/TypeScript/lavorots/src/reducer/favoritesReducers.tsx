import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/favoriteActions"

type List = {
    list: string[];
}

type Action = {
    type: string;
    payload: string;
}

const initialState: List = {
    list: []
}

const favoritesReducers = (state = initialState, action: Action): List => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        case REMOVE_FAVORITE:
            return {
                ...state,
                list: state.list.filter((fav) => fav !== action.payload)
            }
        default:
            return state
    }
}


export default favoritesReducers;