import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Space from "../components/Space";
import Navbar from "../components/Navbar";

// Sample Event Data (Replace with API data later)
const eventsData = [
  { id: 1, title: "Tech Fest" },
  { id: 2, title: "Sports Meet" },
  { id: 3, title: "Cultural Night" },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="relative w-screen text-white font-poppins">
      {/* Background */}
      <Space />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center h-screen">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-9xl font-bold mb-4 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent"
        >
          CRESA
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg italic text-gray-300"
        >
          "Computer Regional Engineering Student Association"
        </motion.p>
      </div>

      {/* Our Vision & Our Mission Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-12 gap-12">
        <motion.h2
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-right w-1/2"
        >
          Our Vision
        </motion.h2>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="p-6 rounded-lg shadow-lg w-1/2 bg-neutral-900 font-medium border-2 border-orange-500"
        >
          <p className="text-lg text-gray-300">
            Our Vision is to be a leading student body that bridges the gap between academics and industry through innovation and teamwork.
          </p>
        </motion.div>

        <motion.h2
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-left w-1/2"
        >
          Our Mission
        </motion.h2>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="p-6 rounded-lg shadow-lg w-1/2 bg-neutral-900 font-medium border-2 border-orange-500"
        >
          <p className="text-lg text-gray-300">
            Our Mission is to foster a collaborative environment for students to develop technical, cultural, and leadership skills.
          </p>
        </motion.div>
      </div>

      {/* Upcoming & Recent Events Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-12 gap-8">
        <h2 className="text-5xl font-bold text-center text-white">Upcoming & Recent Events</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.5 }}
              className="bg-neutral-900 p-6 rounded-lg shadow-lg mt-20 border-2 border-orange-500 w-full max-w-md text-center"
            >
              <h3 className="text-2xl font-bold text-orange-400">{event.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* See More Button */}
        <button
          onClick={() => navigate("/event")}
          className="mt-6 px-6 py-3 bg-orange-500 text-white text-lg font-bold rounded-lg hover:bg-orange-600 transition-all"
        >
          See More
        </button>
      </div>
    </div>
  );
}