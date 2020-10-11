import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch, NavLink, Redirect
} from "react-router-dom";

import Posts from "./Posts";
import Users from './Users';
import Albums from './Albums';
import UserDetails from './UserDetails';
import AlbumDetails from './AlbumDetails';
import AlbumPhotos from './AlbumPhotos';

function Blog() {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink exact activeClassName='active' to={`${url}/posts`}>Posts</NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' to={`${url}/albums`}>Albums</NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' to={`${url}/users`}>Users</NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
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
    </div>
  );
}

export default Blog;