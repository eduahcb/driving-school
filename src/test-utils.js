import React from 'react'
import PropTypes from 'prop-types'
import { MemoryRouter } from 'react-router-dom'

import { render } from '@testing-library/react'

import ThemeProvider from 'styles/ThemeProvider'

const TestProvider = ({ children }) => (
  <ThemeProvider>
    <MemoryRouter>
      {children }
    </MemoryRouter>
  </ThemeProvider>
)

TestProvider.propTypes = {
  children: PropTypes.node.isRequired
}

// eslint-disable-next-line import/export
export * from '@testing-library/react'

// eslint-disable-next-line no-unused-vars
const customRender = (ui, options) => render(ui, {
  wrapper: TestProvider, ...options
})

// eslint-disable-next-line import/export
export { customRender as render }
