import React, { useEffect, useState } from 'react';
import { useParams, Redirect, Link } from 'react-router-dom';
import { Card, Image, Loader, Dimmer } from "semantic-ui-react";

function AlbumDetails() {
    const { albumId } = useParams();
    const [albums, setAlbums] = useState(null);
    const [photos, setPhotos] = useState([]);
    const [isFetchingAlbums, setIsFetchingAlbums] = useState(false);
    const [isFetchingAlbumsPhotos, setIsFetchingAlbumsPhotos] = useState(false);

    useEffect(() => {
        setIsFetchingAlbums(true);
        setIsFetchingAlbumsPhotos(true);
        fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
            .then(response => response.json())
            .then(albums => {
                setAlbums(albums);
                setIsFetchingAlbums(false);
            })
        fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
            .then(response => response.json())
            .then(photos => {
                setPhotos(photos);
                setIsFetchingAlbumsPhotos(false);
            })
            .catch(err => {
                setIsFetchingAlbums(false);
                setIsFetchingAlbumsPhotos(false);
            })
    }, [albumId]);

    if (albums === null) return <Loader size='small' active />;

    if (!albums.id) {
        return <Redirect to='/' />
    }


    return (
        <>
            <Card>
                <Dimmer active={isFetchingAlbums}>
                    <Loader active={isFetchingAlbumsPhotos} />
                </Dimmer>

                <Card.Content>
                    <Card.Header><Image avatar src='https://react.semantic-ui.com/images/avatar/small/rachel.png' /> User - {albums.userId}</Card.Header>
                    <br />
                    <Card.Meta>
                        <span className='date'>Title: {albums.title}</span>
                    </Card.Meta>
                    <Card.Description>
                        <Link to={`/home-work/5/album-photos/${albums.id}`}>Show in Glider</Link>
                    </Card.Description>
                </Card.Content>
            </Card>
            <Card>
                <Dimmer active={isFetchingAlbumsPhotos}>
                    <Loader active={isFetchingAlbumsPhotos} />
                </Dimmer>
                <Card.Content>
                    <Card.Header>Photos: {photos.length}</Card.Header>
                    {photos.map((p, i) => {
                        return (
                            <Card.Description key={p.id}>
                                <Image avatar src={p.thumbnailUrl} />
                                {p.title}
                            </Card.Description>
                        )
                    })}

                </Card.Content>
            </Card>
        </>
    );
}

export default AlbumDetails;