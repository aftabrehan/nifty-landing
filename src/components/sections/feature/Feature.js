import Image from 'next/image'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import clsx from 'clsx'

import Para from 'components/para'
import Button from 'components/button'

import ExposureIcon from 'assets/svg/exposure.svg'
import BrandIcon from 'assets/svg/brand.svg'

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
        <h1>{title}</h1>
        <Para>{description}</Para>

        {showKeyPoints && (
          <div className={stl.keypoints}>
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
          </div>
        )}

        <div className={stl.btnBox}>
          <Button label="Get Started" />
          <Button label="Learn More" variant="secondary" />
        </div>
      </div>

      <div className={stl.right}>
        <Image src={src} width={684} height={616} />
      </div>
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
