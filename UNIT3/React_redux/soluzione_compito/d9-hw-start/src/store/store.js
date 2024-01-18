import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../reducers/favoritesReducers";


const store = configureStore({
    reducer: favoritesReducer
});


export default store;