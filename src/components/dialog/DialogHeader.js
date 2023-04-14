import PropTypes from 'prop-types'
import clsx from 'clsx'

import Cross from 'assets/svg/cross.svg'

import stl from './Dialog.module.scss'

const DialogHeader = ({ title = 'Header', children, close, customClass }) => (
  <div className={clsx(stl.header, customClass)}>
    {children || (
      <>
        <button onClick={close}>
          <Cross />
        </button>

        <h3 className={stl.title}>{title}</h3>
      </>
    )}
  </div>
)

DialogHeader.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.node,
  onClick: PropTypes.func,
  customIconClass: PropTypes.string,
}

export default DialogHeader
