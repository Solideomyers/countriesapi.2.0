import { configureStore } from "@reduxjs/toolkit";
import { countriesApi } from "../features/api/countriesApi";
import { setupListeners } from '@reduxjs/toolkit/query'
export const store = configureStore({
    reducer: {
        [countriesApi.reducerPath] : countriesApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(countriesApi.middleware) 
})

setupListeners(store.dispatch)