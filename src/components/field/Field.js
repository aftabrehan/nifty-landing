import { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import stl from './Field.module.scss'

const Field = ({ customClass }) => {
  const [inputVal, setInputVal] = useState('')

  return (
    <form
      className={clsx(stl.container, customClass)}
      onSubmit={e => {
        e.preventDefault()
        setInputVal('')
      }}
    >
      <div className={stl.inputBox}>
        <input
          type="email"
          value={inputVal}
          onChange={e => setInputVal(e.target.value)}
          placeholder="NewsLetter"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          required
        />
      </div>

      <button className={stl.iconBox} type="submit">
        Subscribe
      </button>
    </form>
  )
}

Field.propTypes = {
  customClass: PropTypes.string,
}

export default Field
