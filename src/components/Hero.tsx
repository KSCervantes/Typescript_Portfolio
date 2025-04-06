import { motion } from "framer-motion"
import graduateImage from '../assets/graduate.jpg';
import { Github, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-gray-900 via-blue-950 to-black px-4 sm:px-6 md:px-12 py-16 md:py-0 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 rounded-full bg-blue-500 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-36 sm:w-56 md:w-72 h-36 sm:h-56 md:h-72 rounded-full bg-indigo-600 blur-3xl"></div>
      </div>

      {/* Content Container */}
      <div className="z-10 relative flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-6 sm:gap-8 md:gap-12">
        {/* Profile Picture with animated border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mb-6 md:mb-0"
        >
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-none overflow-hidden border-4 border-blue-500 relative z-10">
            {/* Square image */}
            <img
              src={graduateImage}
              alt="Kyle Cervantes"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Animated border effect - changed to square */}
          <motion.div
            animate={{
              rotate: 360,
              boxShadow: ["0 0 15px rgba(59, 130, 246, 0.5)", "0 0 25px rgba(59, 130, 246, 0.7)", "0 0 15px rgba(59, 130, 246, 0.5)"]
            }}
            transition={{
              rotate: { duration: 10, repeat: Infinity, ease: "linear" },
              boxShadow: { duration: 2, repeat: Infinity, repeatType: "reverse" }
            }}
            className="absolute inset-0 rounded-none border-2 border-blue-400 border-dashed z-0"
          ></motion.div>
        </motion.div>

        {/* Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          {/* Hero Heading with animated highlight */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="text-3xl sm:text-4xl md:text-3xl font-bold text-white drop-shadow-lg leading-tight"
            >
              Hello✋
            </motion.h2>

            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg leading-tight mt-4 sm:mt-8"
            >
              I'M{" "}
              <motion.span
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                KYLE CERVANTES
              </motion.span>
            </motion.h2>
          </motion.div>

          {/* Hero Subtitle with text reveal animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.0 }}
            className="mt-4 sm:mt-6"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed px-2 md:px-0">
              A <span className="font-medium text-blue-300">Filipino student</span> based in the
              <span className="px-1 font-medium text-blue-300">Philippines</span>, I am passionate about
              <span className="px-1 font-medium text-blue-300">creating</span> both
              <span className="px-1 font-medium text-blue-300">mobile and web</span> development.
            </p>
          </motion.div>

          {/* Call-to-Action Button */}
          <motion.div
            className="mt-6 sm:mt-8 md:mt-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.a
              href="#projects"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px -5px rgba(59, 130, 246, 0.6)",
                backgroundPosition: "100% 0",
              }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full font-medium shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 ease-in-out transform hover:rotate-1"
            >
              View My Projects
            </motion.a>
          </motion.div>

          {/* Social Links Section with staggered animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-6 sm:mt-8 md:mt-10 w-full"
          >
            <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
              {[
                { name: "GitHub", href: "https://github.com/Kyleeestone", icon: <Github size={18} /> },
                { name: "Email Me", href: "mailto:kylecervantes2003@gmail.com", icon: <Mail size={18} /> }
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target={link.name !== "Email Me" ? "_blank" : undefined}
                  rel={link.name !== "Email Me" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 1.2 + index * 0.2,
                    duration: 0.5
                  }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(59, 130, 246, 0.2)",
                    borderColor: "#3b82f6"
                  }}
                  className="border border-blue-900 bg-black bg-opacity-50 backdrop-blur-sm px-4 sm:px-6 py-2 rounded-full transition-all duration-300 text-gray-200 hover:text-white flex items-center gap-2 text-sm sm:text-base"
                >
                  {link.icon}
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}