import React, { useState } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import { Container, List, Image, Grid, GridColumn, Loader } from "semantic-ui-react";

function Cart() {
    const { path } = useRouteMatch();
    //const [products, setProducts] = useState(productList);

    return (
        <Container fluid>
            Cart
        </Container>
    );
}

export default Cart;