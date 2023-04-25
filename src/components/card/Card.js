import { useState, useEffect } from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import clsx from 'clsx'

import Badge from 'components/badge'

import ClockIcon from 'assets/svg/clock.svg'
import HeartRedIcon from 'assets/svg/heart-red.svg'
import HeartOutlineIcon from 'assets/svg/heart-outline.svg'

import { getRandomNumber } from 'lib/utils'

import stl from './Card.module.scss'

const Card = ({ size = 'medium', customClass }) => {
  const { isDark } = useSelector(state => state.appearance)

  const [isLiked, setIsLiked] = useState(false)
  const [image, setImage] = useState('')
  const [users, setUsers] = useState([])
  const [peoples, setPeoples] = useState(35)

  useEffect(() => {
    setImage(`/assets/png/nfts/${getRandomNumber(1, 19)}.png`)
    setUsers([
      `/assets/png/people/${getRandomNumber()}.png`,
      `/assets/png/people/${getRandomNumber()}.png`,
      `/assets/png/people/${getRandomNumber()}.png`,
      `/assets/png/people/${getRandomNumber()}.png`,
    ])
    setPeoples(getRandomNumber(10, 999))
  }, [])

  return (
    <div
      className={clsx(
        stl.container,
        stl[size],
        isDark && stl.dark,
        customClass
      )}
    >
      <Image src={image} width={size === 'medium' ? 468 : 400} height={600} />

      <div className={stl.info}>
        <h5>Risk is truly an easy living for a sickly condition.</h5>
        <Badge>3.19 ETH</Badge>
      </div>

      <div className={stl.time}>
        <ClockIcon />
        22:59 min left
      </div>

      <div className={stl.divider} />

      <div className={stl.bidding}>
        <div className={stl.peoples}>
          {users.map(src => (
            <Image key={src} src={src} width={32} height={32} />
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
