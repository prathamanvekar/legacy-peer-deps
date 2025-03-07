import React from "react";
import { FaInstagram, FaLinkedin, FaDiscord, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex items-center justify-center  bg-black">
      <div className="bg-black text-white p-6 rounded-lg shadow-lg flex items-center w-full">
        {/* Left Side - Logo */}
        <div className="w-1/2 flex justify-center">
          <img
            src="logoimg.jpeg"
            alt="Logo"
            className="w-24 h-24 object-contain"
          />
        </div>

        {/* Right Side - Follow Us & Icons */}
        <div className="w-1/2 flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
          <div className="flex gap-3">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="text-pink-500 text-2xl hover:scale-110 transition" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-blue-500 text-2xl hover:scale-110 transition" />
            </a>
            <a href="https://discord.com" target="_blank" rel="noreferrer">
              <FaDiscord className="text-purple-500 text-2xl hover:scale-110 transition" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube className="text-red-500 text-2xl hover:scale-110 transition" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;