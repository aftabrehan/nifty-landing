import { useState } from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import Para from 'components/para'
import Button from 'components/button'

import ExposureIcon from 'assets/svg/exposure.svg'
import BrandIcon from 'assets/svg/brand.svg'

import { getCommonMotionProps } from 'lib/utils'

import stl from './Feature.module.scss'

const Feature = ({
  title = (
    <>
      Effortless NFT
      <br /> Transactions
      <br /> for All
    </>
  ),
  description = 'Make transactions a breeze with our easy-to-use platform.',
  src = '/assets/png/effortless.png',
  showKeyPoints,
  swap,
  customClass,
}) => {
  const { isDark } = useSelector(state => state.appearance)
  const [animation, setAnimation] = useState(false)

  const motionProps = getCommonMotionProps(animation, setAnimation)

  return (
    <div
      className={clsx(
        stl.container,
        swap && stl.swap,
        isDark && stl.dark,
        customClass
      )}
    >
      <div className={stl.left}>
        <motion.div {...motionProps}>
          <h1>{title}</h1>
        </motion.div>
        <motion.div
          {...motionProps}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Para>{description}</Para>
        </motion.div>

        {showKeyPoints && (
          <motion.div
            {...motionProps}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={stl.keypoints}
          >
            <div className={stl.item}>
              <ExposureIcon />
              <h5>Your Exposure</h5>
              <Para size="small">Maximize Your Exposure</Para>
            </div>
            <div className={stl.item}>
              <BrandIcon />
              <h5>Your Brand</h5>
              <Para size="small">Grow Your Brand</Para>
            </div>
          </motion.div>
        )}

        <motion.div
          {...motionProps}
          transition={{ duration: 0.5, delay: 0.25 }}
          className={stl.btnBox}
        >
          <Button label="Get Started" />
          <Button label="Learn More" variant="secondary" />
        </motion.div>
      </div>

      <motion.div {...motionProps} className={stl.right}>
        <Image src={src} width={684} height={616} />
      </motion.div>
    </div>
  )
}
Feature.propTypes = {
  title: PropTypes.node,
  description: PropTypes.string,
  src: PropTypes.string,
  showKeyPoints: PropTypes.bool,
  swap: PropTypes.bool,
  customClass: PropTypes.string,
}

export default Feature
