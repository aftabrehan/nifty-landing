import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import clsx from 'clsx'

import Feature from 'components/sections/feature'

import stl from './CTA.module.scss'

const CTA = ({ customClass }) => {
  const { isDark } = useSelector(state => state.appearance)

  return (
    <div className={clsx(stl.container, isDark && stl.dark, customClass)}>
      <div className={stl.head}>
        <div />
        <div />
        <div />
      </div>
      <Feature
        title={
          <>
            Course of life,
            <br /> solicitude until birth.
            <br /> Join now.
          </>
        }
        description="Join our platform today and start collecting, selling, and promoting unique NFTs. Don't miss out on this opportunity to be part of the digital asset revolution!"
        src={`/assets/png/users${isDark ? '-dark' : ''}.png`}
        customClass={stl.featureBox}
      />
    </div>
  )
}

CTA.propTypes = { customClass: PropTypes.string }

export default CTA
