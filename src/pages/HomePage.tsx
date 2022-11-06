import React, { ReactElement, useState } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Footer from '../components/Footer'
import ErrorBoundary from '../components/ErrorBoundary'
import Movie from '../components/Movie'
import { genres, mockedMovies } from '../models/mocks'
import MovieControls from '../components/MovieControls'
import header_bg from '../assets/header_bg.png'
import { MovieTile } from '../models/interfaces'

export default function HomePage (): ReactElement {
  const sortBy = (data: MovieTile[]): MovieTile[] => {
    return data.sort((a, b) => {
      if (a.release_year > b.release_year) {
        return 1
      }
      if (a.release_year < b.release_year) {
        return -1
      }
      return 0
    })
  }
  const [movies, setMovies] = useState(sortBy(mockedMovies))
  const onSearch = (value: string): void => {
    const filtered = mockedMovies
      .filter(x => x.name.toLowerCase().includes(value.toLowerCase()))
    setMovies(sortBy(filtered))
  }
  const onGenreSelected = (genre: string): void => {
    if (genre === 'All') {
      setMovies(sortBy(mockedMovies))
      return
    }
    const filtered = mockedMovies.filter(x => x.genre.toLowerCase() === genre.toLowerCase())
    setMovies(sortBy(filtered))
  }
  return (
        <div className='main'>
            <div className="top-content" style={{ backgroundImage: `url('${(header_bg as string)}')` }}>
                <Header />
                <ErrorBoundary>
                    <Search onSearch={onSearch} />
                </ErrorBoundary>
            </div>
            <div className="main-content">
                <MovieControls count={movies.length} genres={genres} onGenreSelected={onGenreSelected} />
                <div className='movie-tiles'>
                    {
                        movies.map(movie => <ErrorBoundary key={movie.id} ><Movie key={movie.id} movie={movie} /></ErrorBoundary>)
                    }
                </div>
            </div>
            <Footer />
        </div>)
};

//example for ana
