import { useState } from 'react'
import { useSelector } from 'react-redux'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import SearchBar from 'components/search-bar'

import MiniLogo from 'assets/svg/mini-logo.svg'
import GreenHalfIcon from 'assets/svg/green-half.svg'
import RitterSportLogo from 'assets/svg/ritter-sport.svg'
import NikeLogo from 'assets/svg/nike.svg'
import AdidasLogo from 'assets/svg/adidas.svg'
import NewHollandLogo from 'assets/svg/new-holland.svg'

import { getCommonMotionProps } from 'lib/utils'

import stl from './Intro.module.scss'

const Intro = () => {
  const { isDark } = useSelector(state => state.appearance)
  const [animation, setAnimation] = useState(false)

  const motionProps = getCommonMotionProps(animation, setAnimation)

  return (
    <div className={clsx(stl.container, isDark && stl.dark)}>
      <motion.div {...motionProps}>
        <span>Non Fungible Tokens</span>
      </motion.div>
      <motion.div {...motionProps} transition={{ duration: 0.5, delay: 0.15 }}>
        <h1>
          A new NFT
          <GreenHalfIcon />
        </h1>
      </motion.div>
      <motion.div {...motionProps} transition={{ duration: 0.5, delay: 0.2 }}>
        <h1>
          <MiniLogo />
          Experience
        </h1>
      </motion.div>
      <motion.div {...motionProps} transition={{ duration: 0.5, delay: 0.25 }}>
        <span>Discover, Collect and Sell.</span>
      </motion.div>
      <motion.div
        {...motionProps}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={stl.width100}
      >
        <SearchBar />
      </motion.div>
      <motion.div
        {...motionProps}
        transition={{ duration: 0.5, delay: 0.35 }}
        className={stl.companiesLogos}
      >
        <RitterSportLogo />
        <NikeLogo />
        <AdidasLogo />
        <NewHollandLogo />
      </motion.div>
    </div>
  )
}

export default Intro
