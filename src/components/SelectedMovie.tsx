import React from 'react'
import { MovieResponse } from '../models/interfaces'

export default function SelectedMovie ({ movie }: { movie: MovieResponse }): JSX.Element {
  const year = new Date(movie.release_date).getFullYear()
  const hours = Math.floor(movie.runtime / 60)
  const minutes = movie.runtime % 60
  const runtime = `${hours}h${minutes > 0 ? ` ${minutes}m` : ''}`
  return (
        <div className='top-selected-movie'>
            <div className='left'>
                <img src={movie.poster_path} width="100%" height="100%" />
            </div>
            <div className='right'>
                <h3>{movie.title} <span>{movie.vote_average}</span></h3>
                <p className='genre'>{movie.genres.join(', ')}</p>
                <p className='meta'>{year} <span className='runtime'>{runtime}</span></p>
                <p className="summary">{movie.overview}</p>
            </div>
        </div>
  )
}
