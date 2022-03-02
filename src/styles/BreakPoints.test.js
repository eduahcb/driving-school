import { breakAt, BreakpointSize } from 'styles/BreakPoints'

describe('BreakPoints', () => {
  test.each([
    [BreakpointSize.sm],
    [BreakpointSize.md],
    [BreakpointSize.lg],
    [BreakpointSize.xl]
  ])('break at %i', (size) => {
    expect(breakAt(size)).toBe(`@media (min-width: ${size}px)`)
  })
})
