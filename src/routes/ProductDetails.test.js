import React from 'react'
import { render, screen } from 'test-utils'

import ProductDetails from 'routes/ProductDetails'

import useProducts from 'hooks/useProducts'

import { buildProduct } from 'models/builders/products'

jest.mock('hooks/useProducts')

test('renders /servicos routes', () => {
  useProducts.mockReturnValue({
    findOne: jest.fn(() => buildProduct())
  })

  render(
    <ProductDetails/>
  )

  expect(screen.getByRole('heading', { name: 'Small Granite Shirt' })).toBeInTheDocument()
})

test('rendes not found page', () => {
  useProducts.mockReturnValue({
    findOne: jest.fn(() => {})
  })

  render(
    <ProductDetails/>
  )

  expect(screen.getByText('Página não encontrada')).toBeInTheDocument()
})
