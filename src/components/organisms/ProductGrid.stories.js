import React from 'react'

import ProductGrid from 'components/organisms/ProductGrid'

import { buildProductList } from 'models/builders/products'

export default {
  title: 'Components/ProductGrid',
  component: ProductGrid
}

const products = buildProductList(8)

export const usage = () => (
  <ProductGrid products={products} />
)
