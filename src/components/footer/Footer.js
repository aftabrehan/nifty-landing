import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import clsx from 'clsx'

import Button from 'components/button'
import Para from 'components/para'
import Field from 'components/field'

import LightLogo from 'assets/svg/logo.svg'
import DarkLogo from 'assets/svg/darkmode-logo.svg'
import FacebookIcon from 'assets/svg/facebook.svg'
import LinkedinIcon from 'assets/svg/linkedin.svg'
import GithubIcon from 'assets/svg/github.svg'
import TwitterIcon from 'assets/svg/twitter.svg'
import InstagramIcon from 'assets/svg/instagram.svg'

import stl from './Footer.module.scss'

const Footer = ({ customClass }) => {
  const { isDark } = useSelector(state => state.appearance)

  const navLinks = ['Home', 'Roadmap', 'Discover', 'Community']
  const socialLinks = [
    <FacebookIcon key={1} />,
    <LinkedinIcon key={2} />,
    <GithubIcon key={3} />,
    <TwitterIcon key={4} />,
    <InstagramIcon key={5} />,
  ]

  return (
    <footer className={clsx(stl.footer, isDark && stl.dark, customClass)}>
      <div className={stl.main}>
        <div className={stl.upperSection}>
          {isDark ? <DarkLogo /> : <LightLogo />}
          <Para size="small">
            Thanks for visiting our NFT landing page! We&apos;re here to share
            the latest in non-fungible tokens. Follow us on social media and
            sign up for our newsletter to stay updated. Got questions? Let us
            know - we&apos;re happy to help!
          </Para>
        </div>
        <div className={stl.secondaryLinks}>
          <Button label="Support" link="/" />
          <Button label="Term" link="/" />
          <Button label="License" link="/" />
        </div>
      </div>

      <div className={stl.primaryLinks}>
        <div className={stl.upperSection}>
          {navLinks.map(label => (
            <Button key={label} label={label} link="/" />
          ))}
          <Button label="My account" />
        </div>

        <div className={stl.socialLinks}>
          {socialLinks.map(icon => (
            <Button key={icon.key} link="/">
              {icon}
            </Button>
          ))}
        </div>
      </div>

      <div className={stl.buttons}>
        <Para size="small">
          Want to stay up-to-date on the latest in the world of NFTs? Sign up
          for our newsletter! You&apos;ll receive regular updates on new
          releases, featured artists, and exciting developments in the NFT
          space. Don&apos;t miss out - join our community today!
        </Para>

        <Field />
      </div>
    </footer>
  )
}

Footer.propTypes = {
  customClass: PropTypes.string,
}

export default Footer
