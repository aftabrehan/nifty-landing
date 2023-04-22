import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import clsx from 'clsx'

import stl from './Badge.module.scss'

const Badge = ({ children, customClass }) => {
  const { isDark } = useSelector(state => state.appearance)

  return (
    <button className={clsx(stl.badge, isDark && stl.dark, customClass)}>
      {children}
    </button>
  )
}

Badge.propTypes = { children: PropTypes.node, customClass: PropTypes.string }

export default Badge
