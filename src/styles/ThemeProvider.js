import React from 'react'
import PropTypes from 'prop-types'

import { ThemeProvider as StyledProvider } from 'styled-components'

const light = {
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

const allThemes = {
  light,
  ocean: {
    ...light,
    colors: {
      ...light.colors,
      primary: {
        main: '#2196f3',
        dark: '#1769aa',
        light: '#4dabf5',
        text: '#fff'
      }
    }
  }

}

const ThemeProvider = ({ theme, children }) => (
  <StyledProvider theme={allThemes[theme]}>{children}</StyledProvider>
)

ThemeProvider.themes = { light: 'light', ocean: 'ocean' }

ThemeProvider.defaultProps = {
  children: undefined,
  theme: 'light'
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.string
}

export default ThemeProvider
