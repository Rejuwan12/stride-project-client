import { Link, NavLink } from "react-router"
import useAuth from './../hooks/useAuth';
import UserDropdown from "./UserDropdown";


const Navbar = () => {
  const {user} = useAuth();
  const navLinks = <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact-us">Contact Us</NavLink>
  </>
    
  
  return (
    <div className="navbar bg-base-200">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 gap-2 shadow">
        {navLinks}
      </ul>
    </div>
    <h2 className="text-xl btn btn-ghost">HABLU Gadget</h2>
  </div>
  <div className="hidden navbar-center lg:flex">
    <ul className="gap-2 px-1 menu menu-horizontal ">
      {navLinks}
    </ul>
  </div>
  {  user ? <div className="navbar-end"> <UserDropdown/> </div> : <div className="navbar-end">
    <div className="flex items-center gap-2">
      <Link to={"/login"}><button className="px-4 text-white bg-gray-400 border border-black rounded-md btn btn-primary">
      Login</button></Link>
      <Link to={"/register"}><button className="px-4 text-white bg-purple-500 border-none rounded-md btn btn-secondary">Register</button></Link>
    </div>
  </div> 
  }
</div>
  )
}

export default Navbar

