import React from 'react';
import './App.css';
import Header from './features/Header';
import Table from './features/Table';

function randomizer() {
  return Math.round(Math.random() * (999 - 0 + 1) + 0);
}

function createMatrix(m, n) {
  let array = [],
    subarray = [];
  for (let i = 0; i < n; i++) {
    subarray.length = 0;
    for (let j = 0; j < m; j++) {
      subarray.push(randomizer());
    }
    array[i] = subarray.slice(0);
  }
  return array;
}


function App() {
  let array = createMatrix(5, 5);

  return (
    <div className="App">
      <Header />
      <Table value={array} />
    </div>
  );
}

export default App;
