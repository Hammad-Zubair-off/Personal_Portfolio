import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import { aboutData } from '../constants/Data'; // Import the aboutData from Data.js

const About = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const {
    name,
    title,
    description,
    image,
    buttons,
    skills,
    education,
  } = aboutData;

  // Handle button click
  const handleButtonClick = (button) => {
    if (button.download) {
      // Trigger file download
      const link = document.createElement("a");
      link.href = button.link;
      link.download = "HammadCV.pdf"; // Name of the downloaded file
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Redirect to the Contact page
      navigate(button.link);
    }
  };

  return (
    <section className="bg-[#1a1f24] text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center md:items-start gap-10">
      {/* Left Side - Sticky Image */}
      <div className="w-full md:w-auto flex justify-center md:block">
        <div className="relative w-72 h-80 md:w-96 md:h-[450px] sticky top-20">
          <img
            src={image}
            alt="Profile"
            className="w-full h-full object-cover rounded-lg border-4 border-[#2ad882] shadow-lg"
          />
        </div>
      </div>

      {/* Right Side - Scrollable Content */}
      <div className="md:ml-16 mt-10 md:mt-0 max-w-2xl w-full h-[450px] overflow-y-auto custom-scrollbar">
        {/* About Me */}
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <hr className="w-20 border-t-2 border-[#2ad882] mb-6" />
        <p className="text-gray-300 leading-relaxed text-lg">{description}</p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
          {buttons.map((button, index) => (
            <button
              key={index}
              className={`${button.className} font-semibold px-6 py-2 rounded-md hover:bg-[#25c26e] hover:text-black transition duration-300`}
              onClick={() => handleButtonClick(button)} // Handle button click
            >
              {button.label}
            </button>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold">Skills</h2>
          <hr className="w-20 border-t-2 border-[#2ad882] mt-2 mb-6" />
          <div className="mt-6 space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <p className="font-semibold text-xl">{skill.category}</p>
                <p className="text-gray-300 text-lg">{skill.items.join(" | ")}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold">Education</h2>
          <hr className="w-20 border-t-2 border-[#2ad882] mt-2 mb-6" />
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-[#2ad882] text-lg">{edu.institution}</p>
                {edu.details.map((detail, i) => (
                  <p key={i} className="text-gray-300 text-lg">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #2a2f36;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #2ad882;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #25c26e;
        }
      `}</style>
    </section>
  );
};

export default About;
