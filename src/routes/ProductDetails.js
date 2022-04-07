import React from 'react'
import { useParams } from 'react-router-dom'

import ProductDetailsPage from 'components/pages/ProductDetails'

import useScrollToTop from 'hooks/useScrollToTop'
import useProducts from 'hooks/useProducts'

const ProductDetails = () => {
  useScrollToTop()

  const { slang } = useParams()
  const { findOne } = useProducts()

  const product = findOne({ slang })

  return (
    <ProductDetailsPage product={product} />
  )
}

export default ProductDetails
