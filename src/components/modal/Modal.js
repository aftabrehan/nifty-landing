import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import ModalPortal from './ModalPortal'

import { useClickOutside } from 'lib/hooks'

import stl from './Modal.module.scss'

const Modal = ({
  isOpen,
  close,
  children,
  blur,
  closeOnClickAway = true,
  customClass,
}) => {
  const contentRef = useRef()

  useClickOutside(contentRef, () => closeOnClickAway && close())

  useEffect(() => {
    if (!isOpen) return

    contentRef.current?.focus()
  }, [isOpen])

  if (!isOpen) return null

  return (
    <ModalPortal selector="#modal">
      <div
        className={clsx(stl.background, customClass)}
        style={{ backdropFilter: `blur(${blur ? '5px' : '0'})` }}
      >
        <div ref={contentRef}>{children}</div>
      </div>
    </ModalPortal>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  blur: PropTypes.bool,
  closeOnClickAway: PropTypes.bool,
  customClass: PropTypes.string,
}

export default Modal
