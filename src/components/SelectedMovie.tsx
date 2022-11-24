import React from 'react'
import { MovieTile } from '../models/interfaces'
import { moviePath } from '../models/utils'

export default function SelectedMovie ({ movie }: { movie: MovieTile }): JSX.Element {
  return (
        <div className='top-selected-movie'>
            <div className='left'>
                <img src={moviePath(movie.img)} width="100%" height="100%" />
            </div>
            <div className='right'>
                <h3>{movie.name} <span>9.9</span></h3>
                <p className='genre'>Action & Adventura</p>
                <p className='meta'>1994 <span className='runtime'>2h 34min</span></p>
                <p className="summary">Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra</p>
            </div>
        </div>
  )
}
