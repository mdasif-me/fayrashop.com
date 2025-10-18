import {
  Accessories,
  Hero,
  Macbook,
  Overall,
  Products,
  PromotionCard,
  PuturesProduct,
  Service,
} from '@/container'
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
      <Macbook />
      <Overall />
    </div>
  )
}

export default Home
