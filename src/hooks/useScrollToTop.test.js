import { renderHook } from '@testing-library/react-hooks'

import useScrollToTop from 'hooks/useScrollToTop'

describe('useScrollToTop', () => {
  test('calls window.scrollTo', () => {
    renderHook(() => useScrollToTop())

    expect(window.scrollTo).toHaveBeenCalled()
  })
})
