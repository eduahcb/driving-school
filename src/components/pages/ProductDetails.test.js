import React from 'react'
import { render, screen } from 'test-utils'

import ProductDetails from 'components/pages/ProductDetails'

describe('ProductDetails page', () => {
  test('renders the heading', () => {
    render(<ProductDetails />)

    expect(screen.getAllByText('Nome do Serviço'))
  })
})
