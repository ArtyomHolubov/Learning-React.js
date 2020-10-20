import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Container, List } from "semantic-ui-react";
import CartProduct from "./CartProduct";
import TotalPrice from "./TotalPrice";

const filterProducts = (products, cartList) => {
    var resultArray = [];
    cartList.map(cp => {
        var product = products.find(p => cp.id === p.id);
        var existProduct = resultArray.find(p => product.id === p.id);
        if (existProduct) {
            existProduct.count++;
        } else {
            resultArray.push({
                id: product.id,
                preview: product.images.preview,
                title: product.title,
                price: parseInt(product.price),
                price_pcs: parseInt(product.price_pcs),
                count: 1
            });
        }
    });

    return resultArray;
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
                <TotalPrice products={listOfProducts}/>
            </List>
        </Container>
    );
}

export default Products;