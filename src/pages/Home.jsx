import Banner from "../components/home/Banner"
import FeturedProducts from "../components/home/FeturedProducts"
import UserReview from "../components/home/UserReview"
import Accordion from './../components/home/Accordion';


const Home = () => {
  return (
    <div>
      <Banner/>
      <div className="container mx-auto">
      <div className="my-24">
        <h1 className="mb-16 text-4xl font-semibold text-center">Featured Products</h1>
      <FeturedProducts/>
      <div className="my-24">
      <h1 className="mb-16 text-4xl font-semibold text-center">Users Review</h1>
        <UserReview/>
      </div>
      <div className="my-24">
      <h1 className="mb-16 text-4xl font-semibold text-center">Frequently Asked Questions</h1>
        <Accordion/>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Home
