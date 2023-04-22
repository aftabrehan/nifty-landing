import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { getCommonMotionProps } from 'lib/utils'

import stl from './EthRow.module.scss'

const EthRow = () => {
  const [animation, setAnimation] = useState(false)

  const motionProps = getCommonMotionProps(animation, setAnimation)

  return (
    <motion.div {...motionProps} className={stl.container}>
      <Image src="/assets/png/ETH-row.png" width={2010} height={200} />
    </motion.div>
  )
}

export default EthRow
