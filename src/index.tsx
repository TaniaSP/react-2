import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.scss'
import HomePage from './pages/HomePage'
import store from './store/store'

const container = document.getElementById('root')
const root = createRoot(container as HTMLElement)
root.render(
    <Provider store={store}>
        <HomePage />
    </Provider>
)
