import { ADD_TO_CART } from "../actions/cart";
import { REMOVE_FROM_CART } from "../actions/cart";

const key = 'cart';
const item = localStorage.getItem(key);
const cartFromStorage = item ? JSON.parse(item) : []

export default (state = cartFromStorage, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const resultState = [...state, {
                id: action.payload.id
            }];
            localStorage.setItem(key, JSON.stringify(resultState))
            return resultState;
        };
        case REMOVE_FROM_CART: {
            var index = -1;
            state.map((item, i) => {
                if (action.payload.id === item.id) {
                    index = i;
                }
            });
            if (index > -1) {
                state.splice(index, 1);
            }

            const resultState = [...state];
            localStorage.setItem(key, JSON.stringify(resultState))
            return resultState;
        };

        default: return state;
    }
};