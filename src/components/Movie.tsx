/* eslint @typescript-eslint/no-var-requires: "off" */
import PropTypes from 'prop-types'
import React, { ReactElement } from 'react'
import { MovieTile } from '../models/interfaces'

export default function Movie ({ movie }: { movie: MovieTile }): ReactElement {
  const moviePath = (img: string): string => require(`../assets/${img}`).default
  return (
        <div className="movie-wrapper">
            <div className="img-wrapper">
                <button></button>
                <img src={moviePath(movie.img)} width="100%" height="100%" alt={movie.name} />
            </div>
            <h5>{movie.name} <span>{movie.release_year}</span></h5>
            <h6>{movie.genre}</h6>
        </div>
  )
}

Movie.defaultProps = {
  img: '', name: '', genre: '', release_year: 9999
}
Movie.propTypes = {
  name: PropTypes.string, img: PropTypes.string, genre: PropTypes.string, release_year: PropTypes.number
}
