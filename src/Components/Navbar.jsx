import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiShoppingBag } from "react-icons/fi";
import AddToCart from './AddToCart';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black text-white h-14 flex items-center justify-between px-6 shadow-md z-50">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img 
          src="src/assets/Copilot_20260201_130406.png" 
          alt="logo" 
          className="h-8 w-8 rounded-full"
        />
        <span className="text-lg font-bold tracking-wide">E-commerce</span>
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex gap-6 text-sm font-medium">
        <li>
          <NavLink 
            to="/dashboard" 
            className={({ isActive }) => 
              isActive 
                ? "text-orange-400 relative after:absolute after:w-full after:h-0.5 after:bg-orange-400 after:left-0 after:-bottom-1" 
                : "hover:text-orange-300 transition"
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/service" 
            className={({ isActive }) => 
              isActive 
                ? "text-orange-400 relative after:absolute after:w-full after:h-0.5 after:bg-orange-400 after:left-0 after:-bottom-1" 
                : "hover:text-orange-300 transition"
            }
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive 
                ? "text-orange-400 relative after:absolute after:w-full after:h-0.5 after:bg-orange-400 after:left-0 after:-bottom-1" 
                : "hover:text-orange-300 transition"
            }
          >
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/blog" 
            className={({ isActive }) => 
              isActive 
                ? "text-orange-400 relative after:absolute after:w-full after:h-0.5 after:bg-orange-400 after:left-0 after:-bottom-1" 
                : "hover:text-orange-300 transition"
            }
          >
            Blogs
          </NavLink>
        </li>
      </ul>

      {/* Cart with badge */}
      <div className="flex items-center gap-4 relative">
        <div className="relative">
          <FiShoppingBag className="text-2xl cursor-pointer hover:text-orange-300 transition" />
          {/* Badge */}
         
        </div>
        <AddToCart />
      </div>
    </nav>
  )
}

export default Navbar
