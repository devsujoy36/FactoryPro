import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className="bg-gray-500 text-white font-semibold">
      <nav className="flex justify-between items-center max-w-screen-2xl mx-auto">
          <div id="nav-logo" className="">
            <img src="/public/assets/Header/navlogo.png" alt="" />
          </div>
          <div id="nav-menu" className=" flex justify-center items-center gap-4">
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'}>About Us</NavLink>
            <NavLink to={'/services'}>Services</NavLink>
            <NavLink to={'/blogs'}>Blogs</NavLink>
            <NavLink to={'/projects'}>Projects</NavLink>
            <NavLink to={'/page'}>Page</NavLink>
            <NavLink to={'/contact'}>Contact Us</NavLink>
            <NavLink to={'/'} className="flex gap-2">
              <img src="/public/assets/Header/call.png" alt="" />
              <span>+01303436299</span>
            </NavLink>
          </div>
      </nav>
    </div>
  )
}

export default Header