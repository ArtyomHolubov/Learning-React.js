import React, { useEffect, useState } from 'react';
import { useParams, Redirect, Link } from 'react-router-dom';
import { Card, Image, Loader, Dimmer } from "semantic-ui-react";

function UserDetails() {
    const { userId } = useParams();
    const [userDetails, setUserDetails] = useState(null);
    const [userAlbums, setUserAlbums] = useState([]);
    const [isFetchingUserData, setIsFetchingUserData] = useState(false);
    const [isFetchingUserAlbums, setIsFetchingUserAlbums] = useState(false);

    useEffect(() => {
        setIsFetchingUserData(true);
        setIsFetchingUserAlbums(true);
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json())
            .then(user => {
                setUserDetails(user);
                setIsFetchingUserData(false);
            })
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
            .then(response => response.json())
            .then(userAlbums => {
                setUserAlbums(userAlbums);
                setIsFetchingUserAlbums(false);
            })
            .catch(err => {
                setIsFetchingUserData(false);
                setIsFetchingUserAlbums(false);
            })
    }, [userId]);

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
                                {/* <span>{i + 1}. </span>
                                {a.title} */}
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