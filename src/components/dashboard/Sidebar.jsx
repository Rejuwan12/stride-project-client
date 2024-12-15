import { Link } from "react-router"
import { GrOverview } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { SlLogout } from "react-icons/sl";

const Sidebar = () => {
  return (
    <div className="min-h-screen px-8 py-16 bg-gray-200 border-r-2 border-black">
        <h1 className="mb-8 text-2xl font-bold">Gadget Shop</h1>
      <ul className="flex flex-col gap-2">
        <li className="p-2 border border-black rounded-lg">
            <Link to={'/dashboard/overview'} className="flex items-center gap-2"> <GrOverview /> Overview</Link>
        </li>
        <li className="p-2 border border-black rounded-lg">
            <Link to={'/'} className="flex items-center gap-2"> <IoHomeOutline /> Home</Link>
        </li>
        {/* <li>
            <Link to={'/dashboard/my-products'}>My Products</Link>
        </li>
        <li>
            <Link to={'/dashboard/overview'}>Add Products</Link>
        </li> */}
        <li className="p-2 border border-black rounded-lg">
            <Link to={'/'} className="flex items-center gap-2"> <SlLogout /> Logout</Link>
        </li>
        
      </ul>
    </div>
  )
}

export default Sidebar
