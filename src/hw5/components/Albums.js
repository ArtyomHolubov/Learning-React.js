import React, { useState, useEffect } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import { Container, List, Grid, GridColumn, Loader, Icon } from "semantic-ui-react";
import AlbumDetails from "./AlbumDetails";

function Albums() {

    const [albums, setAlbums] = useState([]);
    const [isFetchingAlbums, setIsFetchingAlbums] = useState(false);

    useEffect(() => {
        setIsFetchingAlbums(true);
        fetch(`https://jsonplaceholder.typicode.com/albums`)
            .then(response => response.json())
            .then(albums => {
                setAlbums(albums);
                setIsFetchingAlbums(false);
            })
    }, []);

    const { path } = useRouteMatch();

    return (
        <Container>
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