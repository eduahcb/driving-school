import { useEffect } from 'react'

const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      lef: 0,
      behavior: 'smooth'
    })
  }, [])
}

export default useScrollToTop
