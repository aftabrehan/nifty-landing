import { useState } from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import clsx from 'clsx'

import Badge from 'components/badge'

import ClockIcon from 'assets/svg/clock.svg'
import HeartRedIcon from 'assets/svg/heart-red.svg'
import HeartOutlineIcon from 'assets/svg/heart-outline.svg'

import { getRandomNumber, getRandomTime, getRandomPhrase } from 'lib/utils'

import stl from './Card.module.scss'

const Card = ({ size = 'medium', customClass }) => {
  const { isDark } = useSelector(state => state.appearance)

  const [isLiked, setIsLiked] = useState(false)
  const [imageIndex] = useState(getRandomNumber(1, 39))
  const [users] = useState([
    `/assets/png/people/${getRandomNumber()}.png`,
    `/assets/png/people/${getRandomNumber()}.png`,
    `/assets/png/people/${getRandomNumber()}.png`,
    `/assets/png/people/${getRandomNumber()}.png`,
  ])
  const [peoples] = useState(getRandomNumber(10, 999))
  const [time] = useState(getRandomTime())
  const [eth] = useState(getRandomNumber(100000, 100000000))
  const [title] = useState(getRandomPhrase())

  return (
    <div
      className={clsx(
        stl.container,
        stl[size],
        isDark && stl.dark,
        customClass
      )}
    >
      <Image
        src={`/assets/png/nfts/${imageIndex}.${
          imageIndex > 20 ? 'jpg' : 'png'
        }`}
        width={size === 'medium' ? 468 : 400}
        height={600}
      />

      <div className={stl.info}>
        <h5>{title}</h5>
        <Badge>{(eth / 1000000).toFixed(2)} ETH</Badge>
      </div>

      <div className={stl.time}>
        <ClockIcon />
        {time} min left
      </div>

      <div className={stl.divider} />

      <div className={stl.bidding}>
        <div className={stl.peoples}>
          {users.map((src, i) => (
            <Image key={i} src={src} width={32} height={32} />
          ))}
          <span>{peoples} people are bidding</span>
        </div>

        <button className={stl.iconBtn} onClick={() => setIsLiked(!isLiked)}>
          {isLiked ? <HeartRedIcon /> : <HeartOutlineIcon />}
        </button>
      </div>
    </div>
  )
}

Card.propTypes = {
  size: PropTypes.oneOf(['small', 'medium']),
  customClass: PropTypes.string,
}

export default Card
