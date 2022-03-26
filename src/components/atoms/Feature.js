
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const getPrimaryColor = ({ theme }) => theme.colors.primary.main

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const Title = styled.h5`
  margin: 16px 0;
  flex-grow: 1;
`

const IconRoot = styled.div`
  display: inline-block;
  width: 116px;
  height: 116px;
  padding: 8px;
  border-radius: 50%;

  &:hover {
    border: 1px solid ${getPrimaryColor};
    
    > * {
      color: #fff;
      background-color: ${getPrimaryColor};
    }
  }
`

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e9e9e9e9;
  border-radius: 50%;
  font-size: 32px;
  width: 100%;
  height: 100%;
  color: ${getPrimaryColor};

  

`

const Feature = ({ children, icon, title }) => {
  return (
    <Root>
      <IconRoot>
        <IconContainer>
          {icon}
        </IconContainer>
      </IconRoot>
      <Title>{title}</Title>
      <div>{children}</div>
    </Root>
  )
}

Feature.defaultProps = {
  icon: undefined,
  title: ''
}

Feature.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.element,
  title: PropTypes.string
}

export default Feature
