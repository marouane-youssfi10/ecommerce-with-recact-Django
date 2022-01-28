import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer, productDetailsReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers';


const reducer = combineReducers({
    productList: productListReducer, 
    productDetails: productDetailsReducer,
    cart: cartReducer
})

let stock = localStorage.getItem('cartItems');

if (stock === 'undefined'){
    // console.log('if ->' , stock);
    stock = [];

}else if(stock === null){
    // console.log('else if ->' , stock);
    stock = [];

}else{
    // console.log('else ->' , stock);
    stock = JSON.parse(localStorage.getItem('cartItems'));

}
// console.log('final ->', stock);
const cartItemsFromStorage = stock;

const initialState = {
    cart: {cartItems: cartItemsFromStorage}
}

const middleware = [thunk]
const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store;