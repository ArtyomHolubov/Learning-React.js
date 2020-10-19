import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Container, List } from "semantic-ui-react";
import Product from "./Product";

const checkAddedProducts = (products, cartList) => {
    const resultArray = [];

    products.map(p => {
        var clonedProduct = Object.assign({}, p);
        cartList.map((cp) => {
            if (clonedProduct.id == cp.id) {
                clonedProduct.isAdded = true;
            }
        });

        resultArray.push(clonedProduct);
    });

    return resultArray;
}

function Products() {
    const { cartList } = useSelector(state => state.shop);
    const { products } = useSelector(state => state.shop);

    var listOfProducts = useMemo(() => {
        return checkAddedProducts(products, cartList)
    }, [products, cartList]);

    return (
        <Container fluid>
            <List>
                {listOfProducts.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </List>
        </Container>
    );
}

export default Products;