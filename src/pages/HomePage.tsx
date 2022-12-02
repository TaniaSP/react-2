import React, { ReactElement, useCallback, useEffect, useState } from 'react'
import { useMatches, useSearchParams } from 'react-router-dom'

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
import { useDeleteMovieMutation, useGetMoviesQuery } from '../services/moviesService'
const movieContext = React.createContext<any>(null)

export default function HomePage (): ReactElement {
  const [openConfirmBox, setOpenConfirmBox] = useState(false)
  const [openEditBox, setOpenEditBox] = useState(false)
  const [isEditMovie, setIsEditMovie] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(EmptyMovie)
  const [clickMovie, setClickedMovie] = useState<MovieResponse | null>(null)
  const [sortBy, setSortBy] = useState('vote_count')
  const [filter, setFilter] = useState('')
  const [search, setSearch] = useState('')
  const { data: movies } = useGetMoviesQuery({ sortBy, filter, search })

  const [deleteMovieCall] = useDeleteMovieMutation()

  const editMovie = useCallback((movie: MovieResponse): void => {
    setSelectedMovie(movie)
    setOpenEditBox(true)
    setIsEditMovie(true)
  }, [])

  const deleteMovie = useCallback((movie: MovieResponse): void => {
    setOpenConfirmBox(true)
    setSelectedMovie(movie)
  }, [])

  const onConfirm = async (): Promise<void> => {
    await deleteMovieCall(selectedMovie.id)
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

  const [, queryMatcher] = useMatches()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const dataquery = queryMatcher !== undefined ? queryMatcher.params.queryParam ?? '' : ''
    setSearch(dataquery)
    const genre = searchParams.get('genre') ?? ''
    const sortByQuery = searchParams.get('sortBy') ?? ''
    const movieId = searchParams.get('movieId') ?? ''
    if (genre !== '') {
      genre === 'All' ? setFilter('') : setFilter(genre)
    }
    if (sortByQuery !== '') {
      setSortBy(sortByQuery)
    }
    if (movieId !== '') {
      const foundMovie = movies?.find(x => x.id === +movieId)
      if (foundMovie !== undefined) {
        setClickedMovie(foundMovie)
      }
    }
  }, [queryMatcher, searchParams, movies])

  return (
    <div className='main'>
      <movieContext.Provider value={{ clickMovie, setClickedMovie }}>
        {openConfirmBox && <DeleteMovie onConfirm={onConfirm} onClose={onClose} />}
        {openEditBox && <EditMovie movie={selectedMovie} isEdit={isEditMovie} onClose={onClose} />}
        <div className={(clickMovie != null) ? 'selected-movie top-content' : 'top-content'} style={{ backgroundImage: (clickMovie != null) ? '' : `url('${(header_bg as string)}')` }}>
          <Header onAddMovie={addMovie} />
          <ErrorBoundary>
            {(clickMovie != null)
              ? <SelectedMovie movie={clickMovie} />
              : <Search query={search} />}
          </ErrorBoundary>
        </div>
      </movieContext.Provider>
      <div className="main-content">
        <MovieControls count={movies?.length} genres={genres} selected={filter} sortSelected={sortBy} />
        <div className='movie-tiles'>
          {
            movies?.map(movie => <ErrorBoundary key={movie.id} ><Movie key={movie.id} movie={movie} editMovie={() => editMovie(movie)} deleteMovie={() => deleteMovie(movie)} /></ErrorBoundary>)
          }
        </div>
      </div>
      <Footer />
    </div>)
};

export { movieContext }
