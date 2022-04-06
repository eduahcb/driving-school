import React from 'react'

import { render, screen } from 'test-utils'

import Home from 'components/pages/Home'

describe('Home page', () => {
  test('renders the page', () => {
    render(<Home />)

    expect(screen.getByText('Matricula-se agora')).toBeInTheDocument()
  })
})
