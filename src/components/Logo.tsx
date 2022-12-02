import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo (): JSX.Element {
  return (<Link to='/'><span className='logo'><b>netflix</b>roulette</span></Link>)
}
