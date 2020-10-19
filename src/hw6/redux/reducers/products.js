import { INIT } from "../actions/products";
import { data } from "../../../data/products.json";

export default (state = data, action) => {
    switch (action.type) {
        case INIT: return action.payload.products;
        default: return state;
    }
};