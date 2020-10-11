import React, { Component } from 'react';
import { Card, Dimmer, Loader, Image } from 'semantic-ui-react';

class AuthorInfo extends Component {

  state = {
    userData: {},
    userAlbums: [],
    isFetchingUserData: false,
    isFetchingUserAlbums: false
  };

  componentDidMount() {
    this.fetchUserData();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.authorId !== this.props.authorId && this.props.authorId !== null) {
      this.fetchUserData()
    }
  }

  fetchUserData() {
    const { authorId } = this.props;
    if (!authorId) return;
    this.setState({ isFetchingUserData: true, isFetchingUserAlbums: true });
    fetch(`https://jsonplaceholder.typicode.com/users/${authorId}`)
      .then(response => response.json())
      .then(userData => this.setState({ userData, isFetchingUserData: false }))
    fetch(`https://jsonplaceholder.typicode.com/users/${authorId}/albums`)
      .then(response => response.json())
      .then(userAlbums => this.setState({ userAlbums: userAlbums, isFetchingUserData: false, isFetchingUserAlbums: false }))
      .catch(err => this.setState({ isFetchingUserData: false, isFetchingUserAlbums: false }))
  }

  render() {
    const { userData, userAlbums, isFetchingUserData, isFetchingUserAlbums } = this.state;
    const { authorId } = this.props;
    if (authorId === null) return null;
    return (
      <>
        <Card>
          <Dimmer active={isFetchingUserData}>
            <Loader active={isFetchingUserData} />
          </Dimmer>
          <Image src='https://react.semantic-ui.com/images/avatar/large/elliot.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header>{userData.name}</Card.Header>
            <Card.Meta>
              <span className='date'>Email: {userData.email}</span>
            </Card.Meta>
            <Card.Description>
              {userData.phone}
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
                  <span>{i + 1}. </span>
                  {a.title}
                </Card.Description>
              )
            })}

          </Card.Content>
        </Card>
      </>
    );
  }
}

export default AuthorInfo;