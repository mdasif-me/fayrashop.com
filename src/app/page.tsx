import { Accessories, Hero, Products, PromotionCard, PuturesProduct, Service } from '@/container'
import Category from '../container/category'

const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      <Products />
      <Category />
      <PuturesProduct />
      <PromotionCard />
      <Accessories />
    </div>
  )
}

export default Home
