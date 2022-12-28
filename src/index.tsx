import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import {
  createBrowserRouter, Navigate, RouterProvider
} from 'react-router-dom'
import NotFound from './components/NotFound'
import './index.scss'
import HomePage from './pages/HomePage'
import store from './store/store'
const router = createBrowserRouter([
  {
    path: 'search',
    element: <HomePage />,
    errorElement: <NotFound />,
    children: [{
      path: ':queryParam',
      element: <HomePage />
    }]
  },
  {
    path: '/',
    index: true,
    element: <Navigate to="/search" replace />
  },
  {
    path: '*',
    element: <NotFound />
  }
])
const container = document.getElementById('root')
const root = createRoot(container as HTMLElement)
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
)
