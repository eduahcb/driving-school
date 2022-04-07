import React from 'react'
import { render, screen } from 'test-utils'

import NotFound from 'routes/NotFound'

test('renders not found page', () => {
  render(
    <NotFound />
  )

  expect(screen.getByText('Página não encontrada'))
})
