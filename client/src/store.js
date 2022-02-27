import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllVendorReducer } from "./reducers/vendorReducer";
import { cartReducer } from "./reducers/cartReducer";
import { loginUserReducer, registerUserReducer } from "./reducers/userReducer";

const finalReducer = combineReducers({
    getAllVendorReducer: getAllVendorReducer,
    cartReducer: cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer
});

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;
const initialState = {
    cartReducer: {
        cartItems: cartItems
    },
    loginUserReducer:{
        currentUser: currentUser
    }
};
const composeEnhancer = composeWithDevTools({});
const store = createStore(finalReducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;