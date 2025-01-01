import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className="bg-black text-white font-semibold py-6">
      <nav className="flex justify-between items-center max-w-screen-2xl mx-auto">
          <div id="nav-logo" className="">
            <img src="/public/assets/Header/navlogo.png" alt="" />
          </div>
          <div id="nav-menu" className=" flex justify-center items-center gap-10">
            <NavLink to={'/'} className="active:scale-95 hover:text-[#FF9900] transition-all">Home</NavLink>
            <NavLink to={'/about'} className="active:scale-95 hover:text-[#FF9900] transition-all">About Us</NavLink>
            <NavLink to={'/services'} className="active:scale-95 hover:text-[#FF9900] transition-all">Services</NavLink>
            <NavLink to={'/blogs'} className="active:scale-95 hover:text-[#FF9900] transition-all">Blogs</NavLink>
            <NavLink to={'/projects'} className="active:scale-95 hover:text-[#FF9900] transition-all">Projects</NavLink>
            <NavLink to={'/page'} className="active:scale-95 hover:text-[#FF9900] transition-all">Page</NavLink>
            <NavLink to={'/contact'} className="active:scale-95 hover:text-[#FF9900] transition-all">Contact Us</NavLink>
            <NavLink to={'/'} className="flex gap-2">
              <img className="w-6 active:scale-95 transition-all" src="/public/assets/Header/call.png" alt="" />
              <span className="active:scale-95 hover:text-[#FF9900] transition-all">+01303436299</span>
            </NavLink>
          </div>
      </nav>
    </div>
  )
}

export default Header