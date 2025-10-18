import { Accessories, Hero, Products, PuturesProduct, Service } from '@/container'
import Category from '../container/category'

const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      <Products />
      <Category />
      <PuturesProduct />
      <Accessories />
    </div>
  )
}

export default Home
