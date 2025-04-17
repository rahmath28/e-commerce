// first i have to configure the store.js file and then have to provide to app.
import { configureStore } from '@reduxjs/toolkit'
import apiSlice from '../slices/apiSlice'



export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  // next middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})  // next i have to provide it to app.

