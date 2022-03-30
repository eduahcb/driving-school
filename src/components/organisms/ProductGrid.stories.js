import React from 'react'

import ProductGrid from 'components/organisms/ProductGrid'
import Image from 'stories/assets/bg-car.jpg'

export default {
  title: 'Components/ProductGrid',
  component: ProductGrid
}

export const usage = () => (
  <ProductGrid products={
    [
      {
        id: 1,
        title: 'Título 1',
        summary: 'description',
        image: Image
      },
      {
        id: 2,
        title: 'Título 2',
        summary: 'description',
        image: Image
      },
      {
        id: 3,
        title: 'Título 3',
        summary: 'description',
        image: Image
      },
      {
        id: 4,
        title: 'Título 1',
        summary: 'description',
        image: Image
      },
      {
        id: 5,
        title: 'Título 2',
        summary: 'description',
        image: Image
      },
      {
        id: 6,
        title: 'Título 3',
        summary: 'description',
        image: Image
      }
    ]
  } />
)
