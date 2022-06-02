import React from 'react';
import './App.css';
import Grid from './components/Grid';

function App() {
  const width: number = 6;
  const height: number = 4;
  return (
    <div className="App">
      <h1>Spaceship Controller</h1>
      <Grid width={width} height={height} />
    </div>
  );
}

export default App;
