import React from 'react'
import { render, screen } from 'test-utils'

import NotFound from 'components/pages/NotFound'

describe('NotFound page', () => {
  test('renders the title', () => {
    render(<NotFound />)

    expect(screen.getByText('Página não encontrada')).toBeInTheDocument()
  })
})
