import React, { useState, useEffect, createRef } from 'react';
import { Feed, Loader, Container, Grid, Ref, Segment } from 'semantic-ui-react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import Comments from "./Comments";

function Posts() {

  const [posts, setPosts] = useState([]);
  const [isPostFetching, setIsPostFetching] = useState(false);
  const contextRef = createRef();

  const { path } = useRouteMatch();

  useEffect(() => {
    setIsPostFetching(true);
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => response.json())
      .then(posts => {
        setPosts(posts);
        setIsPostFetching(false);
      })
  }, []);

  return (
    <Container fluid>
      <Grid columns={2}>
        <Grid.Column>
          <Ref innerRef={contextRef}>
            <div>
                <Loader size='small' active={isPostFetching} />
                <Feed>
                  {posts.map(post => (
                    <Feed.Event key={post.id}>
                      <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' as={Link} to={`/home-work/5/user/${post.userId}`} />
                      <Feed.Content>
                        <Feed.Summary>
                          <Link to={`${path}/${post.id}`}>{post.title}</Link>
                        </Feed.Summary>
                        <Feed.Extra text>
                          {post.body}
                        </Feed.Extra>
                      </Feed.Content>
                    </Feed.Event>
                  ))}
                </Feed>
            </div>
          </Ref>
        </Grid.Column>
        <Grid.Column>
          <Switch>
            <Route path={`${path}/:postId`} exact>
              <Comments />
            </Route>
          </Switch>
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default Posts;