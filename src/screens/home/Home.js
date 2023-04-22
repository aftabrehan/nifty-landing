import Head from 'next/head'
import { useSelector } from 'react-redux'
import clsx from 'clsx'

import Header from 'components/header'
import Footer from 'components/footer'
import Intro from 'components/sections/intro'
import Feature from 'components/sections/feature'
import Countbox from 'components/countbox'
import EthRow from 'components/eth-row'
import Badge from 'components/badge'

import stl from './Home.module.scss'

const Home = () => {
  const { isDark } = useSelector(state => state.appearance)

  return (
    <div className={clsx(stl.wrapper, isDark && stl.dark)}>
      <Head>
        <title>Nifty - Market Your NFTs</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Header />
      <Intro />
      <Badge>3.19 ETH</Badge>

      <Feature />
      <Feature
        title={
          <>
            Market Your
            <br /> Unique
            <br /> NFT
          </>
        }
        description="Reach a wider audience and promote your unique NFT with our powerful marketing tools."
        src="/assets/png/market-nft.png"
        showKeyPoints
        swap
      />
      <Countbox />
      <EthRow />
      <Footer />
    </div>
  )
}

export default Home
