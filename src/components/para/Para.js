import PropTypes from 'prop-types'
import clsx from 'clsx'

import stl from './Para.module.scss'

const Para = ({
  children,
  variant = 'secondary',
  size = 'medium',
  customClass,
}) => (
  <p className={clsx(stl.para, stl[variant], stl[size], customClass)}>
    {children}
  </p>
)

Para.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  customClass: PropTypes.string,
}

export default Para
