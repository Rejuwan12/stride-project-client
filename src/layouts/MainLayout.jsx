import { Outlet } from "react-router"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


function MainLayout() {
  return (
    <div >
      <div>
        <Navbar/>
      </div>
      <div className="min-h-screen">
      <Outlet/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default MainLayout
