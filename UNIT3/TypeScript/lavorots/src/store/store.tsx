import { configureStore } from "@reduxjs/toolkit";
import favoritesReducers from './../reducer/favoritesReducers';

const store = configureStore({
    reducer:  favoritesReducers
});    

export default store;