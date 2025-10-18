import { Hero, Products, Service } from '@/container'
import Category from '../container/category'

const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      <Products />
      <Category />
    </div>
  )
}

export default Home
