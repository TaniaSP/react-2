import store from '../store/store'

export interface MovieResponse {
  budget: number
  genres: string[]
  id: number
  overview: string
  poster_path: string
  release_date: string
  revenue: number
  runtime: number
  tagline: string
  title: string
  vote_average: number
  vote_count: number
}

export type RootState = ReturnType<typeof store.getState>
