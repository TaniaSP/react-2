import { MovieResponse } from './interfaces'

export const genres = ['all', 'documentary', 'comedy', 'horror', 'crime']

export const EmptyMovie: MovieResponse = {
  budget: 0,
  genres: [],
  id: 0,
  overview: '',
  poster_path: '',
  release_date: '',
  revenue: 0,
  runtime: 0,
  tagline: '',
  title: '',
  vote_average: 0,
  vote_count: 0
}
