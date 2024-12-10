import { Outlet } from "react-router"


function MainLayout() {
  return (
    <div>
      <div>Navbar</div>
      <Outlet/>
      <div>Footer</div>
    </div>
  )
}

export default MainLayout
