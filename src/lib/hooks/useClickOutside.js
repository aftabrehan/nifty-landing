import { useEffect } from 'react'

export const useClickOutside = (onClick, ref) => {
  useEffect(() => {
    const handleClickOutside = e =>
      ref.current && !ref.current.contains(e.target) && onClick()

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [onClick, ref])
}
