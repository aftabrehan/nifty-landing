import { useEffect } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import Modal from 'components/modal'
import DialogFooter from './DialogFooter'
import DialogHeader from './DialogHeader'

import { generateRandomString } from 'lib/utils'

import stl from './Dialog.module.scss'

const Dialog = ({
  id = generateRandomString(),
  isOpen,
  close,
  children,
  rounded = true,
  size = 'normal',
  blur,
  closeOnClickAway,
  customClass,
  animation = 'bounce',
}) => {
  useEffect(() => {
    const handleEsc = e =>
      e.keyCode === 27 && isOpen && !closeOnClickAway && close()

    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [close, closeOnClickAway, isOpen])

  console.log(isOpen)
  console.log(close)

  return (
    <Modal
      isOpen={isOpen}
      close={close}
      blur={blur}
      closeOnClickAway={closeOnClickAway}
    >
      <div
        id={id}
        className={clsx(
          stl.container,
          rounded && stl.rounded,
          stl[animation],
          stl[`${size}Size`],
          customClass
        )}
      >
        {children}
      </div>
    </Modal>
  )
}

Dialog.propTypes = {
  id: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  blur: PropTypes.bool,
  closeOnClickAway: PropTypes.bool,
  customClass: PropTypes.string,
  animation: PropTypes.oneOf([
    'blowUp',
    'bounce',
    'jump',
    'fallFromTop',
    'growFromBottom',
    'slideFromLeft',
    'slideFromRight',
    'rotateFromLeftTop',
    'rotateFromLeftBottom',
    'rotateFromRightTop',
    'rotateFromRightBottom',
  ]),
}

export default Object.assign(Dialog, {
  Header: DialogHeader,
  Footer: DialogFooter,
})
