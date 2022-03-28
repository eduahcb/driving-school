import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import Container from 'components/atoms/Container'

const Content = styled.section`
  padding: 40px 0;

  ${props => props.inverse && css`
    background-color: #f7f7f7;
  `}

  h2 {
    margin-top: 0;
  }
`

const Section = ({ children, inverse }) => {
  return (
    <Content inverse={inverse}>
      <Container>{children}</Container>
    </Content>
  )
}

Section.defaultProps = {
  inverse: false
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  inverse: PropTypes.bool
}

export default Section
