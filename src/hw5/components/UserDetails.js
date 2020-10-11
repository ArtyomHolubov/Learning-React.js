import React, { useEffect, useState } from 'react';
import { useParams, Redirect, Link } from 'react-router-dom';
import { Card, Image, Loader, Dimmer } from "semantic-ui-react";
import useData from './../hooks/useData';

function UserDetails() {
    const { userId } = useParams();
    const [userDetails, isFetchingUserData] = useData(`users/${userId}`, null);
    const [userAlbums, isFetchingUserAlbums] = useData(`users/${userId}/albums`, []);

    if (userDetails === null) return <Loader size='small' active />;

    if (!userDetails.id) {
        return <Redirect to='/' />
    }

    return (
        <>
            <Card>
                <Dimmer active={isFetchingUserData}>
                    <Loader active={isFetchingUserData} />
                </Dimmer>
                <Image src='https://react.semantic-ui.com/images/avatar/large/elliot.jpg' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{userDetails.name}</Card.Header>
                    <Card.Meta>
                        <span className='date'>Email: {userDetails.email}</span>
                    </Card.Meta>
                    <Card.Description>
                        {userDetails.phone}
                    </Card.Description>
                </Card.Content>
            </Card>
            <Card>
                <Dimmer active={isFetchingUserAlbums}>
                    <Loader active={isFetchingUserAlbums} />
                </Dimmer>
                <Card.Content>
                    <Card.Header>Albums:</Card.Header>
                    {userAlbums.map((a, i) => {
                        return (
                            <Card.Description key={a.id}>
                                <Link to={`/home-work/5/album/${a.id}`}>
                                    <span>{i + 1}. </span>
                                    {a.title}</Link>
                            </Card.Description>
                        )
                    })}

                </Card.Content>
            </Card>
        </>
    );
}

export default UserDetails;