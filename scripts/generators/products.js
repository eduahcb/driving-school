// import CarImage from 'stories/assets/bg-car.jpg'

const { faker } = require('@faker-js/faker')

const buildProductList = (size) => {
  const result = []

  for (let i = 0; i < size; i++) {
    result.push({
      id: i + 1,
      image: '',
      title: faker.commerce.productName(),
      summary: faker.commerce.productDescription(),
      slang: faker.lorem.slug()
    })
  }

  return result
}

console.log(JSON.stringify(buildProductList(100), null, '  '))
