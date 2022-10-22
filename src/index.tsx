import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.scss'
import { User } from './models/interfaces'

const user: User = {
  name: 'Tania', age: 30
}
ReactDOM.render(<App user={user} />, document.getElementById('root'))
