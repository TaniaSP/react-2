import { configureStore, Store } from '@reduxjs/toolkit'
import { apiSlice } from '../services/moviesService'
import { createWrapper } from 'next-redux-wrapper'

export const makeStore: any = () => configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})

export type AppStore = ReturnType<typeof makeStore>

export const wrapper = createWrapper<Store<AppStore>>(makeStore, { debug: true })
