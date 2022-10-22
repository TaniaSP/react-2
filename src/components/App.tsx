import React from 'react'
import { User } from '../models/interfaces'
import './app.scss'

export default function App ({ user }: { user: User }): JSX.Element {
  return <h1>Welcome, <span>{user.name}</span><sup>{user.age}</sup></h1>
}
