import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import { Container, List, Image, Grid, GridColumn, Loader } from "semantic-ui-react";
import UserDetails from "./UserDetails";
import useData from './../hooks/useData';

function Users() {
    const { path } = useRouteMatch();
    const [users, isFetchingUsers] = useData(`users`, []);

    return (
        <Container fluid>
            <Grid columns={2}>
                <GridColumn>
                    {isFetchingUsers ?
                        <Loader active={isFetchingUsers} />
                        :
                        <List>
                            {users.map(user => (
                                <List.Item key={user.id}>
                                    <Image avatar src='https://react.semantic-ui.com/images/avatar/small/rachel.png' />
                                    <List.Content>
                                        <List.Header>
                                            <Link to={`${path}/${user.id}`}>{user.name}</Link>
                                        </List.Header>
                                        <List.Description>
                                            {user.email}, {user.phone}
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                            ))}
                        </List>
                    }
                </GridColumn>
                <GridColumn>
                    <Switch>
                        <Route path={`${path}/:userId`} exact>
                            <UserDetails />
                        </Route>
                    </Switch>
                </GridColumn>
            </Grid>
        </Container>
    );
}

export default Users;