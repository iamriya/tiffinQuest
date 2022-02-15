import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllVendorReducer } from "./reducers/vendorReducer";
import { cartReducer } from "./reducers/cartReducer";


const finalReducer = combineReducers({
    getAllVendorReducer: getAllVendorReducer,
    cartReducer: cartReducer,
   
});
const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const initialState = {
    cartReducer: {
        cartItems: cartItems
    }
};
const composeEnhancer = composeWithDevTools({});
const store = createStore(finalReducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;