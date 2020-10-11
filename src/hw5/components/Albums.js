import React, { useState } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import { Container, List, Grid, GridColumn, Loader, Icon } from "semantic-ui-react";
import AlbumDetails from "./AlbumDetails";
import useData from './../hooks/useData';

function Albums() {
    const { path } = useRouteMatch();
    const [albums, isFetchingAlbums] = useData(`albums`, []);

    return (
        <Container fluid>
            <Grid columns={2}>
                <GridColumn>
                    {isFetchingAlbums ?
                        <Loader active={isFetchingAlbums} />
                        :
                        <List>
                            {albums.map(album => (
                                <List.Item key={album.id}>
                                    <Icon name='file' />
                                    <List.Content>
                                        <List.Header>
                                            <Link to={`${path}/${album.id}`}>album - {album.id}/{album.title}</Link>
                                        </List.Header>
                                        <List.Description>
                                            <Link to={`/home-work/5/user/${album.userId}`}>user - {album.userId}</Link>
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                            ))}
                        </List>
                    }
                </GridColumn>
                <GridColumn>
                    <Switch>
                        <Route path={`${path}/:albumId`} exact>
                            <AlbumDetails />
                        </Route>
                    </Switch>
                </GridColumn>
            </Grid>
        </Container>
    );
}

export default Albums;