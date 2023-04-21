import { useSelector } from 'react-redux'
import clsx from 'clsx'

import SearchBar from 'components/search-bar'

import MiniLogo from 'assets/svg/mini-logo.svg'
import GreenHalfIcon from 'assets/svg/green-half.svg'
import RitterSportLogo from 'assets/svg/ritter-sport.svg'
import NikeLogo from 'assets/svg/nike.svg'
import AdidasLogo from 'assets/svg/adidas.svg'
import NewHollandLogo from 'assets/svg/new-holland.svg'

import stl from './Intro.module.scss'

const Intro = () => {
  const { isDark } = useSelector(state => state.appearance)

  return (
    <div className={clsx(stl.container, isDark && stl.dark)}>
      <span>Non Fungible Tokens</span>
      <h1>
        A new NFT
        <GreenHalfIcon />
      </h1>
      <h1>
        <MiniLogo />
        Experience
      </h1>
      <span>Discover, Collect and Sell.</span>

      <SearchBar />

      <div className={stl.companiesLogos}>
        <RitterSportLogo />
        <NikeLogo />
        <AdidasLogo />
        <NewHollandLogo />
      </div>
    </div>
  )
}

export default Intro
