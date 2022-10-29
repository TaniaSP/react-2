import React from 'react'
import Logo from './Logo'

export default function Header (): JSX.Element {
  return (
        <header>
            <Logo /><button className='btn'>+ Add Movie</button>
        </header>
  )
}
