import { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import AngleDownIcon from 'assets/svg/angle-down.svg'
import SearchIcon from 'assets/svg/search.svg'

import stl from './SearchBar.module.scss'

const SearchBar = ({ customClass }) => {
  const [inputVal, setInputVal] = useState('')
  const [selectedItem, setSelectedItem] = useState('Category')
  const [showMenu, setShowMenu] = useState('')

  const categoryList = [
    'Art',
    'Music',
    'Collectibles',
    'Gaming',
    'Sports',
    'Fashion',
  ]

  return (
    <div className={clsx(stl.container, customClass)}>
      <div className={stl.inputBox}>
        <input
          type="text"
          value={inputVal}
          onChange={e => setInputVal(e.target.value)}
          placeholder="Items, collections and creators"
        />
      </div>
      <button className={stl.category} onClick={() => setShowMenu(!showMenu)}>
        {selectedItem}
        <AngleDownIcon />

        <div className={clsx(stl.dropdown, showMenu && stl.show)}>
          {categoryList.map(category => (
            <button key={category} onClick={() => setSelectedItem(category)}>
              {category}
            </button>
          ))}
        </div>
      </button>
      <button className={stl.iconBox} onClick={() => setInputVal('')}>
        <SearchIcon />
      </button>
    </div>
  )
}

SearchBar.propTypes = {
  customClass: PropTypes.string,
}

export default SearchBar
