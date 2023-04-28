import Image from 'next/image'
import { useSelector } from 'react-redux'
import clsx from 'clsx'

import Para from 'components/para'
import Button from 'components/button'
import Slider from 'components/slider'
import Card from 'components/card'

import stl from './GetStarted.module.scss'

const GetStarted = () => {
  const { isDark } = useSelector(state => state.appearance)

  return (
    <div className={clsx(stl.container, isDark && stl.dark)}>
      <div className={stl.card}>
        <h2>Check out the hottest Sale offers</h2>

        <div className={stl.content}>
          <Slider type="mini" />
        </div>

        <Button label="Show me More" variant="secondary" />
      </div>

      <div className={clsx(stl.card, stl.black)}>
        <Image src="/assets/png/hand.png" width={468} height={664} />

        <div className={stl.textBox}>
          <h2>Get started creating & selling your NFTs</h2>
          <Para size="small">
            Start your NFT journey today - create and sell your unique digital
            assets with ease!
          </Para>
        </div>

        <Button label="Get Started" />
      </div>

      <div className={stl.card}>
        <h2>Top NFT at a lower price</h2>

        <div className={stl.content}>
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} customClass={stl.card} type="tile" />
          ))}
        </div>

        <Button label="Show me More" variant="secondary" />
      </div>
    </div>
  )
}

export default GetStarted
