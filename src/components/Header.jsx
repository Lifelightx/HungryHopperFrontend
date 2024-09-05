import React from 'react';
import { Link } from 'react-router-dom';
import HeaderImg from '../assets/header_img.png'; // Make sure to update the path to your image

function Header() {
  return (
    <div
      className="relative bg-cover bg-center h-[440px] md:h-[300px] flex items-center px-4 md:px-8 w-[90vw] max-w-[1200px] m-auto rounded-xl mt-3"
      style={{ backgroundImage: `url(${HeaderImg})` }}
    >
      <div className="bg-black bg-opacity-30 p-4 md:p-6 rounded-2xl max-w-3xl text-center md:text-left">
        <h2 className='text-4xl md:text-6xl font-bold text-white mb-4'>
          Order Your Favorite Food Here
        </h2>
        <p className="text-gray-300 text-sm md:text-base mb-6">
          Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
        </p>
        <Link to='/menu'>
          <button
            type="button"
            className="focus:outline-none text-orange-500 bg-white hover:bg-black hover:text-orange-500 font-medium rounded-2xl text-sm px-4 py-2"
          >
            Menu
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
