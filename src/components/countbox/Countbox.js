import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import clsx from 'clsx'

import UsersActiveIcon from 'assets/svg/user.svg'
import ArtworksIcon from 'assets/svg/artwork.svg'
import PaintPlateIcon from 'assets/svg/paint-plate.svg'
import WalletIcon from 'assets/svg/wallet.svg'

import stl from './Countbox.module.scss'

const Countbox = () => {
  const { isDark } = useSelector(state => state.appearance)

  const Item = ({ icon, value, label }) => (
    <div className={stl.item}>
      {icon}
      <h4>{value}</h4>
      <span>{label}</span>
    </div>
  )

  Item.propTypes = {
    icon: PropTypes.node,
    value: PropTypes.string,
    label: PropTypes.string,
  }

  return (
    <div className={clsx(stl.container, isDark && stl.dark)}>
      <Item icon={<UsersActiveIcon />} value="300k" label="Users Active" />
      <Item icon={<ArtworksIcon />} value="52,5k" label="Artworks" />
      <Item icon={<PaintPlateIcon />} value="17,5k" label="Artists" />
      <Item icon={<WalletIcon />} value="35.58" label="ETH Spent" />
    </div>
  )
}

export default Countbox
