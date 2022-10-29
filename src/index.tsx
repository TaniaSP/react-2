import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import HomePage from './pages/HomePage'

const container = document.getElementById('root')
const root = createRoot(container as HTMLElement)
root.render(<HomePage />)
