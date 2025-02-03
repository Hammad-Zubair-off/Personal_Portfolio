import React from "react";
import { socialLinks } from "../constants/Data"; // Import from Data.js

const SocialSidebar = () => {
  // Dynamically render icons based on data in Data.js
  const renderSocialIcons = socialLinks.map((link) => {
    const Icon = React.createElement(require("react-icons/fa")[link.icon]); // Dynamically create icon using the icon name string
    return (
      <a
        key={link.id}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center bg-[#1f242b] hover:bg-[#2ad882] w-10 h-10 rounded-r-lg transition-all duration-300 hover:translate-x-2"
      >
        <span className="text-xl text-white group-hover:text-black transition-colors duration-300">
          {Icon}
        </span>
      </a>
    );
  });

  return (
    <div className="fixed top-1/2 left-0 transform -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
      {renderSocialIcons}
    </div>
  );
};

export default SocialSidebar;
