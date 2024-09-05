import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../Contex';

function Navbar({ onloginClick }) {
  const items = useContext(StoreContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex sticky top-0 z-10 bg-white shadow-md flex-row items-center justify-between px-4">
      <div className="logo">
        <Link to='/'>
          <img src={assets.logo} alt="Logo" className="h-10" style={{ height: '70px' }} />
        </Link>
      </div>

      {/* Menu items for larger screens */}
      <div className="hidden md:flex space-x-4">
        <Link to="/" className="hover:text-orange-500">
          Home
        </Link>
        <Link to="/menu" className="hover:text-orange-500">
          Menu
        </Link>
        <Link to="/contact" className="hover:text-orange-500">
          Contact us
        </Link>
        <Link to="/about" className="hover:text-orange-500">
          About us
        </Link>
      </div>

      {/* Mobile cart and hamburger icon */}
      <div className="md:hidden flex items-center space-x-4">
        <Link to="/cart">
          <div className="relative">
            {Object.keys(items.cartItems).length > 0 && (
              <p className="absolute top-0 left-4 flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                {Object.keys(items.cartItems).length}
              </p>
            )}
            🛒
          </div>
        </Link>
        <button
          onClick={toggleMenu}
          className="text-orange-700 hover:text-orange-500 focus:outline-none"
        >
          {isMenuOpen ? '×' : '☰'}
        </button>
      </div>

      {/* Cart and Sign In button for larger screens */}
      <div className="hidden md:flex flex-row items-center justify-around gap-8">
        <Link to="/cart">
          <div className="relative">
            {Object.keys(items.cartItems).length > 0 && (
              <p className="absolute top-0 left-3 flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                {Object.keys(items.cartItems).length}
              </p>
            )}
            🛒
          </div>
        </Link>
        <button
          onClick={onloginClick}
          type="button"
          className="text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-2xl text-sm px-6 py-1.5 text-center dark:border-orange-500 dark:text-orange-500 dark:hover:text-white dark:hover:bg-orange-600 dark:focus:ring-orange-900"
        >
          Sign In
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link to="/" className="hover:text-orange-500">
              Home
            </Link>
            <Link to="/menu" className="hover:text-orange-500">
              Menu
            </Link>
            <Link to="/contact" className="hover:text-orange-500">
              Contact us
            </Link>
            <Link to="/about" className="hover:text-orange-500">
              About us
            </Link>
            <button
              onClick={onloginClick}
              type="button"
              className="text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-2xl text-sm px-6 py-1.5 text-center dark:border-orange-500 dark:text-orange-500 dark:hover:text-white dark:hover:bg-orange-600 dark:focus:ring-orange-900"
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
