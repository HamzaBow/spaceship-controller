import React from 'react';
import './App.css';
import Grid from './components/Grid';
import { useDispatch } from "react-redux";
import {
  moveForward,
  moveBackward,
  rotateLeft,
  rotateRight,
} from "./motionSlice";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Spaceship Controller</h1>
      <Grid />
      <button onClick={() => dispatch(moveForward())}>Forward</button>
      <button onClick={() => dispatch(moveBackward())}>Backward</button>
      <button onClick={() => dispatch(rotateLeft())}>Rotate left</button>
      <button onClick={() => dispatch(rotateRight())}>Rotate right</button>
    </div>
  );
}

export default App;
