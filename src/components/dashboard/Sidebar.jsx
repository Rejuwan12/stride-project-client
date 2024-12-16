import { Link } from "react-router"
import { GrOverview } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { SlLogout } from "react-icons/sl";
import useUserData from './../../hooks/useUserData';
import { MdOutlineInventory2} from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import useAuth from "../../hooks/useAuth";



const sellerRoutes =[
  {
  id:1,
  route:'/dashboard/my-products',
  title:"My Products",
  icon:<MdOutlineInventory2/>
  },
  {
  id:2,
  route:'/dashboard/add-products',
  title:"Add Products",
  icon:<IoIosAddCircleOutline/>
 },
]



const Sidebar = () => {
  const userData = useUserData();
  const {Logout} = useAuth();
 
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
        { 
          userData.role === 'seller' && sellerRoutes.map((route)=>(
            <li key={route.id} className="p-2 border border-black rounded-lg">
            <Link to={route.route} className="flex items-center gap-2"> <>{route.icon}</> {route.title}</Link>
        </li>
          ) )
        }
        <li className="p-2 border border-black rounded-lg" onClick={()=>Logout()}>
            <Link to={'/'} className="flex items-center gap-2"> <SlLogout /> Logout</Link>
        </li>
        
      </ul>
    </div>
  )
}

export default Sidebar
