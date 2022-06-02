import { createSlice } from "@reduxjs/toolkit";

enum Direction {
  North="North",
  South="South",
  East="East",
  West="West",
}
interface InitialState {
  gridHeight: number;
  gridWidth: number;
  x: number; // location of spaceship on x axis.
  y: number; // location of spaceship on y axis.
  direction: Direction; // direction that the spaceship is facing. 
}
const initialState: InitialState = {
  gridHeight: 8,
  gridWidth: 8,
  x: 0,
  y: 0,
  direction: Direction.North
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
      switch (state.direction) {
        case Direction.North:
          state.y = modulo(state.y + 1, state.gridHeight)
          break;
        case Direction.South:
          state.y = modulo(state.y - 1, state.gridHeight)
          break;
        case Direction.East:
          state.x = modulo(state.x + 1, state.gridWidth)
          break;
        case Direction.West:
          state.x = modulo(state.x - 1, state.gridWidth)
          break;
        default:
          throw new Error(`direction not excepted!`)
      }
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
    }
  }
})

export const { moveForward, moveBackward, rotateLeft, rotateRight } =
  motionSlice.actions;

export default motionSlice.reducer;


