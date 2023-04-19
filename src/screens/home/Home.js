import Header from 'components/header'
import Footer from 'components/footer'

import stl from './Home.module.scss'

const Home = () => (
  <div className={stl.wrapper}>
    <Header />
    <Footer />
  </div>
)

export default Home
