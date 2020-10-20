import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from "../redux/actions/cart";
import { List, Image, Button } from "semantic-ui-react";

function Product({ product }) {
    const dispatch = useDispatch();
    const onAddToCart = (id) => {
        dispatch(addToCart(id));
    };

    return (
        <List.Item>
            <Button onClick={() => onAddToCart(product.id)} primary={!product.isAdded}>+</Button>
            <Image avatar src={product.images.preview} />
            <List.Content>
                <List.Header>
                    {product.title}
                </List.Header>
                <List.Description>
                    {product.price_pcs}$, {product.price}₴
                </List.Description>
            </List.Content>
        </List.Item >
    )
}

export default Product;