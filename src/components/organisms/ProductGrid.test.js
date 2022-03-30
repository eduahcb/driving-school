import React from 'react'
import { render, screen } from 'test-utils'
import userEvent from '@testing-library/user-event'

import ProductGrid from 'components/organisms/ProductGrid'

describe('ProductGrid', () => {
  const buildProducts = size => {
    const result = []

    for (let i = 1; i <= size; i++) {
      result.push({
        id: i,
        title: `Tile ${i}`,
        image: ''
      })
    }

    return result
  }

  describe.each([
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 3],
    [6, 3]
  ])('with %i products', (size, showOnly) => {
    test(`show only ${size} items`, () => {
      render(<ProductGrid products={buildProducts(size)}/>)

      expect(screen.getAllByRole('heading').length).toBe(showOnly)
    })

    test('show all the products when button is clicked', () => {
      render(<ProductGrid products={buildProducts(size)}/>)

      expect(screen.getAllByRole('heading').length).toBe(showOnly)

      const productButton = screen.getByRole('button', { name: 'lista completa de serviços' })

      userEvent.click(productButton)

      expect(screen.getAllByRole('heading').length).toBe(size)
    })
  })
})
