/* eslint @typescript-eslint/no-var-requires: "off" */
import PropTypes from 'prop-types'
import React, { ReactElement, useState } from 'react'
import { MovieTile } from '../models/interfaces'

export default function Movie ({ movie, deleteMovie, editMovie }: { movie: MovieTile, deleteMovie: Function, editMovie: Function }): ReactElement {
  const [openMenu, setOpenMenu] = useState(false)
  const flipMenu = (): void => setOpenMenu(!openMenu)
  const moviePath = (img: string): string => require(`../assets/${img}`).default
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
        <img src={moviePath(movie.img)} width="100%" height="100%" alt={movie.name} />
      </div>
      <h5>{movie.name} <span>{movie.release_year}</span></h5>
      <h6>{movie.genre}</h6>
    </div >
  )
}

Movie.defaultProps = {
  movie: { img: '', name: '', genre: '', release_year: 9999 }
}
Movie.propTypes = {
  movie: PropTypes.object.isRequired, deleteMovie: PropTypes.func.isRequired, editMovie: PropTypes.func.isRequired
}
