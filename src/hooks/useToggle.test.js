import { renderHook, act } from '@testing-library/react-hooks'

import useToggle from 'hooks/useToggle'

describe('useToggle', () => {
  describe.each([
    [false, true],
    [true, false]
  ])('initial State', (initialState, expected) => {
    test(`should be ${initialState}`, () => {
      const { result } = renderHook(() => useToggle(initialState))

      const [state] = result.current

      expect(state).toBe(initialState)
    })

    test(`should toggle ${initialState} to ${expected}`, async () => {
      const { result } = renderHook(() => useToggle(initialState))

      const [state, setState] = result.current

      expect(state).toBe(initialState)

      await act(async () => {
        setState()
      })

      const [newState] = result.current

      expect(newState).toBe(expected)
    })
  })

  describe('when not pass initial state', () => {
    test('should be false', () => {
      const { result } = renderHook(() => useToggle())

      const [state] = result.current

      expect(state).toBe(false)
    })
  })
})
