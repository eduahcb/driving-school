import CarImage from 'stories/assets/bg-car.jpg'

import products from 'models/builders/fixtures/products.json'

export const buildProductList = (size) => {
  const result = []

  for (let i = 0; i < size; i++) {
    result.push({
      ...products[i],
      image: CarImage
    })
  }

  return result
}

export const buildProduct = () => buildProductList(1)[0]
