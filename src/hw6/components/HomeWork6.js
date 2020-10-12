import React from 'react';
import Shop from "./Shop";
import HomeWorkDescription from '../../hw1/components/HomeWorkDescription';
import Descriptions from '../../data/hw.json';

function HomeWork6() {
  return (
    <div id="hw5">
      <h1>Home Work 2</h1>
      <div>
        <HomeWorkDescription data={Descriptions.hw6.description}></HomeWorkDescription>
      </div>
      <br></br>
      <Shop/>
    </div>
  );
}

export default HomeWork6;