import { useSelector } from 'react-redux'
import clsx from 'clsx'

import Header from 'components/header'
import Footer from 'components/footer'
import SearchBar from 'components/search-bar'

import stl from './Home.module.scss'

const Home = () => {
  const { isDark } = useSelector(state => state.appearance)

  return (
    <div className={clsx(stl.wrapper, isDark && stl.dark)}>
      <Header />
      <Footer />

      <SearchBar />
    </div>
  )
}

export default Home
