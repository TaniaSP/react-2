import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { MovieResponse } from '../models/interfaces'

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  tagTypes: ['Movies'],
  endpoints: (build) => ({
    getMovies: build.query<MovieResponse[], { sortBy: string, filter: string[], search: string }>({
      query: ({ sortBy, filter, search }) => {
        const filterQuery = (filter.length > 0) ? `&filter=${filter.join(',')}` : ''
        const searchQuery = search !== '' ? `&searchBy=title&search=${search}` : ''
        return { url: `movies?limit=90&sortOrder=asc&sortBy=${sortBy}${filterQuery}${searchQuery}` }
      },
      transformResponse: (response: any) => {
        return response.data
      }
    })
  })
})
export const {
  useGetMoviesQuery
} = apiSlice
