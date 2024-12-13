import { Link } from "react-router"
import useAuth from "../hooks/useAuth"


const UserDropdown = () => {
    const {user, Logout} = useAuth();
    const handleLogout =()=>{
        Logout()
    }
  return (
    <div className="dropdown dropdown-end ">
  <div tabIndex={0} role="button" className="m-1 btn"><div className="avatar">
  <div className="w-10 rounded-full ring ">
    <img src={`${user?.photoURL || "/public/user.png"}`} />
  </div>
</div>
</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <Link>Dashboard</Link>
    <button onClick={handleLogout} className="btn btn-primary btn-outline btn-sm">Logout</button>
  </ul>
</div>
  )
}

export default UserDropdown
