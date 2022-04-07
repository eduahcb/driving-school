import React from 'react'
import { render, screen } from 'test-utils'

import About from 'routes/About'

test('renders /about route', () => {
  render(
    <About />
  )

  expect(screen.getByRole('heading', { name: 'Driving School', level: 1 })).toBeInTheDocument()
})
