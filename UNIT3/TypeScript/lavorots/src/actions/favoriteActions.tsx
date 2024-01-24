export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

type FavoriteActionReturn = {
    type: string;
    payload: string;
}


export const addFavorite = (title: string): FavoriteActionReturn =>  {
    return {
        type: ADD_FAVORITE,
        payload: title
    }
}

export const removeFavorite = (title: string): FavoriteActionReturn => {
    return {
        type: REMOVE_FAVORITE,
        payload: title
    }
}