import React from 'react';
import './App.css';
import Grid from './components/Grid';
import ButtonsController from './components/controllers/ButtonsController';
import KeyboardController from './components/controllers/KeyboardController';
import ObstacleController from './components/controllers/ObstacleController';
import ObstacleReport from './components/ObstacleReport';

function App() {
  return (
    <div className="App">
      <div>
        <KeyboardController />
        <ButtonsController />
      </div>
      <div>
        <h1>Spaceship Controller</h1>
        <Grid />
      </div>
      <div>
        <ObstacleController />
        <ObstacleReport />
      </div>
    </div>
  );
}

export default App;
