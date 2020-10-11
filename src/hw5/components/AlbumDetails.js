import React from 'react';
import { useParams, Redirect, Link } from 'react-router-dom';
import { Card, Image, Loader, Dimmer } from "semantic-ui-react";
import useData from './../hooks/useData';

function AlbumDetails() {
    const { albumId } = useParams();
    const [albums, isFetchingAlbums] = useData(`albums/${albumId}`, null);
    const [photos, isFetchingAlbumsPhotos] = useData(`albums/${albumId}/photos`, []);
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