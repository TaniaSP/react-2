export interface MovieResponse {
  id: number
  budget: number
  genres: string[]
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

export const IMG_FALLBACK = 'https://via.placeholder.com/320x455'
