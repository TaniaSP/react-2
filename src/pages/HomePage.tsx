import React, { ReactElement, useCallback, useState } from 'react'
import header_bg from '../assets/header_bg.png'
import DeleteMovie from '../components/DeleteMovie'
import EditMovie from '../components/EditMovie'
import ErrorBoundary from '../components/ErrorBoundary'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Movie from '../components/Movie'
import MovieControls from '../components/MovieControls'
import Search from '../components/Search'
import SelectedMovie from '../components/SelectedMovie'
import { MovieResponse } from '../models/interfaces'
import { EmptyMovie, genres } from '../models/mocks'
import { useGetMoviesQuery } from '../services/moviesService'

const movieContext = React.createContext<any>(null)

export default function HomePage (): ReactElement {
  const [openConfirmBox, setOpenConfirmBox] = useState(false)
  const [openEditBox, setOpenEditBox] = useState(false)
  const [isEditMovie, setIsEditMovie] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(EmptyMovie)
  const [clickMovie, setClickedMovie] = useState<MovieResponse | null>(null)
  const [sortBy, setSortBy] = useState('release_date')
  const [filter, setFilter] = useState([] as string[])
  const [search, setSearch] = useState('')
  const { data: movies } = useGetMoviesQuery({ sortBy, filter, search })

  const onSearch = (value: string): void => {
    setSearch(value)
  }

  const onGenreSelected = useCallback((genre: string): void => {
    (genre === 'All') ? setFilter([]) : setFilter([genre])
  }, [])

  const onSortSelected = useCallback((sortBy: string): void => {
    setSortBy(sortBy)
  }, [])
  const editMovie = useCallback((movie: MovieResponse): void => {
    setSelectedMovie(movie)
    setOpenEditBox(true)
    setIsEditMovie(true)
  }, [])

  const deleteMovie = useCallback((movie: MovieResponse): void => {
    setOpenConfirmBox(true)
    setSelectedMovie(movie)
  }, [])

  const onConfirm = (): void => {
    // DELETE VIA API
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
  const movieClick = (movie: MovieResponse): void => {
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
        <MovieControls count={movies?.length} genres={genres} onGenreSelected={onGenreSelected} onSortSelected={onSortSelected} />
        <div className='movie-tiles'>
          {
            movies?.map(movie => <ErrorBoundary key={movie.id} ><Movie onClick={() => movieClick(movie)} key={movie.id} movie={movie} editMovie={() => editMovie(movie)} deleteMovie={() => deleteMovie(movie)} /></ErrorBoundary>)
          }
        </div>
      </div>
      <Footer />
    </div>)
};

export { movieContext }
