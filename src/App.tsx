import React from 'react';
import './App.css';
import Grid from './components/Grid';
import ButtonsController from './components/controllers/ButtonsController';
import KeyboardController from './components/controllers/KeyboardController';

function App() {
  return (
    <div className="App">
      <h1>Spaceship Controller</h1>
      <Grid />
      <ButtonsController />
      <KeyboardController />
    </div>
  );
}

export default App;
