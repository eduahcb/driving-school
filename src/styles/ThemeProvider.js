import React from 'react'
import PropTypes from 'prop-types'

import { ThemeProvider as StyledProvider } from 'styled-components'

const theme = {
  colors: {
    primary: {
      main: '#ffc107',
      dark: '#c79100',
      light: '#fff350',
      text: '#212121'
    },
    danger: {
      main: '#ff3d00',
      dark: '#b22a00',
      text: '#212121'
    }
  }
}

const ThemeProvider = ({ children }) => (
  <StyledProvider theme={theme}>{children}</StyledProvider>
)

ThemeProvider.defaultProps = {
  children: undefined
}

ThemeProvider.propTypes = {
  children: PropTypes.node
}

export default ThemeProvider
