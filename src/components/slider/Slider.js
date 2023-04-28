import { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import clsx from 'clsx'

import Card from 'components/card'

import AngleIcon from 'assets/svg/angle.svg'

import stl from './Slider.module.scss'
import Button from 'components/button'

const Slider = ({ slideLength = 10, type = 'medium', customClass }) => {
  const { isDark } = useSelector(state => state.appearance)

  const category = ['Architecture', 'Photography', 'Games', 'Music']

  const [currentPosition, setCurrentPosition] = useState(0)
  const [slidesPerPage, setSlidesPerPage] = useState(4)
  const [activeCategory, setActiveCategory] = useState(category[1])

  const slidesCount = slideLength - slidesPerPage
  const currentMargin = -currentPosition * (100 / slidesPerPage)

  const containerRef = useRef(null)

  useEffect(() => {
    const handleResize = () => setParams(containerRef.current.offsetWidth)

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const setParams = w => {
    if (w < 551) setSlidesPerPage(1)
    else if (w < 901) setSlidesPerPage(2)
    else if (w < 1101) setSlidesPerPage(3)
    else setSlidesPerPage(4)
  }

  const handleSlideRight = () => {
    if (currentPosition !== 0) setCurrentPosition(currentPosition - 1)
  }

  const handleSlideLeft = () => {
    if (currentPosition !== slidesCount) setCurrentPosition(currentPosition + 1)
  }

  return (
    <div
      className={clsx(stl.wrapper, stl[type], isDark && stl.dark, customClass)}
    >
      <h2>
        {type === 'medium'
          ? 'Most Popular Live Actions'
          : 'Latest Live Actions'}
      </h2>

      {type === 'medium' && (
        <div className={stl.category}>
          {category.map(label => (
            <Button
              key={label}
              label={label}
              variant="secondary"
              onClick={() => setActiveCategory(label)}
              customClass={clsx(activeCategory === label && stl.active)}
            />
          ))}
        </div>
      )}

      <div ref={containerRef} className={stl.container}>
        <button className={stl.swipeBtns} onClick={handleSlideRight}>
          <AngleIcon />
        </button>

        <div className={stl.slider} style={{ marginLeft: `${currentMargin}%` }}>
          {Array.from({ length: slideLength }).map((_, i) => (
            <Card key={i} customClass={stl.card} size={type} />
          ))}
        </div>

        <button className={stl.swipeBtns} onClick={handleSlideLeft}>
          <AngleIcon />
        </button>
      </div>

      {type === 'medium' && <Button label="Show More" variant="secondary" />}
    </div>
  )
}

Slider.propTypes = {
  slideLength: PropTypes.number,
  type: PropTypes.oneOf(['mini', 'medium', 'large']),
  customClass: PropTypes.string,
}

export default Slider
