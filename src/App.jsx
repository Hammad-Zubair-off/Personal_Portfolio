import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SocialSidebar from "./components/SocialSidebar";
import { Routes, Route, useLocation } from "react-router-dom";
import PageWrapper from "./components/PageWrapper"; // Merged component

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <SocialSidebar />

      {/* Routes wrapped with PageWrapper for smooth transitions & auto-scroll */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/About" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/Project" element={<PageWrapper><Project /></PageWrapper>} />
        <Route path="/Contact" element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
