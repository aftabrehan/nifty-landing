import Image from 'next/image'

import stl from './EthRow.module.scss'

const EthRow = () => (
  <div className={stl.container}>
    <Image src="/assets/png/ETH-row.png" width={2010} height={200} />
  </div>
)

export default EthRow
