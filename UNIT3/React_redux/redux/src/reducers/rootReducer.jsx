import { combineReducers } from 'redux'
import utenteReducer from './utenteReducer'
import filmsReducer from './filmsReducer'

const rootReducer = combineReducers({
    utente: utenteReducer,
    films: filmsReducer,
})


export default rootReducer;