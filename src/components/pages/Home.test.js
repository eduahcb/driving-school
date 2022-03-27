import React from 'react'

import { render, screen } from 'test-utils'
import userEvent from '@testing-library/user-event'

import Home from 'components/pages/Home'

describe('Home page', () => {
  test('renders the page', () => {
    render(<Home />)

    expect(screen.getByText('Matricula-se agora')).toBeInTheDocument()
  })

  test('test should click the button in the hero', () => {
    render(<Home />)

    const button = screen.getByRole('button', { name: 'Matricula-se agora' })

    userEvent.click(button)

    // TODO making button action
  })
})
