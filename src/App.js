import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import ProductTable from './hw1/components/ProductTable';

function App() {
  return (
    <div id="hw1">
      <h1>Home Work 1</h1>
      <h3>The goods presented in the table are taken from here <a href="https://rozetka.com.ua/phones-mp3-gps/c80257/sort=rank/" target="_blank" rel="noopener noreferrer">https://rozetka.com.ua/phones-mp3-gps/c80257/sort=rank/</a></h3>
      <ProductTable />
    </div>
  );
}

export default App;
