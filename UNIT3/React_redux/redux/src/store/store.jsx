// import { createStore } from 'redux'; NON SERVE PIU PERCHE' USIAMO REDUX TOOLKIT
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../reducers/rootReducer';

// const store = createStore(rootReducer); NON SERVE PIU PERCHE' USIAMO REDUX TOOLKIT

const store = configureStore({
    reducer: rootReducer
});


export default store;