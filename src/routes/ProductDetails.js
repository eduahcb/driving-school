import React from 'react'
import { useParams } from 'react-router-dom'

import ProductDetailsPage from 'components/pages/ProductDetails'
import NotFoundPage from 'components/pages/NotFound'

import useScrollToTop from 'hooks/useScrollToTop'
import useProducts from 'hooks/useProducts'

const ProductDetails = () => {
  useScrollToTop()

  const { slang } = useParams()
  const { findOne } = useProducts()

  const product = findOne({ slang })

  if (!product) {
    return (
      <NotFoundPage />
    )
  }

  return (
    <ProductDetailsPage product={product} />
  )
}

export default ProductDetails
