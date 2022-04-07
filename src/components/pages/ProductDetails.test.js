import React from 'react'
import { render, screen } from 'test-utils'

import ProductDetails from 'components/pages/ProductDetails'

import { buildProduct } from 'models/builders/products'

describe('ProductDetails page', () => {
  const product = buildProduct()

  test('renders the heading', () => {
    render(<ProductDetails product={product} />)

    expect(screen.getAllByText('Small Granite Shirt'))
  })
})
