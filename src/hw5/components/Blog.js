import React, { useState, createRef } from 'react';
import {
  HashRouter as Router,
  HashRouter as Hash,
  Switch,
  Route,
  useRouteMatch,
  Link, NavLink, useHistory, Redirect
} from "react-router-dom";
import { Grid, Sticky, Rail, Segment, Ref } from 'semantic-ui-react';

import Posts from "./Posts";
import AuthorInfo from './AuthorInfo';
import Users from './Users';
import Comments from './Comments';

function Blog() {
  let { path, url } = useRouteMatch();
  const [selectedAuthorInfo, setSelectedAuthorInfo] = useState(null);
  const contextRef = createRef();
  const history = useHistory();

  const handlePostSelection = (post) => {
    setSelectedAuthorInfo(post.userId);
    console.log(`${path}/posts/${post.userId}`);
    history.push(`${path}/posts/${post.userId}`);
  }

  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink exact activeClassName='active' to={`${url}/posts`}>Posts</NavLink>
          </li>
          <li>
            <NavLink exact activeClassName='active' to={`${url}/about`}>About</NavLink>
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
        <Route path={`${path}/about`} exact>
          Hello About
          </Route>
        <Route path={`${path}/users`}>
          <Users></Users>
        </Route>
        <Route path={`${path}/people/:userId`} exact>
          UserDetails
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