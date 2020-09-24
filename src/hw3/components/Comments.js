import React, { Component } from 'react';
import { Feed, Button } from 'semantic-ui-react';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      isFetching: false,
      isCommentsLoaded: false,
      isOpenComments: false
    }
  }

  fetchUserData() {
    const { postId } = this.props;
    const { isCommentsLoaded } = this.state;
    if (!postId || isCommentsLoaded) {
      this.setState({ isOpenComments: true });
      return;
    }
    this.setState({ isFetching: true });
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(response => response.json())
      .then(comments => this.setState({ comments, isFetching: false, isCommentsLoaded: true, isOpenComments: true }))
      .catch(err => this.setState({ isFetching: false, }))
  }

  loadComments = () => {
    this.fetchUserData();
  }

  closeComments = () => {
    this.setState({ isOpenComments: false });
  }


  render() {
    const { comments, isFetching, isOpenComments } = this.state;
    return (
      <>
        <br />
        {isOpenComments ?
          <Button onClick={this.closeComments}>Close comments</Button> :
          <Button loading={isFetching} onClick={this.loadComments}>Open comments</Button>}
        <Feed>
          {isOpenComments && comments.map(c => {
            return (
              <Feed.Event key={c.id}>
                <Feed.Label icon='pencil' />
                <Feed.Content>
                  <Feed.Date content={c.email} />
                  <Feed.Summary content={c.name} />
                  <Feed.Extra text content={c.body} />
                </Feed.Content>
              </Feed.Event>
            )
          })}
        </Feed>
      </>
    );
  }
}

export default Comments;