import {applyMiddleware, combineReducers, createStore } from "redux";
import cartReducer from './cartReducer.js';
import homePageReducer from './homePageReducer.js';
import productsReducer from './productsReducer.js';
import usersReducer from './usersReducer.js';
import profileReducer from './profileReducer.js';

let reducers = combineReducers({
    cart: cartReducer,
    homePage: homePageReducer,
    products: productsReducer,
    users: usersReducer,
    profile: profileReducer,
});

/*const enhancers = [];

if (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION__) {
    // eslint-disable-next-line no-underscore-dangle
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
};*/
let store = createStore(reducers/*, undefined, applyMiddleware(...enhancers)*/);
window.state = store.getState();

//console.log(store);
export default store;