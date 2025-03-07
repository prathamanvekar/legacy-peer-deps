import { motion } from "framer-motion";

import Space from "../components/Space";
import Navbar from "../components/Navbar";

export default function ContactUs() {
  return (
    <div className="relative min-h-screen w-screen text-white font-poppins bg-black">
      {/* Background */}
        <Space />
      

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center mt-24 mb-12">
        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-8 text-orange-400"
        >
          Contact our team
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg text-gray-300 mb-12 text-center max-w-2xl"
        >
          Got any questions about our coding club or upcoming events? We're here to help.
          Reach out to our team and get involved in our activities.
        </motion.p>

        <div className="flex flex-col md:flex-row w-full max-w-4xl space-y-8 md:space-y-0 md:space-x-8">
          {/* Contact Form */}
          <div className="flex-1 bg-neutral-900 p-8 rounded-lg shadow-lg">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  placeholder="First name"
                  className="p-3 rounded bg-black text-white border border-gray-700"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="p-3 rounded bg-black text-white border border-gray-700"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 mb-6 rounded bg-black text-white border border-gray-700"
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full p-3 mb-6 rounded bg-black text-white border border-gray-700"
              />
              <textarea
                placeholder="Message"
                className="w-full p-3 mb-6 rounded bg-black text-white border border-gray-700"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="w-full p-3 bg-orange-400 rounded text-black font-bold hover:bg-orange-500 transition duration-300"
              >
                Send message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex-1 text-gray-300 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Chat with us</h2>
              <p>Connect with our team via live chat.</p>
              <ul className="list-disc list-inside">
                <li>Join our Discord server</li>
                <li>Email us at codingclub@pccoe.edu.in</li>
                <li>Message us on Instagram</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Call us</h2>
              <p>Call our team Mon-Fri from 9am to 6pm.</p>
              <p>+91 12345 67890</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Visit us</h2>
              <p>Meet us at our club office in PCCOE.</p>
              <p>Pimpri Chinchwad College of Engineering, Sector 26, Pradhikaran, Nigdi, Pune, Maharashtra 411044</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}