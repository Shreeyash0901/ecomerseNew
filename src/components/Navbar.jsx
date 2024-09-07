import React from 'react';
import logo from '../Asset/ai-generated-8772215_1280.png';
import { IoMdSearch } from 'react-icons/io';
import { FaCartShopping } from 'react-icons/fa6';
import DarkMode from './DarkMode';
import { FaCaretDown } from 'react-icons/fa';

const Menu = [
  { id: 1, name: 'Home', link: '/#' },
  { id: 2, name: 'Top Rated', link: '/#services' },
  { id: 3, name: 'Kids wear', link: '/#' },
  { id: 4, name: 'Mens wear', link: '/#' },
];

const DropdownLinks = [
  { id: 1, name: 'Trending Products', link: '/#' },
  { id: 2, name: 'Best Selling', link: '/#' },
  { id: 3, name: 'Top Rated', link: '/#' },
];

const Navbar = ({handleOrderPopup}) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 duration-200 relative z-40">
      {/* upper navbar */}
      <div className="bg-primary/40 dark:bg-gray-800 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2 text-gray-800 dark:text-white">
              <img src={logo} alt="logo" className="w-10" />
              BuyIt
            </a>
          </div>

          {/* search bar and other */}
          <div className="flex justify-between gap-4 items-center">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-primary dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 dark:text-white" />
            </div>
            {/* order button */}
            <button
              onClick={()=>handleOrderPopup()}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">Order</span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* dark mode switch */}
            <div >
              <DarkMode />
            </div>
          </div>
        </div>
      </div>

      {/* lower navbar */}
      <div 
      data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                className="inline-block px-4 hover:text-primary duration-200 dark:text-white"
                href={data.link}
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Dropdown and links */}
          <li className="group relative cursor-pointer">
            <a className="flex items-center gap-[2px] py-2 dark:text-white" href="#">
              Trending Products
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180 dark:text-white" />
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white dark:bg-gray-800 p-2 text-black dark:text-white shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 dark:hover:bg-gray-700"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
