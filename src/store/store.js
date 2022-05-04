import { configureStore } from '@reduxjs/toolkit'
import locationReducer from './reducer'

export const store = configureStore({
  reducer: {
    location: locationReducer,
  },
})