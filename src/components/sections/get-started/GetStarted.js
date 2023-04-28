import { useState } from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import Para from 'components/para'
import Button from 'components/button'
import Slider from 'components/slider'
import Card from 'components/card'

import { getCommonMotionProps } from 'lib/utils'

import stl from './GetStarted.module.scss'

const GetStarted = () => {
  const { isDark } = useSelector(state => state.appearance)
  const [animation, setAnimation] = useState(false)

  const motionProps = getCommonMotionProps(animation, setAnimation)

  return (
    <div className={clsx(stl.container, isDark && stl.dark)}>
      <motion.div {...motionProps} className={stl.card}>
        <h2>Check out the hottest Sale offers</h2>

        <div className={stl.content}>
          <Slider customClass={stl.slider} type="mini" />
        </div>

        <Button label="Show me More" variant="secondary" />
      </motion.div>

      <motion.div
        {...motionProps}
        transition={{ duration: 0.5, delay: 0.15 }}
        className={clsx(stl.card, stl.black)}
      >
        <Image src="/assets/png/hand.png" width={468} height={664} />

        <div className={stl.textBox}>
          <h2>Get started creating & selling your NFTs</h2>
          <Para size="small">
            Start your NFT journey today - create and sell your unique digital
            assets with ease!
          </Para>
        </div>

        <Button label="Get Started" />
      </motion.div>

      <motion.div
        {...motionProps}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={stl.card}
      >
        <h2>Top NFT at a lower price</h2>

        <div className={stl.content}>
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} customClass={stl.card} type="tile" />
          ))}
        </div>

        <Button label="Show me More" variant="secondary" />
      </motion.div>
    </div>
  )
}

export default GetStarted
