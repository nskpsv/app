import {applyMiddleware, combineReducers, createStore } from "redux";
import cartReducer from './cartReducer.js';
import homePageReducer from './homePageReducer.js';
import productsReducer from './productsReducer.js';
import usersReducer from './usersReducer.js';
import profileReducer from './profileReducer.js';
import authReducer from './authReducer.js';
import myProfileReducer from './myProfileReducer.js';
import thunk from 'redux-thunk';

let reducers = combineReducers({   
    cart: cartReducer,
    homePage: homePageReducer,
    products: productsReducer,
    users: usersReducer,
    profile: profileReducer,
    auth: authReducer,
    myProfile: myProfileReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));
window.state = store.getState();

export default store;