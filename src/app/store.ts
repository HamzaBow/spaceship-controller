import { configureStore } from "@reduxjs/toolkit"
import motionReducer from '../motionSlice'

export const store = configureStore({
  reducer: {
    motion: motionReducer,
  }
})
