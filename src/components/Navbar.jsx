import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../media/logo.png';
import { HashLink as Link } from 'react-router-hash-link';

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-green-400 ">
      <img
        className="md:w-60 md:h-64 sm:w-32 sm:h-40 pt-6"
        src={logo}
        alt="logo"
      />
      <ul className="hidden md:flex">
        <li className="p-4 hover:text-black">
          <NavLink to="/">Home</NavLink>{' '}
        </li>
        <li className="p-4 hover:text-black">
          <Link to="#services">Services</Link>{' '}
        </li>
        <li className="p-4 hover:text-black">
          <Link to="#about">About</Link>
        </li>
        <li className="p-4 hover:text-black">
          <Link to="#testimonial">Testimonial</Link>{' '}
        </li>
        <li className="p-4 hover:text-black">
          <Link to="#contact">Contact us</Link>{' '}
        </li>
      </ul>
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {/* Mobile Menu */}
      <div
        className={
          nav
            ? 'fixed left-0 top-0 w-[60%] border-r h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'fixed left-[-100%]'
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          Innovatix.
        </h1>

        <ul className=" uppercase p-4">
          <li className="p-4 border-b border-gray-600">
            <NavLink to="/" onClick={closeNav}>
              Home
            </NavLink>{' '}
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="#services" onClick={closeNav}>
              Services
            </Link>{' '}
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="#about" onClick={closeNav}>
              About
            </Link>{' '}
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="#testimonial" onClick={closeNav}>
              Testimonial
            </Link>{' '}
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="#contactx" onClick={closeNav}>
              Contact us
            </Link>{' '}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
