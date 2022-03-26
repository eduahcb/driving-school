import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import { breakAt, BreakpointSize } from 'styles/BreakPoints'

const breakColumnAt = (size) => (props) =>
  props[size] && css`
    ${breakAt(BreakpointSize[size])} {
      grid-template-columns: repeat(${props => props[size]}, 1fr);
    }
  `

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  row-gap: 16px;

  ${breakColumnAt('sm')}
  
  ${breakColumnAt('md')}

  ${breakColumnAt('lg')}

  ${breakColumnAt('xl')}
`

Grid.defaultProps = {
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined
}

Grid.propTypes = {
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number
}

export default Grid
