import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from "../redux/actions/cart";
import { List, Image, Button } from "semantic-ui-react";

function CartProduct({ product }) {
    const dispatch = useDispatch();

    const remove = (id) => {
        dispatch(removeFromCart(id));
    };

    return (
        <List.Item>
            <Button onClick={() => remove(product.id)} color="red" >-</Button>
            <Image avatar src={product.preview} />
            <List.Content>
                <List.Header>
                    {product.title}
                </List.Header>
                <List.Description>
                    {product.price_pcs * product.count}$,  {product.price * product.count}₴,  count: {product.count}
                            </List.Description>
            </List.Content>
        </List.Item>
    );
}

export default CartProduct;