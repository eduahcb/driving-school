import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Container from 'components/atoms/Container'

const Content = styled.div`
  margin: 40px 0;
`

const Section = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  )
}

Section.defaultProps = {}

Section.propTypes = {
  children: PropTypes.node.isRequired
}

export default Section
