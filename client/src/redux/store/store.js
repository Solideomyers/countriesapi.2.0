import { configureStore } from '@reduxjs/toolkit'
import countriesReducer from '../slices/sliceCountries'

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
})
