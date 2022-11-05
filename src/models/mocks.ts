import { MovieTile } from './interfaces'
// original genres export const genres = ["All", "Documentary", "Comedy", "Horror", "Crime"];

export const genres = ['All', 'Action & Adventure', 'Oscar Winning Movie', 'Drama, Biography & Music']

export const mockedMovies: MovieTile[] = [
  {
    id: 0,
    name: 'Pulp Fiction',
    release_year: 2004,
    genre: 'Action & Adventure',
    img: 'pulpfiction.jpg'
  },
  {
    id: 1,
    name: 'Bohemian Rapsody',
    release_year: 2003,
    genre: 'Drama, Biography & Music',
    img: 'bohemian.jpg'
  },
  {
    id: 2,
    name: 'Kill Bill :Vol 2',
    release_year: 1994,
    genre: 'Oscar Winning Movie',
    img: 'killbill.jpg'
  },
  {
    id: 3,
    name: 'Avengers: Infinity Wars',
    release_year: 2004,
    genre: 'Action & Adventure',
    img: 'avengers.jpg'
  },
  {
    id: 4,
    name: 'Inception',
    release_year: 2003,
    genre: 'Action & Adventure',
    img: 'inception.jpg'
  },
  {
    id: 5,
    name: 'Resevoir dogs',
    release_year: 1994,
    genre: 'Oscar Winning Movie',
    img: 'reservoirdogs.jpg'
  }
]
