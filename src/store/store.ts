import { configureStore, createSelector, createSlice } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { MovieResponse } from '../models/interfaces'
import { apiSlice } from '../services/moviesService'

interface MovieState { value: MovieResponse[] };

const initialState: MovieState = { value: [] }

const moviesSlice = createSlice({
  name: 'moviesReducer',
  initialState,
  reducers: {
    SetAllAction: (state, action) => ({
      ...state,
      value: action.payload
    })
  }
})

export const {
  SetAllAction
} = moviesSlice.actions

const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})

setupListeners(store.dispatch)

export const selectMoviesResult = apiSlice.endpoints.getMovies.select({ sortBy: 'release_date', filter: [], search: '' })

export const selectAllMovies = createSelector(
  selectMoviesResult,
  moviesResult => moviesResult ?? []
)

export default store
