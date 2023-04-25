import { useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import Feature from 'components/sections/feature'

import { getCommonMotionProps } from 'lib/utils'

import stl from './CTA.module.scss'

const CTA = ({ customClass }) => {
  const { isDark } = useSelector(state => state.appearance)
  const [animation, setAnimation] = useState(false)

  const motionProps = getCommonMotionProps(animation, setAnimation)

  return (
    <motion.div
      {...motionProps}
      className={clsx(stl.container, isDark && stl.dark, customClass)}
    >
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
    </motion.div>
  )
}

CTA.propTypes = { customClass: PropTypes.string }

export default CTA
