import { useSelector } from 'react-redux'
import clsx from 'clsx'

import Header from 'components/header'
import Footer from 'components/footer'

import stl from './Home.module.scss'

const Home = () => {
  const { isDark } = useSelector(state => state.appearance)

  return (
    <div className={clsx(stl.wrapper, isDark && stl.dark)}>
      <Header />
      <Footer />
    </div>
  )
}

export default Home
