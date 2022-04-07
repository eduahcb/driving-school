import React from 'react'

import ProductDetails from 'components/pages/ProductDetails'

import { buildProduct } from 'models/builders/products'

export default {
  title: 'Pages/ProductDetails',
  component: ProductDetails
}

const product = buildProduct()

export const usage = () => <ProductDetails product={product}/>
