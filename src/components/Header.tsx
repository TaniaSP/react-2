import React from 'react'
import Logo from './Logo'

export default function Header ({ onAddMovie }: { onAddMovie: Function }): JSX.Element {
  return (
    <header>
      <Logo /><button onClick={() => onAddMovie()} className='btn'>+ Add Movie</button>
    </header>
  )
}
