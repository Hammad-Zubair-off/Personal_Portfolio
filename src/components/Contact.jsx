import React, { useState ,useEffect } from "react";
import emailjs from "emailjs-com"; // Import EmailJS

const Contact = () => {

  useEffect(() => {
    // Scroll to the top of the page when this component is rendered
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  }, []); //

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your EmailJS service ID, template ID, and user ID
    emailjs
      .send(
        "service_rbprat5", // Service ID
        "template_p8o27mh", // Template ID
        formData, // Form data
        "FZZJhIyXn_II229us" // User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          setFormData({ from_name: "", from_email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="bg-[#1A1F24] text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center md:items-start">
      {/* Left Side - Contact Details */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h2 className="text-3xl font-semibold text-center md:text-left">Contact Details</h2>
        <hr className="w-20 border-t-2 border-[#2ad882] mt-2 mb-6 mx-auto md:mx-0" />
        <p className="text-gray-300 text-lg"><strong>Address:</strong> Lahore, Pakistan</p>
        <p className="text-gray-300 text-lg"><strong>Email:</strong> hammadzubairofficial@gamil.com</p>
      </div>

      {/* Right Side - Contact Form */}
      <div className="md:w-1/2 bg-[#2a2e35] p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto">
        {/* Show status message at the top of the form */}
        {status && (
          <p
            className={`text-center mt-4 text-lg font-semibold ${
              status.includes("successfully") ? "text-green-500" : "text-red-500"
            }`}
          >
            {status}
          </p>
        )}

        <h2 className="text-2xl font-semibold mb-6 text-center md:text-left">Send a Message</h2>
        <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-4 rounded bg-[#1f242b] border border-[#2ad882] text-white text-lg focus:outline-none focus:ring-2 focus:ring-[#2ad882] transition"
            required
          />
          <input
            type="email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-4 rounded bg-[#1f242b] border border-[#2ad882] text-white text-lg focus:outline-none focus:ring-2 focus:ring-[#2ad882] transition"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="p-4 rounded bg-[#1f242b] border border-[#2ad882] text-white text-lg focus:outline-none focus:ring-2 focus:ring-[#2ad882] transition"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-[#2ad882] text-black font-semibold px-8 py-3 rounded-md hover:bg-[#25c26e] transition duration-300 ease-in-out"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
