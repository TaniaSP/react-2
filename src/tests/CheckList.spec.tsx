import React from 'react'
import { render, screen, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import CheckList from '../components/CheckList'
beforeEach(() => {
  jest.mock('../services/hooks', () => {
    return jest.fn().mockImplementation(() => ({
      ref: { current: [] }, isComponentVisible: true, setIsComponentVisible: () => { }
    }))
  })
})

test('should render Checklist component with query prop', async () => {
  // ARRANGE
  const value: string[] = ['Adventure', 'Comedy']
  const method: Function = () => { }
  const { asFragment } = render(<CheckList value={value} onSelected={method} />)
  const button = await screen.findByTitle('Adventure, Comedy')
  act(() => button.click())
  const adventureItem = await screen.findByLabelText('Adventure')
  act(() => adventureItem.click())
  // ASSERT
  expect(asFragment).toMatchSnapshot()
  expect(screen.getByTitle(value.join(', '))).toBeDefined()
})
