import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Root = styled.div`
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
`

const Body = styled.div`
  padding: 16px;
`

const Image = styled.div`
  background: url(${props => props.image});
  background-position: center center ;
  background-size: cover;
  height: 270px;
`

export const CardImage = ({ image }) => <Image image={image} />

export const CardBody = ({ children }) => <Body>{children}</Body>

const Card = ({ children }) => <Root>{children}</Root>

CardImage.defaultProps = {
  image: ''
}

CardImage.propTypes = {
  image: PropTypes.string
}

CardBody.propTypes = {
  children: PropTypes.node.isRequired
}

Card.propTypes = {
  children: PropTypes.node.isRequired
}

Card.Body = CardBody

Card.Image = CardImage

export default Card
