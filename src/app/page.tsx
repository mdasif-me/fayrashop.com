import { Hero, Products, PuturesProduct, Service } from '@/container'
import Category from '../container/category'

const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      <Products />
      <Category />
      <PuturesProduct />
    </div>
  )
}

export default Home
