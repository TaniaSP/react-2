import React, { useContext } from 'react'
import { movieContext } from '../pages'
import Logo from './Logo'

export default function Header ({ onAddMovie }: { onAddMovie: Function }): JSX.Element {
  const { clickMovie, setClickedMovie } = useContext(movieContext)
  return (
    <header>
      <Logo />
      {clickMovie !== null ? <button onClick={() => setClickedMovie(null)} className='search-icon'></button> : <button onClick={() => onAddMovie()} className='btn'>+ Add Movie</button>}
    </header>
  )
}
