

const initialState = {
    film1: '',
    film2: '',
    film3: '',
}

const filmReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FILM1':
            return {
                ...state,
                film1: action.payload
            }
        case 'SET_FILM2':
            return {
                ...state,
                film2: action.payload
            }
        case 'SET_FILM3':
            return {
                ...state,
                film3: action.payload
            }
        default:
            return state;
    }
}


export default filmReducer;