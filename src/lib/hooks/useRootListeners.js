import { useEffect } from 'react'

const keyDownFn = e => {
  const { nodeName, type } = e.target

  const isInput = ['input', 'textarea'].includes(nodeName.toLowerCase())

  if (!isInput && type !== 'text' && e.which === 8) e.preventDefault()
}

export const useRootListeners = () => {
  useEffect(() => {
    window.addEventListener('keydown', keyDownFn)

    return () => window.removeEventListener('keydown', keyDownFn)
  }, [])
}
