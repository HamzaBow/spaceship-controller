import { createSlice } from "@reduxjs/toolkit";
import { obstacleExists } from "./utils";

export interface Obstacle {
  x: number;
  y: number;
}

export enum Direction {
  North="North",
  South="South",
  East="East",
  West="West",
}
export interface MotionState {
  gridHeight: number;
  gridWidth: number;
  x: number; // location of spaceship on x axis.
  y: number; // location of spaceship on y axis.
  direction: Direction; // direction that the spaceship is facing. 
  obstacles: Obstacle[];
}

const initialState: MotionState = {
  gridHeight: 8,
  gridWidth: 8,
  x: 0,
  y: 0,
  direction: Direction.North,
  obstacles: []
}

const modulo = (num: number, threshold: number): number => {
  // The returned expression bellow is a bit long because it
  // has to deal with cases where 'num' is a negative number
  return ((num % threshold) + threshold) % threshold;
}

export const motionSlice = createSlice({
  name: "motion",
  initialState,
  reducers: {
    moveForward: (state) => {
      let newLocation = { x: state.x, y: state.y };
      do {
        switch (state.direction) {
          case Direction.North:
            newLocation.y = modulo(newLocation.y + 1, state.gridHeight)
            break;
          case Direction.South:
            newLocation.y = modulo(newLocation.y - 1, state.gridHeight)
            break;
          case Direction.East:
            newLocation.x = modulo(newLocation.x + 1, state.gridWidth)
            break;
          case Direction.West:
            newLocation.x = modulo(newLocation.x - 1, state.gridWidth)
            break;
          default:
            throw new Error(`direction not excepted!`)
        }
      } while (obstacleExists(state.obstacles, {x: newLocation.x, y: newLocation.y}))
      state.x = newLocation.x;
      state.y = newLocation.y;
    },
    moveBackward: (state) => {
      switch (state.direction) {
        case Direction.North:
          state.y = modulo(state.y - 1, state.gridHeight)
          break;
        case Direction.South:
          state.y = modulo(state.y + 1, state.gridHeight)
          break;
        case Direction.East:
          state.x = modulo(state.x - 1, state.gridWidth)
          break;
        case Direction.West:
          state.x = modulo(state.x + 1, state.gridWidth)
          break;
        default:
          throw new Error(`direction not accepted!`)
      }
    },
    rotateLeft: (state) => {
      switch (state.direction) {
        case Direction.North:
          state.direction = Direction.West
          break;
        case Direction.West:
          state.direction = Direction.South
          break;
        case Direction.South:
          state.direction = Direction.East
          break;
        case Direction.East:
          state.direction = Direction.North
          break;
        default:
          throw new Error(`Rotation not accepted!`)
      }
    },
    rotateRight: (state) => {
      switch (state.direction) {
        case Direction.North:
          state.direction = Direction.East
          break;
        case Direction.East:
          state.direction = Direction.South
          break;
        case Direction.South:
          state.direction = Direction.West
          break;
        case Direction.West:
          state.direction = Direction.North
          break;
        default:
          throw new Error(`Rotation not accepted!`)
      }
    },
    putObstacles: (state) => {
      state.obstacles = [];
      //10% of total number of cell have obstacles
      let ObsNumber = Math.floor(state.gridHeight * state.gridWidth * 0.1)
      let x, y;
      for(let i = 0; i < ObsNumber; i++) {
        while(true) {
          x = Math.floor(Math.random() * state.gridWidth)
          y = Math.floor(Math.random() * state.gridHeight)
          if (obstacleExists(state.obstacles, {x, y}) || (state.x === x && state.y === y)) {
            // dont add obstacle if one is already here or spaceship is at this location
            continue;
          }
          // obstacleLocation not in list of obstacles
          // add obtacle to list
          state.obstacles.push({x, y})
          break;
        }
      }
    }
  }
})

export const { moveForward, moveBackward, rotateLeft, rotateRight, putObstacles } =
  motionSlice.actions;

export default motionSlice.reducer;


