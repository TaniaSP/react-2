import PropTypes from 'prop-types'
import React, { ReactElement, useState } from 'react'
import { MovieResponse } from '../models/interfaces'
import { EmptyMovie } from '../models/mocks'

export default function Movie ({ movie, deleteMovie, editMovie, onClick }: { movie: MovieResponse, deleteMovie: Function, editMovie: Function, onClick: Function }): ReactElement {
  const year = new Date(movie.release_date).getFullYear()
  const [openMenu, setOpenMenu] = useState(false)
  const flipMenu = (): void => setOpenMenu(!openMenu)

  return (
    <div className="movie-wrapper">
      <div className="img-wrapper">
        <button onClick={() => flipMenu()}></button>
        {openMenu && <div className='movie-opts'>
          <button className='close' onClick={() => flipMenu()}>x</button>
          <ul>
            <li><button onClick={() => { flipMenu(); editMovie() }}>Edit</button></li>
            <li><button onClick={() => { flipMenu(); deleteMovie() }}>Delete</button></li>
          </ul>
        </div>}
        <img onClick={() => onClick()} src={movie.poster_path} width="100%" height="100%" alt={movie.title} />
      </div>
      <h5>{movie.title} <span>{year}</span></h5>
      <h6>{movie.genres.join(', ')}</h6>
    </div >
  )
}

Movie.defaultProps = {
  movie: EmptyMovie
}
Movie.propTypes = {
  movie: PropTypes.object.isRequired, deleteMovie: PropTypes.func.isRequired, editMovie: PropTypes.func.isRequired
}
