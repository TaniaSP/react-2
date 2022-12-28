import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Search from '../components/Search'
import { BrowserRouter as Router } from 'react-router-dom'
import * as router from 'react-router'
const navigate = jest.fn()
beforeEach(() => {
  jest.spyOn((router as any), 'useNavigate').mockImplementation(() => navigate)
})
test('should render Search component with query prop', () => {
  // ARRANGE
  const value = 'test'
  render(<Router><Search query={value} /></Router>)

  // ASSERT
  expect(screen.getByDisplayValue(value)).toBeDefined()
})

test('should should update and emit search', async () => {
  // ARRANGE
  const value = 'test'
  const newValue = 'new value'
  render(<Router><Search query={value} /></Router>)
  const input = await screen.findByDisplayValue(value)
  fireEvent.change(input, { target: { value: newValue } })
  fireEvent.keyDown(input, { key: 'Enter' })

  // ASSERT
  expect(navigate).toHaveBeenCalledWith({ pathname: `/search/${newValue}` })
})
