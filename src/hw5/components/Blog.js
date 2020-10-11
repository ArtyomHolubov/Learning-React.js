import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  NavLink, 
  Redirect,
  withRouter
} from "react-router-dom";
import { Menu, Segment } from 'semantic-ui-react';
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Posts from "./Posts";
import Users from './Users';
import Albums from './Albums';
import UserDetails from './UserDetails';
import AlbumDetails from './AlbumDetails';
import AlbumPhotos from './AlbumPhotos';

var path = '/home-work/5';
const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition 
      key={location.pathname.includes('/posts/') ? undefined : location.key} 
      classNames="fade" 
      timeout={250}
    >
      <Switch location={location}>
          <Route path={`${path}/posts`}>
            <Posts />
          </Route>
          <Route path={`${path}/albums`}>
            <Albums />
          </Route>
          <Route path={`${path}/users`}>
            <Users></Users>
          </Route>
          <Route path={`${path}/user/:userId`} exact>
            <UserDetails />
          </Route>
          <Route path={`${path}/album/:albumId`} exact>
            <AlbumDetails />
          </Route>
          <Route path={`${path}/album-photos/:albumId`} exact>
            <AlbumPhotos />
          </Route>
          <Route path={`${path}`} exact>
            <Redirect to={`${path}/posts`} />
          </Route>
          <Route path='*'>
            404
          </Route>
        </Switch>
    </CSSTransition>
  </TransitionGroup>
));

function Blog() {
  let { path, url } = useRouteMatch();

  return (
    <>
      <Menu tabular attached='top'>
        <Menu.Item
          name="Posts"
          to={`${url}/posts`}
          as={NavLink} activeClassName="active"
        />
        <Menu.Item
          name="Albums"
          to={`${url}/albums`}
          as={NavLink} activeClassName="active"
        />
        <Menu.Item
          name="Users"
          to={`${url}/users`}
          as={NavLink} activeClassName="active"
        />
      </Menu>

      <Segment attached='bottom'>
      <AnimatedSwitch/>
        {/* <Switch>
          <Route path={`${path}/posts`}>
            <Posts />
          </Route>
          <Route path={`${path}/albums`}>
            <Albums />
          </Route>
          <Route path={`${path}/users`}>
            <Users></Users>
          </Route>
          <Route path={`${path}/user/:userId`} exact>
            <UserDetails />
          </Route>
          <Route path={`${path}/album/:albumId`} exact>
            <AlbumDetails />
          </Route>
          <Route path={`${path}/album-photos/:albumId`} exact>
            <AlbumPhotos />
          </Route>
          <Route path={`${path}`} exact>
            <Redirect to={`${path}/posts`} />
          </Route>
          <Route path='*'>
            404
          </Route>
        </Switch> */}
      </Segment>
    </>
  );
}

export default Blog;