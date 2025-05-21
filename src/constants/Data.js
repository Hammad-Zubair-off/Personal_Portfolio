import blogSite from "../assets/projects/blogSite.png";
import eCommeraceSite from "../assets/projects/eCommeraceSite.png";
import shopifySite from "../assets/projects/shopifySite.png";
import LiamBenjamin from "../assets/testimonial/LiamBenjamin.png";
import ElijahJames from "../assets/testimonial/ElijahJames.png";
import EmmaGrace from "../assets/testimonial/EmmaGrace.png";
import lisaBrown from "../assets/testimonial/lisaBrown.png";
import AboutProfilePic from '../assets/AboutProfilePic.png';
import Pic from '../assets/ProfilePic.png';
import HammadCV from '../assets/HammadCV.pdf';

// Home.js
const homeData = [
  {
    greeting: "Hello Everyone.",
    title: "I'm Hammad Zubair",
    designation: "Software Engineer",
    description: "I design and develop scalable web applications using modern technologies.",
  },
  {
    greeting: "Welcome to my Portfolio.",
    title: "I'm Hammad Zubair",
    designation: "Full Stack Developer",
    description: "I create impactful digital solutions, blending design with functionality.",
  },
  {
    greeting: "Hi there!",
    title: "I'm Hammad Zubair",
    designation: "UI/UX Enthusiast",
    description: "I craft delightful user experiences that are both intuitive and engaging.",
  },
];

export default homeData;



// Projects Data
export const projects = [
  {
    id: 1,
    title: "Food Delivery Site",
    category: "Web Development",
    image: blogSite,
    productionLink:"https://foodie-fiesta-frontend-dun.vercel.app/",
    repo: "https://github.com/Hammad-Zubair-off/FoodieFiesta-Frontend",
    description: "A modern blog platform with SEO optimization and responsive design.",
    tech: ["React", "Node.js", "CSS", "MongoDB"],
  },
  {
    id: 2,
    title: "PrimePick E-commerce Site",
    category: "Web Development",
    image: eCommeraceSite,
    productionLink:"https://prime-pick-off-hammad-zubair-offs-projects.vercel.app/",
    repo: "https://github.com/Hammad-Zubair-off/PrimePick",
    description: "A fully functional e-commerce site with payment gateway integration.",
    tech: ["React", "Express", "Stripe", "CSS"],
  },
  {
    id: 3,
    title: "IlmHub an online exam platform",
    category: "Web Development",
    image: shopifySite,
    productionLink:"https://ilm-hub-an-online-exam-platform-client1-o.vercel.app/",
    repo: "https://github.com/Hammad-Zubair-off/IlmHub-an-online-exam-platform-Client1.O",
    description: "A fully functional e-commerce site with payment gateway integration.",
    tech: ["React", "Express", "Stripe", "CSS"],
  },
];

// Testimonials Data
export const testimonials = [
  {
    id: 1,
    name: "Emma Grace",
    role: "CEO, Tech Innovations",
    image: EmmaGrace,
    feedback: "Hammad did an amazing job with our website. Highly recommend his work!",
  },
  {
    id: 2,
    name: "Liam Benjamin",
    role: "Founder, Digital Creations",
    image: LiamBenjamin,
    feedback: "Working with Hammad was great. He brought our ideas to life!",
  },
  {
    id: 3,
    name: "Lisa Brown",
    role: "Creative Director, ABC Studios",
    image: lisaBrown,
    feedback: "The website is stunning and responsive. Hammad’s work ethic is incredible.",
  },
  {
    id: 4,
    name: "Elijah James",
    role: "Owner, Web Solutions",
    image: ElijahJames,
    feedback: "Top-quality websites with attention to detail and customer satisfaction.",
  },
];


// Static data for About section

export const aboutData = {
  name: "Hammad",
  title: "Front-End Developer",
  description:
    "Hi, I’m Hammad! A front-end developer skilled in React, JavaScript, and modern frameworks, with hands-on experience in transforming Figma designs into responsive, high-performance websites. I focus on writing clean, maintainable code and crafting seamless user experiences that work beautifully across all devices. Let’s build something amazing together!",
  image: AboutProfilePic, // Path to your profile picture
  buttons: [
    { label: "Hire Me", link: "/Contact", className: "bg-[#2ad882] text-black" }, // Updated link to Contact page
    {
      label: "Download CV",
      link: HammadCV, // Link to the CV file
      className: "border-2 border-[#2ad882] text-[#2ad882]",
      download: true, // Add a flag to indicate this button is for downloading
    },
  ],
  skills: [
    {
      category: "Front-end Development",
      items: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Material-UI",
      ],
    },
    {
      category: "Programming Languages",
      items: [
        "JavaScript (ES6+)",
        "C/C++",
        "Java",
      ],
    },
    {
      category: "Version Control & Tools",
      items: [
        "Git & GitHub",
        "VS Code",
        "Figma (UI/UX Design)",
      ],
    },
    {
      category: "Testing & Deployment",
      items: [
        "Vercel",
        "Netlify",
        "Docker Basics",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Software Engineering",
      institution: "COMSATS University Islamabad, Lahore (CUI)",
      details: [
        "Programming Fundamentals with C/C++",
        "OOP, DSA and Web Technologies",
        "2022 — Continue",
      ],
    },
    {
      degree: "Artificial Intelligence",
      institution: "Presidential Initiative for AI and Computing (PIAIC)",
      details: ["Web 3.0, Metaverse, Generative AI", "March 2024 — Continue"],
    },
  ],
};

// SocialSidebar

export const socialLinks = [
  { id: 1, icon: "FaFacebookF", url: "https://www.facebook.com/share/18pqkMJ2tD/" },
  { id: 2, icon: "FaLinkedinIn", url: "https://www.linkedin.com/in/hammad-zubair-off/" },
  { id: 3, icon: "FaInstagram", url: "https://www.instagram.com/_hammad_zubair?igsh=OWR5NWUwYTkyNzZt" },
  { id: 4, icon: "FaGithub", url: "https://github.com/Hammad-Zubair-off" },
];


//footer data
export const footerData = {
  branding: "Hammad's Portfolio",
  description:
    "Passionate about crafting innovative web experiences. Dedicated to building scalable and user-friendly applications.",
  socialLinks: socialLinks, // Reusing the same socialLinks data here
};

