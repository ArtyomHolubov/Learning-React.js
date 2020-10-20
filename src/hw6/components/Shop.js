import React from 'react';
import { useSelector } from 'react-redux';
import {
  Switch,
  Route,
  useRouteMatch,
  NavLink,
  Redirect
} from "react-router-dom";
import { Menu, Segment, Label } from 'semantic-ui-react';

import Products from "./Products";
import Cart from "./Cart";

function Shop() {
  let { path, url } = useRouteMatch();
  const { cartList } = useSelector(state => state.shop);

  return (
    <>
      <Menu tabular attached='top'>
        <Menu.Item
          name="Products"
          to={`${url}/products`}
          as={NavLink} activeClassName="active"
        />
        <Menu.Item
          name="Cart"
          to={`${url}/сart`}
          as={NavLink} activeClassName="active">
            Cart
          {cartList.length > 0 && <Label color='red' circular>
            {cartList.length}
          </Label>}
        </Menu.Item>
      </Menu>

      <Segment attached='bottom'>
        <Switch>
          <Route path={`${path}/products`} exact>
            <Products />
          </Route>
          <Route path={`${path}/сart`} exact>
            <Cart />
          </Route>
          <Route path={`${path}`} exact>
            <Redirect to={`${path}/products`} />
          </Route>
          <Route path='*'>
            404
          </Route>
        </Switch>
      </Segment>
    </>
  );
}

export default Shop;