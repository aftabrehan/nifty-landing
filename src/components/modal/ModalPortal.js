import { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'

const ModalPortal = ({ children, selector }) => {
  const ref = useRef()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector(selector)
    setMounted(true)
  }, [selector])

  return mounted ? createPortal(children, ref.current) : null
}

ModalPortal.propTypes = {
  children: PropTypes.node.isRequired,
  selector: PropTypes.any,
}

export default ModalPortal
