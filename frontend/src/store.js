import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer, productDetailsReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers';
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer, userListReducer, userDeleteReducer } from './reducers/userReducers';
import { orderCreateReducer, orderDetailsReducer, orderPayReducer, orderListMyReducer } from './reducers/orderReducers';


const reducer = combineReducers({
    productList: productListReducer, 
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,

    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer,
})

let stock = localStorage.getItem('cartItems');
let stock1 = localStorage.getItem('userInfo');
let stock2 = localStorage.getItem('shippingAddress');

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

// for shippingAddress
if (stock2 === 'undefined'){
    stock2 = {};
}else if(stock2 === null){
    stock2 = {};
}else{
    stock2 = JSON.parse(localStorage.getItem('shippingAddress'));
}


const cartItemsFromStorage = stock;
const userInfoFromStorage = stock1;
const shippingAddressFromStorage = stock2;

const initialState = {
    cart: {
         cartItems: cartItemsFromStorage,
         shippingAddress: shippingAddressFromStorage
    },
    userLogin: {userInfo: userInfoFromStorage}
}

const middleware = [thunk]
const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store;