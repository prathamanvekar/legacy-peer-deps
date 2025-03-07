import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../../public/logoimg.jpeg';

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true); // Changed to true by default

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* This empty div acts as a spacer with the same height as navbar */}
      <div className="h-16"></div>
      
      <nav
        className={`fixed top-0 left-0 w-full bg-black shadow-lg py-4 px-8 flex justify-between items-center transition duration-300 z-50 ${
          showNavbar ? "visible opacity-100" : "invisible opacity-0.5"
        }`}
      >
        <img src={logo} alt="CRESA Logo" className="h-12" />
        <ul className="flex space-x-6 text-lg">
          <li>
            <Link to="/" className="hover:text-orange-400 cursor-pointer">Home</Link>
          </li>
          <li>
            <Link to="/events" className="hover:text-orange-400 cursor-pointer">Events</Link>
          </li>
          
          <li>
            <Link to="/team" className="hover:text-orange-400 cursor-pointer">About Us</Link>
          </li>
          <li>
            <Link to="/Contact" className="hover:text-orange-400 cursor-pointer">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}