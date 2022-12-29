import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from '../components/Footer'

test('should render header and footer', async () => {
  // ARRANGE
  render(<Footer />)

  // ASSERT
  expect(screen.getByText('netflix')).toBeDefined()
})
