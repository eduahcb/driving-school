import React from 'react'

import { render, screen } from '@testing-library/react'

import App from './App'

test('renders call to action', () => {
  render(<App />)

  expect(screen.getByText(/Matricula-se agora/)).toBeInTheDocument()
})
