import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { footerData } from "../constants/Data"; // Import footer data from Data.js

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Dynamically render icons based on data in Data.js
  const renderSocialIcons = footerData.socialLinks.map((link) => {
    const Icon = React.createElement(require("react-icons/fa")[link.icon]); // Dynamically create icon using the icon name string
    return (
      <a
        key={link.id}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center bg-[#1f242b] hover:bg-[#2ad882] w-10 h-10 rounded-lg transition-all duration-300"
      >
        <span className="text-xl text-white group-hover:text-black transition-colors duration-300">
          {Icon}
        </span>
      </a>
    );
  });

  return (
    <footer className="bg-[#1f242b] text-white py-16 px-6 md:px-20 text-center">
      <div className="flex flex-col items-center">
        {/* BRANDING & DESCRIPTION */}
        <div>
          <h2 className="text-4xl font-bold text-[#ffffff] mb-4">{footerData.branding}</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
            {footerData.description}
          </p>
        </div>

        {/* GET IN TOUCH LINK */}
        <div>
          <Link to="/contact">
            <button
              className="bg-[#2ad882] text-black font-semibold px-6 py-3 rounded-md hover:bg-[#25c26e] transition duration-300 ease-in-out"
            >
              Get In Touch
            </button>
          </Link>
        </div>

        {/* SOCIAL ICONS FOR MOBILE */}
        {isMobile && <div className="flex gap-4 mt-6">{renderSocialIcons}</div>}
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-600 mt-6 pt-4 text-gray-400 text-sm text-center">
        © {new Date().getFullYear()} Hammad's Portfolio. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
