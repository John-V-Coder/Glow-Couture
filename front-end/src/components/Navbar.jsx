import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Sample cart count - replace with your actual cart state
  const [cartCount, setCartCount] = useState(3);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50 px-4 md:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-yellow-600">
          GlowUp
        </Link>

        {/* Icons (Desktop) */}
        <div className="flex items-center gap-4 md:order-2">
          <Search className="cursor-pointer text-yellow-600 hover:text-yellow-700" />
          <Popover>
            <PopoverTrigger>
              <User className="cursor-pointer text-yellow-600 hover:text-yellow-700" />
            </PopoverTrigger>
            <PopoverContent className="w-32 p-2 flex flex-col gap-2">
              <Link to="/profile" className="hover:underline">Profile</Link>
              <Link to="/orders" className="hover:underline">Orders</Link>
              <Link to="/logout" className="hover:underline">Logout</Link>
            </PopoverContent>
          </Popover>
          <Link to="/cart" className="relative">
            <ShoppingCart className="cursor-pointer text-yellow-600 hover:text-yellow-700" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-8 mx-auto justify-center text-gray-800">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-yellow-600 font-semibold' : 'hover:text-yellow-600'}>Home</NavLink>
          <NavLink to="/collection" className={({ isActive }) => isActive ? 'text-yellow-600 font-semibold' : 'hover:text-yellow-600'}>Collection</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-yellow-600 font-semibold' : 'hover:text-yellow-600'}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-yellow-600 font-semibold' : 'hover:text-yellow-600'}>Contact</NavLink>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="text-yellow-600" />
            ) : (
              <Menu className="text-yellow-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Narrow, Right-Aligned with Border) */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-[60] border-l border-gray-200">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <p className="text-lg font-bold text-yellow-600">Menu</p>
            <button onClick={() => setIsMenuOpen(false)}>
              <X className="text-yellow-600" />
            </button>
          </div>
          <div className="p-4 space-y-3">
            <NavLink 
              to="/" 
              className="block py-2 px-3 rounded hover:bg-gray-50 border-l-2 border-transparent hover:border-yellow-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/collection" 
              className="block py-2 px-3 rounded hover:bg-gray-50 border-l-2 border-transparent hover:border-yellow-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Collection
            </NavLink>
            <NavLink 
              to="/about" 
              className="block py-2 px-3 rounded hover:bg-gray-50 border-l-2 border-transparent hover:border-yellow-500"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink 
              to="/contact" 
              className="block py-2 px-3 rounded hover:bg-gray-50 border-l-2 border-transparent hover:border-yellow-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
            <NavLink 
              to="/cart" 
              className="block py-2 px-3 rounded hover:bg-gray-50 border-l-2 border-transparent hover:border-yellow-500 flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;