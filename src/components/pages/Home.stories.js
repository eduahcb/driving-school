import React from 'react'

import Home from 'components/pages/Home'

import { buildProductList } from 'models/builders/products'

export default {
  title: 'Pages/Home',
  component: Home
}

const products = buildProductList(7)

export const usage = () => <Home products={products} />
