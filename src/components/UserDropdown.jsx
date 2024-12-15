
import useAuth from "../hooks/useAuth"
import { NavLink } from "react-router";


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
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow flex flex-col gap-2">
    
    <button className="btn btn-primary btn-outline btn-sm"><NavLink to={"/dashboard/overview"}>Dashboard</NavLink></button>
    <button onClick={handleLogout} className="btn btn-primary btn-outline btn-sm">Logout</button>
  </ul>
</div>
  )
}

export default UserDropdown
