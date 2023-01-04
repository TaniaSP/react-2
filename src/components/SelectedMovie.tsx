import React from 'react'
import { MovieResponse } from '../models/interfaces'
import Image from 'next/image'

export default function SelectedMovie ({ movie }: { movie: MovieResponse }): JSX.Element {
  const year = new Date(movie.release_date).getFullYear()
  const hours = Math.floor(movie.runtime / 60)
  const minutes = movie.runtime % 60
  const runtime = `${hours}h${minutes > 0 ? ` ${minutes}m` : ''}`

  function imageLoader ({ src }: { src: string }): string {
    return src
  }

  return (
    <div className='top-selected-movie'>
      <div className='left'>
        <Image src={movie.poster_path} alt="Selected Image" loader={imageLoader} fill />
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
