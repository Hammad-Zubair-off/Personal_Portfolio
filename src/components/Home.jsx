import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import pic from "../assets/ProfilePic.png"; // Profile picture
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import homeData from "../constants/Data.js"; // Import data from Data.js

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % homeData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + homeData.length) % homeData.length);
  };

  return (
    <div className="px-4 sm:px-6 md:px-10 py-12 md:py-20 h-auto min-h-screen w-full flex flex-col md:flex-row items-center justify-between bg-cover bg-center bg-[#1A1F24]">
      {/* RIGHT SECTION (IMAGE) */}
      <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2 mb-8 md:mb-0">
        <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#2ad882] shadow-lg">
          <img src={pic} alt="Hammad Zubair" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* LEFT SECTION */}
      <div className="w-full md:w-1/2 px-4 sm:px-20 text-center md:text-left order-2 md:order-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <p className="text-[#2ad882] text-lg md:text-xl mb-2">
              {homeData[currentIndex].greeting}
            </p>
            <h1 className="text-white font-semibold text-4xl sm:text-5xl md:text-6xl leading-none">
              {homeData[currentIndex].title}
            </h1>

            {/* Designation Box */}
            <div
              className="designationDiv w-56 md:w-64 flex h-12 mt-6 sm:mt-8 mx-auto sm:mx-0 pl-4 justify-between items-center border-2 border-[#2ad882] rounded-lg cursor-pointer"
              onClick={handleNext}
            >
              <p className="text-white font-bold text-sm md:text-base">
                {homeData[currentIndex].designation}
              </p>
              <span className="bg-[#2ad882] h-full w-12 flex justify-center items-center text-2xl rounded-r-lg">
                <FaArrowRightLong />
              </span>
            </div>

            <p className="text-gray-300 text-md md:text-lg mt-4 max-w-md mx-auto md:mx-0">
              {homeData[currentIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="flex justify-center md:justify-start mt-6 space-x-4">
          <button
            onClick={handlePrev}
            className="text-[#2ad882] bg-transparent border border-[#2ad882] p-2 rounded-full hover:bg-[#2ad882] hover:text-white transition"
          >
            <FaArrowLeftLong />
          </button>
          <button
            onClick={handleNext}
            className="text-[#2ad882] bg-transparent border border-[#2ad882] p-2 rounded-full hover:bg-[#2ad882] hover:text-white transition"
          >
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
