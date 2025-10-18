import Hero from '../components/container/hero'
import Products from '../components/container/products'
import Service from '../components/container/service'

const Home = () => {
  return (
    <section>
      <div>
        <Hero />
      </div>
      <div>
        <Service />
      </div>
      <div>
        <Products />
      </div>
    </section>
  )
}

export default Home
