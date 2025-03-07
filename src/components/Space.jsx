import { motion } from "framer-motion";

export default function Space() {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-black overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      {/* Floating Small Orange Squares */}
      <div className="fixed top-0 left-0 w-screen h-screen bg-black z-[-1]">
        {Array.from({ length: 500 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-orange-500 rotate-45"
            initial={{ opacity: 0.2, y: Math.random() * 100 }}
            animate={{ opacity: [0.2, 1, 0.2], y: Math.random() * -100 }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{ top: `${Math.random() * 100}vh`, left: `${Math.random() * 100}vw` }}
          />
        ))}
      </div>
    </div>
  );
}