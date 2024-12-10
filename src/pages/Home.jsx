import Banner from "../components/home/Banner"
import FeturedProducts from "../components/home/FeturedProducts"


const Home = () => {
  return (
    <div>
      <Banner/>
      <div className="my-24">
        <h1 className="mb-16 text-4xl font-semibold text-center">Featured Products</h1>
      <FeturedProducts/>
      </div>
    </div>
  )
}

export default Home
