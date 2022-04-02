import styled from 'styled-components'

import { BreakpointSize, breakAt } from 'styles/BreakPoints'

const Container = styled.div`
  width: 100%;
  padding: 0 8px;

  ${breakAt(BreakpointSize.sm)} {
    padding: 0 16px;
  }

  ${breakAt(BreakpointSize.lg)} {
    max-width: 1140px;
    margin: 0 auto;
  }
`

export default Container
