import React from 'react'
import { render, screen } from 'test-utils'

import About from 'components/pages/About'

describe('About page', () => {
  test('renders header', () => {
    render(<About />)

    const heading = screen.getAllByText('Driving School')[0]

    expect(heading).toBeInTheDocument()
  })

  test('renders instructors section', () => {
    render(<About />)

    expect(screen.getByText('Conheça nossos professores'))
  })

  test('renders instructors names', () => {
    render(<About />)

    expect(screen.getByText('Thor'))
    expect(screen.getByText('Mel'))
    expect(screen.getByText('Bolinha'))
    expect(screen.getByText('Mike'))
    expect(screen.getByText('Emmy'))
    expect(screen.getByText('Bob'))
  })
})
