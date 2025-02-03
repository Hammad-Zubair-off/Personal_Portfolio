import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa"; 
import { projects, testimonials } from "../constants/Data"; // Import data from Data.js

const Project = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const totalTestimonials = testimonials.length;

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const getVisibleTestimonials = () => {
    return Array.from({ length: visibleCount }, (_, i) => testimonials[(startIndex + i) % totalTestimonials]);
  };

  const nextTestimonial = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
  };

  const prevTestimonial = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + totalTestimonials) % totalTestimonials);
  };

  return (
    <section className="bg-[#1A1F24] text-white py-16 px-6 md:px-20 relative overflow-hidden">
      {/* Project Cards */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold">Recent Projects</h2>
        <hr className="w-20 border-t-2 border-[#2ad882] mt-2 mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              className="relative cursor-pointer group overflow-hidden rounded-lg"
            >
              <div className="w-[full] h-64 relative rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#2ad882] transition-colors duration-300"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                </div>

                <p className="text-[#2ad882] mb-4">
                  <span className="font-semibold">Technologies:</span> {project.tech.join(", ")}
                </p>

                <p className="text-gray-300 text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <h2 className="text-3xl font-bold text-center">Happy Clients Say</h2>
      <hr className="w-20 border-t-2 border-[#2ad882] mt-2 mb-6 mx-auto" />

      <div className="relative flex justify-center items-center">
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#2ad882] p-3 rounded-full cursor-pointer z-10"
        >
          ❮
        </button>

        <motion.div
          key={startIndex}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
          className="flex gap-6 overflow-hidden w-full justify-center"
        >
          {getVisibleTestimonials().map((client) => (
            <div key={client.id} className="border-2 border-[#2ad882] p-6 rounded-lg w-64 shadow-lg text-center">
              <div className="flex flex-col items-center">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-20 h-20 rounded-full border-4 border-[#2ad882] mb-4"
                />
                <h3 className="text-lg font-bold">{client.name}</h3>
                <p className="text-[#2ad882]">{client.role}</p>
                <p className="text-gray-300 mt-2">{client.feedback}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#2ad882] p-3 rounded-full cursor-pointer z-10"
        >
          ❯
        </button>
      </div>
    </section>
  );
};

export default Project;
