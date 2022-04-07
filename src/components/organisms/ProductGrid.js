import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

import Grid from 'components/atoms/Grid'
import Card from 'components/atoms/Card'
import Heading from 'components/atoms/Heading'
import Button from 'components/atoms/Button'

import ProductType from 'models/types/ProductType'

const Title = styled.h6`
  margin-top: 0;
`

const Toolbar = styled.div`
  margin-top: 40px;
  text-align: center;

  button {
    text-transform: uppercase;
  }
`

const ProductGrid = ({ products }) => {
  const [showAll, setShowAll] = useState(false)

  const filteredProducts = showAll ? products : products.slice(0, 3)

  return (
    <>
      <Grid md={3} >
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <Card>
              <Card.Image image={product.image} />
              <Card.Body>
                <Heading>
                  <Title>{ product.title }</Title>
                </Heading>
                <p>{product.summary}</p>
                <div>
                  <Button
                    as={Link}
                    to={`/servicos/${product.slang}`}
                    variant={Button.variants.link}
                    color={Button.colors.primary}>saiba mais</Button>
                </div>
              </Card.Body>
            </Card>

          </div>
        ))}
      </Grid>
      {
        !showAll && (
          <Toolbar>
            <Button
              variant={Button.variants.outlined}
              onClick={ () => setShowAll(true)}
            >
              lista completa de serviços
            </Button>
          </Toolbar>
        )
      }
    </>
  )
}

ProductGrid.defaultProps = {
  products: []
}

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(ProductType)
}

export default ProductGrid
