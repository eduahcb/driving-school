import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Root = styled.div`
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  overflow: hidden;
`

const Body = styled.div`
  padding: 16px;
`

const Image = styled.div`
  display: flex;
  background: url(${props => props.image});
  background-position: center center ;
  background-size: cover;
  height: 270px;
`

const ImageDescription = styled.div`
  background-color: rgba(0,0,0, 0.4);
  flex: 1;
  padding: 8px 16px;
  color: #fff;
  align-self: flex-end;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
`

export const CardImage = ({ image, children }) => <Image image={image}>{children}</Image>

export const CardImageDescription = ({ children }) => (
  <ImageDescription>
    {children}
  </ImageDescription>
)

export const CardBody = ({ children }) => <Body>{children}</Body>

const Card = ({ children }) => <Root>{children}</Root>

CardImage.defaultProps = {
  image: '',
  children: undefined
}

CardImage.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node
}

CardImageDescription.propTypes = {
  children: PropTypes.node.isRequired
}

CardBody.propTypes = {
  children: PropTypes.node.isRequired
}

Card.propTypes = {
  children: PropTypes.node.isRequired
}

Card.Body = CardBody

Card.Image = CardImage

Card.ImageDescription = CardImageDescription

export default Card
