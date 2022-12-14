import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { MovieResponse } from '../models/interfaces'
import { HYDRATE } from 'next-redux-wrapper'

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  extractRehydrationInfo (action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  tagTypes: ['Movies'],
  endpoints: (build) => ({
    getMovies: build.query<MovieResponse[], { sortBy: string, filter: string, search: string }>({
      query: ({ sortBy, filter, search }) => {
        const filterQuery = filter !== '' ? `&filter=${filter}` : ''
        const searchQuery = search !== '' ? `&searchBy=title&search=${search}` : ''
        return { url: `movies?limit=120&sortOrder=desc&sortBy=${sortBy}${filterQuery}${searchQuery}` }
      },
      transformResponse: (response: any) => response.data,
      providesTags: ['Movies']
    }),
    addMovie: build.mutation<MovieResponse, Partial<MovieResponse>>({
      query: (movie) => ({
        url: 'movies',
        method: 'POST',
        body: movie
      }),
      invalidatesTags: ['Movies']
    }),
    editMovie: build.mutation<MovieResponse, Partial<MovieResponse>>({
      query: (movie) => ({
        url: 'movies',
        method: 'PUT',
        body: movie
      }),
      invalidatesTags: ['Movies']
    }),
    deleteMovie: build.mutation<undefined, number>({
      query: (movieId) => ({
        url: `movies/${movieId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Movies']
    })
  })
})
export const {
  useGetMoviesQuery,
  useAddMovieMutation,
  useEditMovieMutation,
  useDeleteMovieMutation
} = apiSlice
