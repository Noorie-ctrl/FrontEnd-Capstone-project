import { Heart, Search, ShoppingCart, ChevronDown, Menu, User } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useCart } from "./CartContext";

export default function Navbar() {
  const { user, logout, favorites } = useAuth(); // ✅ use user
  const [open, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("English");
  const [isMenu, setIsMenu] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { badgeCount, clearBadge } = useCart(); // ✅ use badgeCount + clearBadge
  const navigate = useNavigate();

  function handleMenu() {
    setIsMenu((prev) => !prev);
  }

  function handleOpen() {
    setIsOpen((prev) => !prev);
  }

  function handleLanguageChange(lang) {
    setLanguage(lang);
    setIsOpen(false);
  }

  // ✅ When cart is clicked → clear badge and go to cart page
  function handleCartClick() {
    clearBadge();
    navigate("/Cart");
  }

  return (
    <>
      <div className="p-2 bg-black flex justify-evenly">
        <h1 className="text-xs md:text-sm text-white">
          Summer sale for all swim suits and free Express Delivery - off 50%!{" "}
          <span className="font-bold">Shop Now!</span>
        </h1>
        <div className="relative cursor-pointer flex items-center">
          <h1 className="text-white text-xs md:text-sm">{language}</h1>
          <ChevronDown onClick={handleOpen} className="text-white w-4 h-4" />
          {open && (
            <ul className="absolute top-6 right-[2rem] md:left-[10rem] space-y-2 text-center p-3 bg-white z-50 text-black rounded shadow-md w-24">
              <li
                onClick={() => handleLanguageChange("English")}
                className="hover:bg-gray-200 cursor-pointer"
              >
                English
              </li>
              <li
                onClick={() => handleLanguageChange("Yoruba")}
                className="hover:bg-gray-200 cursor-pointer"
              >
                Yoruba
              </li>
              <li
                onClick={() => handleLanguageChange("Hausa")}
                className="hover:bg-gray-200 cursor-pointer"
              >
                Hausa
              </li>
            </ul>
          )}
        </div>
      </div>

      <div className="flex justify-evenly md:mt-[3rem] mt-[2rem]">
        <h1 className="text-xl font-black">Exclusive</h1>

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <ul className="flex gap-6 text-base">
            <NavLink 
            className={({ isActive }) => isActive ? "text-gray-700 font-black border-b-1 border-red-500" : "text-gray-400"}
            to="/">Home</NavLink>
             
            <NavLink 
            className={({ isActive }) => isActive ? "text-gray-700 font-black border-b-1 border-red-500" : "text-gray-400"}
            to="/Contact">
              Contact
              </NavLink>

            <NavLink 
              className={({ isActive }) => isActive ? "text-gray-700 font-black border-b-1 border-red-500" : "text-gray-400"}
              to="/About">
                About
                </NavLink>

            {!user ? (
              <NavLink 
                className={({ isActive }) => isActive ? "text-gray-700 font-black border-b-1 border-red-500" : "text-gray-400"}
                to="/SignUp">
                  Sign Up
                  </NavLink>
            ) : (
              <div
                className="relative"
                onClick={() => setUserMenuOpen((prev) => !prev)}
              >
                <div className="flex items-center gap-2 cursor-pointer">
                  <User className="w-6 h-6 text-gray-700 hover:bg-red-500 rounded-full p-1 hover:text-white" />
                  <span className="text-sm font-medium">
                    {user.name || user.email}
                  </span>
                </div>

                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-[20rem] bg-gradient-to-r from-black to-purple-600 shadow-lg rounded-md z-50">
                    <ul className="flex flex-col text-white">
                      <NavLink 
                        className={({ isActive }) => isActive ? "text-gray-700 font-black border-b-1 border-red-500" : "text-gray-400"}
                      to="/Profile">
                        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                          Manage my Account
                        </li>
                      </NavLink>
                      <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                        My Order
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                        My cancellations
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                        My Reviews
                      </li>
                      <li
                        onClick={logout}
                        className="px-4 py-2 hover:bg-red-500 cursor-pointer"
                      >
                        Logout
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </ul>
        </div>

        {/* Mobile Menu */}
        {isMenu && (
          <div className="flex md:hidden absolute z-50 shadow-purple-400/50 bottom-[18rem] left-[10rem] bg-white shadow-md rounded-md p-4">
            <ul className="flex flex-col gap-4 text-base">
              <NavLink
                className={({ isActive }) => isActive ? "text-gray-700 font-black border-b-1 border-red-500" : "text-gray-400"}
                 to="/">
                  Home
                  </NavLink>

              <NavLink 
                 className={({ isActive }) => isActive ? "text-gray-700 font-black border-b-1 border-red-500" : "text-gray-400"}
                  to="/Contact">
                    Contact
                    </NavLink>

              <NavLink 
                 className={({ isActive }) => isActive ? "text-gray-700 font-black border-b-1 border-red-500" : "text-gray-400"}
                 to="/About">
                  About
                  </NavLink>

              {!user ? (
                <NavLink 
                  className={({ isActive }) => isActive ? "text-gray-700 font-black border-b-1 border-red-500" : "text-gray-400"}
                   to="/SignUp">
                    Sign Up
                    </NavLink>
              ) : (
                <div
                  className="relative"
                  onClick={() => setUserMenuOpen((prev) => !prev)}
                >
                  <div className="flex items-center gap-2 cursor-pointer">
                    <User className="w-6 h-6 text-gray-700 hover:bg-red-500 rounded-full p-1 hover:text-white" />
                    <span className="text-sm font-medium">
                      {user.name || user.email}
                    </span>
                  </div>

                  {userMenuOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-gradient-to-r from-black to-purple-600 shadow-lg rounded-md z-50">
                      <ul className="flex flex-col text-white">
                       <Link to="/Profile"><li className="px-4 py-2 hover:bg-black cursor-pointer">
                          Manage my Account
                        </li></Link>
                        <li className="px-4 py-2 hover:bg-black cursor-pointer">
                          My Order
                        </li>
                        <li className="px-4 py-2 hover:bg-black cursor-pointer">
                          My cancellations
                        </li>
                        <li className="px-4 py-2 hover:bg-black cursor-pointer">
                          My Reviews
                        </li>
                        <li
                          onClick={logout}
                          className="px-4 py-2 hover:bg-red-500 cursor-pointer"
                        >
                          Logout
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </ul>
          </div>
        )}

        {/* Search + Icons */}
        <div className="flex gap-[3rem]">
          <div className="hidden md:block relative w-full">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full bg-slate-200 rounded-md pl-3 pr-10 py-1"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-black w-4 h-4" />
          </div>

          <div className="flex gap-3 md:gap-[1rem]">
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="md:hidden relative"
            >
              <Menu onClick={handleMenu} className="w-6 h-6" />
            </motion.div>
            <div className="relative">
              <Heart className="w-6 h-6 text-gray-700 hover:text-red-500" />
              {favorites.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {favorites.length}
                </span>
              )}
            </div>

            <div className="relative cursor-pointer" onClick={handleCartClick}>
              <ShoppingCart className="w-6 h-6" />
              {badgeCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {badgeCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="flex p-3 md:hidden relative w-full">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="w-full bg-slate-200 rounded-full pl-3 pr-10 py-2"
        />
        <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-black w-4 h-4" />
      </div>
      <hr className="text-gray-300 mt-5" />
    </>
  );
}
