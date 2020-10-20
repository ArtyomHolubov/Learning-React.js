import { ADD_TO_CART } from "../actions/cart";
import { REMOVE_FROM_CART } from "../actions/cart";


export default (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART: return [...state, {
            id: action.payload.id
        }];
        case REMOVE_FROM_CART: {
            var index = -1;
            state.map((item, i) => {
                if(action.payload.id === item.id) {
                    index = i;
                }
            });
            if (index > -1) {
                state.splice(index, 1);
                return [...state];
            }
        };

        default: return state;
    }
};