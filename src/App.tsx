import React from 'react';
import './App.css';
import Grid from './components/Grid';
import ButtonsController from './components/controllers/ButtonsController';

function App() {
  return (
    <div className="App">
      <h1>Spaceship Controller</h1>
      <Grid />
      <ButtonsController />
    </div>
  );
}

export default App;
