import React, { ReactElement, useState } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Footer from '../components/Footer'
import ErrorBoundary from '../components/ErrorBoundary'
import Movie from '../components/Movie'
import { EmptyMovie, genres, mockedMovies } from '../models/mocks'
import MovieControls from '../components/MovieControls'
import header_bg from '../assets/header_bg.png'
import { MovieTile } from '../models/interfaces'
import DeleteMovie from '../components/DeleteMovie'
import EditMovie from '../components/EditMovie'
import SelectedMovie from '../components/SelectedMovie'
import { sortBy } from '../models/utils'

const movieContext = React.createContext<any>(null)

export default function HomePage (): ReactElement {
  const [movies, setMovies] = useState(sortBy(mockedMovies))
  const [openConfirmBox, setOpenConfirmBox] = useState(false)
  const [openEditBox, setOpenEditBox] = useState(false)
  const [isEditMovie, setIsEditMovie] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(EmptyMovie)
  const [clickMovie, setClickedMovie] = useState<MovieTile | null>(null)
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

  const editMovie = (movie: MovieTile): void => {
    setSelectedMovie(movie)
    setOpenEditBox(true)
    setIsEditMovie(true)
  }

  const deleteMovie = (movie: MovieTile): void => {
    setOpenConfirmBox(true)
    setSelectedMovie(movie)
  }
  const onConfirm = (): void => {
    const updatedMovies = movies.filter(x => x.id !== selectedMovie.id)
    setMovies(updatedMovies)
    setOpenConfirmBox(false)
  }
  const onClose = (): void => {
    setOpenConfirmBox(false)
    setOpenEditBox(false)
  }
  const addMovie = (): void => {
    setOpenEditBox(true)
    setSelectedMovie(EmptyMovie)
    setIsEditMovie(false)
  }
  const movieClick = (movie: MovieTile): void => {
    setClickedMovie(movie)
  }
  return (
    <div className='main'>
      <movieContext.Provider value={{ clickMovie, setClickedMovie }}>
        {openConfirmBox && <DeleteMovie onConfirm={onConfirm} onClose={onClose} />}
        {openEditBox && <EditMovie movie={selectedMovie} isEdit={isEditMovie} onSubmit={onClose} onClose={onClose} />}
        <div className={(clickMovie != null) ? 'selected-movie top-content' : 'top-content'} style={{ backgroundImage: (clickMovie != null) ? '' : `url('${(header_bg as string)}')` }}>
          <Header onAddMovie={addMovie} />
          <ErrorBoundary>
            {(clickMovie != null)
              ? <SelectedMovie movie={clickMovie} />
              : <Search onSearch={onSearch} />}
          </ErrorBoundary>
        </div>
      </movieContext.Provider>
      <div className="main-content">
        <MovieControls count={movies.length} genres={genres} onGenreSelected={onGenreSelected} />
        <div className='movie-tiles'>
          {
            movies.map(movie => <ErrorBoundary key={movie.id} ><Movie onClick={() => movieClick(movie)} key={movie.id} movie={movie} editMovie={() => editMovie(movie)} deleteMovie={() => deleteMovie(movie)} /></ErrorBoundary>)
          }
        </div>
      </div>
      <Footer />
    </div>)
};

export { movieContext }
