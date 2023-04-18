import PropTypes from 'prop-types'
import clsx from 'clsx'

import Button from 'components/button'

import Logo from 'assets/svg/logo.svg'
import Hamburger from 'assets/svg/hamburger.svg'

import stl from './Header.module.scss'

const Header = ({ customClass }) => {
  const navLinks = ['Home', 'Roadmap', 'Discover', 'Community']

  return (
    <header className={clsx(stl.header, customClass)}>
      <div>
        <Logo />
      </div>

      <div className={stl.navLinks}>
        {navLinks.map(label => (
          <Button key={label} label={label} link="/" />
        ))}
      </div>

      <div className={stl.navBtns}>
        <Button label="Contact" variant="secondary" />
        <Button label="My account" />
        <Hamburger className={stl.hamburger} />
      </div>
    </header>
  )
}

Header.propTypes = {
  customClass: PropTypes.string,
}

export default Header
