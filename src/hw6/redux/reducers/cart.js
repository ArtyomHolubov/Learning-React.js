import { ADD_TO_CART } from "../actions/cart";
import { REMOVE_FROM_CART } from "../actions/cart";


export default (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART: return [...state, {
            id: action.payload.id
        }];
        case REMOVE_FROM_CART: return state.filter((item) => {
            return item.id !== action.payload.id
        });

        default: return state;
    }
};