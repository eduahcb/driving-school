import React from 'react'
import { render, screen } from 'test-utils'

import Feature from 'components/atoms/Feature'

describe('Feature', () => {
  test('renders title and children', () => {
    render(<Feature title='My Title'>
      <p>description</p>
    </Feature>)

    expect(screen.getByText('My Title')).toBeInTheDocument()
    expect(screen.getByText('description')).toBeInTheDocument()
  })
})
