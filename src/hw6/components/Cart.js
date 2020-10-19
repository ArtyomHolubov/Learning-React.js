import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Container, List } from "semantic-ui-react";
import CartProduct from "./CartProduct";

const filterProducts = (products, cartList) => {
    return products.filter(p => {
        return cartList.find(cp => cp.id === p.id);
    });
}

function Products() {
    const { cartList } = useSelector(state => state.shop);
    const { products } = useSelector(state => state.shop);

    var listOfProducts = useMemo(() => {
        return filterProducts(products, cartList)
    }, [products, cartList]);

    return (
        <Container fluid>
            <List>
                {listOfProducts.map(product => (
                    <CartProduct key={product.id} product={product} />
                ))}
            </List>
        </Container>
    );
}

export default Products;