import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Space from "../components/Space";
import Navbar from "../components/Navbar";

export default function EventsPage() {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  // Handle scroll to fix navbar with smoother transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add smooth scrolling to the entire page
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const pastEvents = [
    {
      id: 1,
      title: "Tech Fest 2025",
      date: "Aug 15, 2025",
      image: "http://www.flc.vn/wp-content/uploads/2019/12/Anh-1-1.jpg",
      description:
        "A grand celebration of technology and innovation, featuring keynote speakers, workshops, and project exhibitions by aspiring engineers and developers.",
    },
    {
      id: 2,
      title: "Hackathon 2025",
      date: "Dec 10, 2023",
      image: "https://github.com/AarushBorkar/CRESA_CCanvas/blob/main/events/hackathon3.jpg?raw=true",
      description:
        "A 24-hour intense coding marathon where developers and designers collaborated to create innovative solutions to real-world challenges.",
    },
    {
      id: 3,
      title: "Cultural Night",
      date: "Jan 20, 2024",
      image: "https://github.com/AarushBorkar/CRESA_CCanvas/blob/main/events/culturalNight2.jpg?raw=true",
      description:
        "A mesmerizing night filled with music, dance, and performances that showcased the vibrant diversity of our community.",
    },
    {
      id: 4,
      title: "Sports Meet",
      date: "Feb 5, 2024",
      image: "https://github.com/AarushBorkar/CRESA_CCanvas/blob/main/events/sports4.jpeg?raw=true",
      description:
        "An action-packed sports event promoting teamwork, competition, and athletic excellence across various disciplines.",
    },
  ];

  return (
    <div className="relative min-h-screen w-screen text-white font-poppins overflow-hidden">
      {/* Background */}
      <Space />

      {/* Navbar - Becomes Fixed on Scroll */}
      <div
        className={`w-full transition-all duration-500 ${
          isNavbarFixed ? "fixed top-0 left-0 bg-black/90 shadow-md z-50" : "relative"
        }`}
      >
        <Navbar />
      </div>

      {/* Title Section - Increased margin and added padding */}
      <div className="flex flex-col items-center justify-center mt-32 mb-20 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-6xl font-bold bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent text-center"
        >
          Upcoming Events
        </motion.h1>
        
        {/* Added subtitle for better spacing and context */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
          className="text-gray-300 text-xl mt-6 text-center max-w-2xl"
        >
          Join us for these exciting upcoming events organized by our team
        </motion.p>
      </div>

      {/* Events Section - Increased spacing between cards */}
      <div className="relative flex flex-col items-center px-6 md:px-12">
        <div className="space-y-24 pb-32 w-full flex flex-col items-center">
          {pastEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -150 : 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col md:flex-row items-center border-2 border-orange-400 p-8 rounded-3xl shadow-md shadow-orange-500/30 max-w-4xl w-full bg-[rgba(255,255,255,0.05)] backdrop-blur-lg transform transition-all duration-500 hover:scale-105"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full md:w-1/3 h-56 object-cover rounded-2xl shadow-lg"
              />
              <div className="md:w-2/3 p-6">
                <h2 className="text-3xl font-bold text-orange-400">{event.title}</h2>
                <p className="text-gray-300 mb-2 text-lg">{event.date}</p>
                <p className="text-gray-300 text-lg">{event.description}</p>

                {/* Know More Button with improved animation */}
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#f97316" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-xl text-lg font-medium transition-all duration-300"
                >
                  Know More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}