import React, { useState } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import { Container, List, Image, Grid, GridColumn, Loader } from "semantic-ui-react";
import { data }  from '../../data/products.json';

function Products() {
    const { path } = useRouteMatch();
    const [products, setProducts] = useState(data);

    return (
        <Container fluid>
            <List>
                {products.map(product => (
                    <List.Item key={product.id}>
                        <Image avatar src={product.images.preview} />
                        <List.Content>
                            <List.Header>
                                {product.title}
                            </List.Header>
                            <List.Description>
                            {product.price}$, {product.price_pcs}₴
                            </List.Description>
                        </List.Content>
                    </List.Item>
                ))}
            </List>
        </Container>
    );
}

export default Products;