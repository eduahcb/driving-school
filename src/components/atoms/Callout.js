import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { breakAt, BreakpointSize } from 'styles/BreakPoints'

const StyledCallout = styled.div`
  display: flex;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-left: 3px solid ${props => props.theme.colors.primary.main};
  border-radius: 4px;
  padding: 16px;
`

const StyledCalloutBody = styled.div`
  /* flex: 1; */

  h6, p {
    margin: 0 0 8px;
  }
`

const StyledCalloutActions = styled.div`
  padding-top: 8px;
`

const StyledCalloutImage = styled.div`
  width: 30%;
  display: none;

  ${breakAt(BreakpointSize.md)} {
    display: flex;
    
    svg {
      color: ${props => props.theme.colors.primary.main};
      height: 100%;
      max-height: 200px;
      width: 100%;
    }
  }

`

const Callout = ({ children }) => {
  return (
    <StyledCallout>{ children }</StyledCallout>
  )
}

export const CalloutBody = ({ children }) => (
  <StyledCalloutBody>{ children }</StyledCalloutBody>
)

export const CalloutActions = ({ children }) => (
  <StyledCalloutActions>{ children }</StyledCalloutActions>
)

export const CalloutImage = ({ children }) => (
  <StyledCalloutImage>{ children }</StyledCalloutImage>
)

Callout.propTypes = {
  children: PropTypes.node.isRequired
}

CalloutBody.propTypes = {
  children: PropTypes.node.isRequired
}

CalloutActions.propTypes = {
  children: PropTypes.node.isRequired
}

CalloutImage.propTypes = {
  children: PropTypes.node.isRequired
}

Callout.Body = CalloutBody

Callout.Actions = CalloutActions

Callout.Image = CalloutImage

export default Callout
