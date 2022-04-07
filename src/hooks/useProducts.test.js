import { renderHook } from '@testing-library/react-hooks'

import useProducts from 'hooks/useProducts'

describe('useProducts', () => {
  test('returns all products', () => {
    const { result } = renderHook(() => useProducts())

    const products = result.current.products

    expect(products).toStrictEqual(
      [
        {
          id: 1,
          title: '1ª Habilitação Carro e Moto',
          slang: 'primeira-habilitacao-carro-e-moto',
          summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          image: 'serv-01.jpg'
        },
        {
          id: 2,
          title: '1ª Habilitação Carro',
          slang: 'primeira-habilitacao-carro',
          summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          image: 'serv-02.jpg'
        },
        {
          id: 3,
          title: '1ª Habilitação Moto',
          slang: 'primeira-habilitacao-moto',
          summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          image: 'serv-03.jpg'
        },
        {
          id: 4,
          title: 'Mudança de Categoria Caminhão',
          slang: 'mudanca-de-categoria-caminnhao',
          summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          image: 'serv-04.jpg'
        },
        {
          id: 5,
          title: 'Aulas Avulsas',
          slang: 'aulas-avulsas',
          summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          image: 'serv-05.jpg'
        }
      ]
    )
  })

  test('returns one product', () => {
    const { result } = renderHook(() => useProducts())

    const slang = 'primeira-habilitacao-carro-e-moto'
    const product = result.current.findOne({ slang })

    expect(product).toStrictEqual({
      id: 1,
      title: '1ª Habilitação Carro e Moto',
      slang: 'primeira-habilitacao-carro-e-moto',
      summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      image: 'serv-01.jpg'
    })
  })
})
