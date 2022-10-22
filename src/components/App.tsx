import React from 'react'
import { User } from '../models/interfaces'
import './app.scss'

export default function App ({ user }: { user: User }): JSX.Element {
  return <div><h1>Welcome, <span>{user.name}</span><sup>{user.age}</sup></h1><footer><p>{process.env.NODE_ENV}</p><p>BASE:{process.env.BASE}</p></footer></div>
}
