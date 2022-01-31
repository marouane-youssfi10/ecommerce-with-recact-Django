import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer, productDetailsReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers';
import { userLoginReducer, userRegisterReducer, userDetailsReducer } from './reducers/userReducers';


const reducer = combineReducers({
    productList: productListReducer, 
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
})

let stock = localStorage.getItem('cartItems');
let stock1 = localStorage.getItem('userInfo');

// for cartItems
if (stock === 'undefined'){
    stock = [];
}else if(stock === null){
    stock = [];
}else{
    stock = JSON.parse(localStorage.getItem('cartItems'));
}

// for userInfo
if (stock1 === 'undefined'){
    stock1 = null;
}else if(stock1 === null){
    stock1 = null;
}else{
    stock1 = JSON.parse(localStorage.getItem('userInfo'));
}


const cartItemsFromStorage = stock;
const userInfoFromStorage = stock1;

const initialState = {
    cart: {cartItems: cartItemsFromStorage},
    userLogin: {userInfo: userInfoFromStorage}
}

const middleware = [thunk]
const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store;