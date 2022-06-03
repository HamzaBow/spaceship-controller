import { configureStore } from "@reduxjs/toolkit"
import motionReducer, { MotionState } from '../motionSlice'

export interface RootState {
  motion: MotionState
}

export const store = configureStore({
  reducer: {
    motion: motionReducer,
  }
})
