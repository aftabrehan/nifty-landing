import Link from 'next/link'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import stl from './Button.module.scss'

const Button = ({
  label,
  link,
  target = '_self',
  onClick,
  variant = 'primary',
  children,
  customClass,
}) =>
  link ? (
    <Link href={link || ''}>
      <a target={target} className={stl.link}>
        {children || label}
      </a>
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={clsx(stl.btn, stl[variant], customClass)}
    >
      {children || label}
    </button>
  )

Button.propTypes = {
  label: PropTypes.string,
  link: PropTypes.string,
  target: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  customClass: PropTypes.string,
}

export default Button
