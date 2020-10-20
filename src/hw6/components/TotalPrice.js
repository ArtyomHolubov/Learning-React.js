import React from 'react';
import { List } from "semantic-ui-react";

function TotalPrice({ products }) {
    const totalPrice = products.reduce((sum, product) => {
        return sum + (product.price * product.count)
    }, 0);

    const totalPrice_pcs = products.reduce((sum, product) => {
        return sum + (product.price_pcs * product.count)
    }, 0);

    return (
        <List.Item>
            <List.Content floated='right'>
                <List.Description>
                    <b>Total: </b>{totalPrice_pcs}$,  {totalPrice}₴
                            </List.Description>
            </List.Content>
        </List.Item>
    );
}

export default TotalPrice;