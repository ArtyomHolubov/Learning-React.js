import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './App.css';
// import HomeWork1 from './hw1/components/HomeWork1';
// import HomeWork2 from './hw2/components/HomeWork2';

const HomeWork1 = lazy(() => import('./hw1/components/HomeWork1'));
const HomeWork2 = lazy(() => import('./hw2/components/HomeWork2'));

function App() {
  return (
    // <HomeWork1/>
    <Router>
      <Menu>
        <Menu.Item
          name='Home Work 1'
          href="#/HomeWork/1"
        />
        <Menu.Item
          name='Home Work 2'
          href="#/HomeWork/2"
        />
      </Menu>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/HomeWork/1">
            <HomeWork1 />
          </Route>
          <Route path="/HomeWork/2">
            <HomeWork2 />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
