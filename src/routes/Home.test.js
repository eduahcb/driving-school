import React from 'react'
import { render, screen } from 'test-utils'

import Home from 'routes/Home'

test('renders call to action', () => {
  render(<Home />)

  expect(screen.getByText('Matricula-se agora')).toBeInTheDocument()
})
