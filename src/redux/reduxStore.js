import { applyMiddleware, combineReducers, createStore } from "redux";
//import cartReducer from './cartReducer.js';
import homePageReducer from './homePageReducer.js';
//import productsReducer from './productsReducer.js';
import usersReducer from './usersReducer.js';
import profileReducer from './profileReducer.js';
import authReducer from './authReducer.js';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
  // cart: cartReducer,
  // products: productsReducer,
  // myProfile: myProfileReducer,
  homePage: homePageReducer,
  users: usersReducer,
  profile: profileReducer,
  auth: authReducer,
  form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunk)
));

export default store;