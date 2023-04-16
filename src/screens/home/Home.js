import Button from 'components/button'
import stl from './Home.module.scss'

const Home = () => (
  <div className={stl.wrapper}>
    <h1>Nifty Landing</h1>

    <Button label="Contact" variant="secondary" />
    <Button label="My account" />
    <Button label="Home" link="/" />
  </div>
)

export default Home
