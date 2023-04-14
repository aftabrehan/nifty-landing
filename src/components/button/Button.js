import PropTypes from 'prop-types'
import clsx from 'clsx'

import stl from './Button.module.scss'

const Button = ({ label, onClick, customClass }) => (
  <button onClick={onClick} className={clsx(stl.btn, customClass)}>
    {label}
  </button>
)

Button.defaultProps = {
  label: 'Button',
  onClick: () => console.log('clicked!'),
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  customClass: PropTypes.string,
}

export default Button
