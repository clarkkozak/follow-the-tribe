import React from 'react'
import { render } from '@testing-library/react'
import App from './app'

test('renders title', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/follow the tribe/i)
  expect(linkElement).toBeInTheDocument()
})
