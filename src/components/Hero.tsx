import { motion } from "framer-motion";
import graduateImage from '../assets/graduate.jpg';
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-0 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 15, 0], scale: [1, 1.05, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/4 left-1/5 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 rounded-full bg-gradient-to-br from-blue-600/20 to-blue-400/10 blur-2xl"
        ></motion.div>
        <motion.div
          animate={{ y: [0, 30, 0], x: [0, -20, 0], scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-1/3 right-1/4 w-64 sm:w-80 md:w-[30rem] h-64 sm:h-80 md:h-[30rem] rounded-full bg-gradient-to-tr from-indigo-700/20 to-violet-500/10 blur-2xl"
        ></motion.div>
      </div>

      {/* Content */}
      <div className="z-10 relative flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-6 sm:gap-8 md:gap-16">
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mb-6 sm:mb-8 md:mb-0"
        >
          <div className="absolute inset-0 bg-blue-500/20 blur-lg rounded-lg transform scale-110"></div>
          <div className="relative">
            <div className="absolute inset-0 p-1 rounded-lg bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30"></div>
            <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-52 md:h-52 relative z-10 rounded-lg overflow-hidden backdrop-blur-sm border border-white/10">
              <img
                src={graduateImage}
                alt="Kyle Cervantes"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-2 mb-2"
          >
            <span className="text-xl sm:text-2xl font-medium text-white/90">Hello</span>
            <motion.span
              animate={{ rotate: [0, 20, -10, 20, 0] }}
              transition={{ duration: 1.5, delay: 1, repeat: Infinity, repeatDelay: 5 }}
              className="text-xl sm:text-2xl"
            >
              👋
            </motion.span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mt-2"
          >
            I'M{" "}
            <motion.span className="inline-block relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                KYLE CERVANTES
              </span>
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.0 }}
            className="mt-6 text-sm sm:text-base leading-relaxed text-gray-300/90 font-light"
          >
            A <span className="font-medium text-blue-300">Filipino student</span> based in the
            <span className="px-1 font-medium text-blue-300">Philippines</span>, passionate about
            <span className="px-1 font-medium text-blue-300">creating</span> innovative
            <span className="px-1 font-medium text-blue-300">mobile and web</span> experiences.
          </motion.p>

          <motion.div
            className="mt-6 sm:mt-8 w-full flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all duration-300 text-white flex items-center justify-center gap-3 text-sm sm:text-base shadow-lg shadow-black/20"
            >
              Get in Touch
            </a>
            <a
              href="/KYLE RESUME.pdf"
              download="Kyle_Cervantes_Resume.pdf"
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all duration-300 text-white flex items-center justify-center gap-3 text-sm sm:text-base shadow-lg shadow-black/20"
            >
              <Download size={18} />
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
