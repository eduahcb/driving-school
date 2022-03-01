import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { BreakpointSize, breakAt } from 'styles/BreakPoints'

const colorYellow = '#ffc107'

const Root = styled.div`
  color: #fff;
  padding: 100px 0;

  ${props => css`
    background: url(${props.image}), rgba(0, 0, 0, 0.4);
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
  `}
`

const Container = styled.div`
  width: 100%;
  padding: 0 8px;

  ${breakAt(BreakpointSize.sm)} {
    padding: 0 16px;
  }

  ${breakAt(BreakpointSize.xl)} {
    width: 1140px;
    margin: 0 auto;
    padding: 0;
  }
`

const Content = styled.div`
  p,
  li {
    font-size: 20px;
    font-weight: 300;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li::before {
    content: "\\2713\\0020";
    color: ${colorYellow}
  }
`

const Hero = ({ image, children }) => {
  return (
    <Root image={image} data-testid="hero">
      <Container>
        <Content>
          { children }
        </Content>
      </Container>
    </Root>
  )
}

Hero.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  children: PropTypes.node
}

export default Hero
