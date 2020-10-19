import React from 'react';
import { Provider } from 'react-redux';
import createStore from '../redux/createStore'
import Shop from "./Shop";
import HomeWorkDescription from '../../hw1/components/HomeWorkDescription';
import Descriptions from '../../data/hw.json';

const store = createStore();

function HomeWork6() {
  return (
    <div id="hw5">
      <h1>Home Work 2</h1>
      <div>
        <HomeWorkDescription data={Descriptions.hw6.description}></HomeWorkDescription>
      </div>
      <br></br>
      <Provider store={store}>
        <Shop />
      </Provider>
    </div>
  );
}

export default HomeWork6;