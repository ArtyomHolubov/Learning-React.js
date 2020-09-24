import React from 'react';
import Blog from "./Blog";
import HomeWorkDescription from '../../hw1/components/HomeWorkDescription';
import Descriptions from '../../data/hw.json';

function HomeWork2() {
  return (
    <div id="hw3">
      <h1>Home Work 2</h1>
      <div>
        <HomeWorkDescription data={Descriptions.hw3.description}></HomeWorkDescription>
      </div>
      <br></br>
      <Blog/>
    </div>
  );
}

export default HomeWork2;