import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from '../components/Footer'
import { BrowserRouter as Router } from 'react-router-dom'

test('should render header and footer', async () => {
  // ARRANGE
  render(<Router><Footer /></Router>)

  // ASSERT
  expect(screen.getByText('netflix')).toBeDefined()
})
