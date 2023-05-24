import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./sliceCountries";

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});

