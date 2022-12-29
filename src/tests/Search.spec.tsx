/* eslint @typescript-eslint/no-var-requires: "off" */
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Search from '../components/Search'

const navigate = jest.fn()
beforeEach(() => {
  const useRouter = jest.spyOn(require('next/router'), 'useRouter')
  useRouter.mockImplementation(() => ({
    route: '/',
    pathname: '',
    query: '',
    asPath: '',
    push: navigate,
    events: {
      on: jest.fn(),
      off: jest.fn()
    },
    beforePopState: jest.fn(() => null),
    prefetch: jest.fn(() => null)
  }))
})
test('should render Search component with query prop', () => {
  // ARRANGE
  const value = 'test'
  render(<Search query={value} />)

  // ASSERT
  expect(screen.getByDisplayValue(value)).toBeDefined()
})

test('should should update and emit search', async () => {
  // ARRANGE
  const value = 'test'
  const newValue = 'new value'
  render(<Search query={value} />)
  const input = await screen.findByDisplayValue(value)
  fireEvent.change(input, { target: { value: newValue } })
  fireEvent.keyDown(input, { key: 'Enter' })

  // ASSERT
  expect(navigate).toHaveBeenCalledWith(`/search/${newValue}`)
})
