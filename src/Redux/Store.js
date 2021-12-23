import { configureStore } from '@reduxjs/toolkit'
import serviceReducer from './Reducer/ServicesSlice'

export const store = configureStore({
  reducer: {
    services:serviceReducer,
  },
})