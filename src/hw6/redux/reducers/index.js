import cartReducer from './cart';
import productsReducer from './products';
import { combineReducers } from 'redux';

export default combineReducers({
    shop: combineReducers({
        cartList: cartReducer,
        products: productsReducer
    }),
    //counter: counterReducer
})