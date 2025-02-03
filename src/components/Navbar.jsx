import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for mobile menu
import logo from "../assets/HammadLogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1f242b] text-white w-full px-6 md:px-8 py-4 flex items-center justify-between sticky top-0 z-[1000]">
      {/* LOGO - Clickable to go Home */}
      <Link to="/">
        <img src={logo} className="h-14 cursor-pointer" alt="Hammad Logo" />
      </Link>

      {/* DESKTOP NAV LINKS */}
      <div className="hidden md:flex space-x-6 font-bold text-lg">
        <Link to="/" className="hover:text-[#2ad882] transition">Home</Link>
        <Link to="/about" className="hover:text-[#2ad882] transition">About</Link>
        <Link to="/project" className="hover:text-[#2ad882] transition">Projects</Link>
        <Link to="/contact" className="hover:text-[#2ad882] transition">Contact</Link>
      </div>

      {/* MOBILE MENU ICON */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="navbar-links absolute top-16 left-0 w-full bg-[#1f242b] text-center flex flex-col space-y-4 py-6 shadow-lg md:hidden">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-[#2ad882] transition">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-[#2ad882] transition">About</Link>
          <Link to="/project" onClick={() => setIsOpen(false)} className="hover:text-[#2ad882] transition">Projects</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-[#2ad882] transition">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
