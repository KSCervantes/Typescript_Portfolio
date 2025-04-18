import { motion } from "framer-motion";
import graduateImage from '../assets/Profile.png';
import { Download, Mail, Code, FileText } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [showCvPreview, setShowCvPreview] = useState(false);

  // Animation variants for consistent animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Smooth cascading effect
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Programming languages animation
  const programmingLanguages = [
    "JavaScript", "React", "HTML/CSS",
    "Python", "Flutter", "Dart", "Firebase", "Supabase"
  ];

  // Function to handle CV interaction
  const handleCvClick = () => {
    setShowCvPreview(true);
  };

  // Function to handle CV download
  const handleCvDownload = (e: React.MouseEvent<HTMLButtonElement>) => {
    // If user clicks download button in preview modal, prevent modal close action
    e.stopPropagation();

    // Create a link to download the CV
    const link = document.createElement('a');
    link.href = '/KYLE RESUME.pdf';
    link.download = 'Kyle_Cervantes_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Close modal when clicking outside content
  const handleCloseModal = () => {
    setShowCvPreview(false);
  };

  // Prevent closing when clicking inside content
  const handleModalContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black text-white px-4 sm:px-6 md:px-12 py-16 sm:py-20 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 20, 0], scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/4 left-1/5 w-40 sm:w-48 md:w-64 h-40 sm:h-48 md:h-64 rounded-full bg-gradient-to-br from-blue-600/20 to-blue-400/10 blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ y: [0, 40, 0], x: [0, -30, 0], scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-1/3 right-1/4 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 rounded-full bg-gradient-to-tr from-indigo-700/20 to-violet-500/10 blur-3xl"
        ></motion.div>

        {/* Additional subtle glow elements */}
        <motion.div
          animate={{ y: [0, 20, 0], scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
          className="absolute top-1/2 left-3/4 w-32 sm:w-40 h-32 sm:h-40 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-300/5 blur-3xl"
        ></motion.div>
      </div>

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="z-10 relative flex flex-col md:flex-row items-center justify-center w-full max-w-4xl gap-6 sm:gap-8 md:gap-12"
      >
        {/* Enhanced Profile Picture */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.3 } }}
          className="relative mb-6 md:mb-0 group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl opacity-0 group-hover:opacity-40 blur transition duration-300"></div>
          <div className="relative">
            <motion.div
              animate={{
                background: [
                  "linear-gradient(0deg, rgba(37,99,235,1) 0%, rgba(59,130,246,1) 50%, rgba(147,197,253,1) 100%)",
                  "linear-gradient(90deg, rgba(37,99,235,1) 0%, rgba(59,130,246,1) 50%, rgba(147,197,253,1) 100%)",
                  "linear-gradient(180deg, rgba(37,99,235,1) 0%, rgba(59,130,246,1) 50%, rgba(147,197,253,1) 100%)",
                  "linear-gradient(270deg, rgba(37,99,235,1) 0%, rgba(59,130,246,1) 50%, rgba(147,197,253,1) 100%)",
                  "linear-gradient(0deg, rgba(37,99,235,1) 0%, rgba(59,130,246,1) 50%, rgba(147,197,253,1) 100%)"
                ]
              }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute inset-0 p-1.5 rounded-lg shadow-lg shadow-blue-500/40"
            ></motion.div>
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 relative z-10 rounded-lg overflow-hidden backdrop-blur-sm border border-gray-700 group-hover:border-blue-500/50 transition-all duration-300">
              <img
                src={graduateImage}
                alt="Kyle Cervantes"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            </div>
          </div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900/80 border border-gray-700 px-3 py-1.5 rounded-full font-mono text-xs text-blue-300 flex items-center gap-1.5 whitespace-nowrap shadow-lg">
            <Code size={12} className="text-blue-400" />
            <span>Web & Mobile Developer</span>
          </div>
        </motion.div>

        {/* Enhanced Text Content */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg"
        >
          <div className="relative mb-4 flex flex-col items-center justify-center sm:items-start sm:justify-start">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-lg sm:text-xl font-medium text-white/90">Hello</span>
              <motion.span
                animate={{ rotate: [0, 20, -10, 20, 0] }}
                transition={{ duration: 1.5, delay: 1, repeat: Infinity, repeatDelay: 5 }}
                className="text-lg sm:text-xl"
              >
                👋
              </motion.span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight mt-2">
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-gray-400"
              >
                I'M
              </span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                KYLE CERVANTES
              </span>
            </h1>
          </div>
          <div className="bg-gray-800/70 backdrop-blur-sm p-4 sm:p-5 rounded-lg border border-gray-700 shadow-xl relative w-full mb-6">
            <div className="font-mono text-xs sm:text-sm text-gray-300 leading-relaxed">
              <span className="text-blue-400">const</span> <span className="text-blue-300">profile</span> = {"{"}
              <div className="ml-4">
                A <span className="text-blue-300">Filipino student</span> based in the
                <span className="px-1 text-blue-300">Philippines,</span>passionate about
                <span className="px-1 text-blue-300">creating</span>inventive
                <span className="px-1 text-blue-300">mobile and web</span>experiences.
              </div>
              {"};"}
            </div>
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
              className="absolute right-4 bottom-4 h-4 w-1 bg-blue-400"
            ></motion.div>
          </div>
          <div className="mt-2 w-full flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <motion.a
              href="#contact"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg opacity-0 group-hover:opacity-40 blur transition duration-300"></div>
              <div className="relative bg-gray-800/70 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg transition-all duration-300 text-white flex items-center justify-center gap-2 text-xs sm:text-sm border border-gray-700 group-hover:border-blue-500/50 shadow-lg">
                <Mail size={14} className="text-blue-400" />
                <span className="text-blue-200">Get in Touch</span>
              </div>
            </motion.a>

            {/* Enhanced CV Button */}
            <motion.button
              onClick={handleCvClick}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg opacity-0 group-hover:opacity-40 blur transition duration-300"></div>
              <div className="relative bg-gray-800/70 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg transition-all duration-300 text-white flex items-center justify-center gap-2 text-xs sm:text-sm border border-gray-700 group-hover:border-blue-500/50 shadow-lg">
                <FileText size={14} className="text-blue-400" />
                <span className="text-blue-200">CV/Resume</span>
              </div>
            </motion.button>
          </div>

          {/* Programming Languages Animation */}
          <motion.div
            variants={itemVariants}
            className="mt-8 relative w-full overflow-hidden h-8"
          >
            <motion.div
              animate={{
                x: [0, -1000],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute whitespace-nowrap flex gap-6"
            >
              {[...programmingLanguages, ...programmingLanguages].map((lang, index) => (
                <div key={index} className="flex items-center gap-1.5 text-sm font-mono">
                  <span className="text-blue-400">&lt;</span>
                  <span className="text-blue-300">{lang}</span>
                  <span className="text-blue-400">/&gt;</span>
                </div>
              ))}
            </motion.div>

            {/* Fade edges */}
            <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* CV Preview Modal */}
      {showCvPreview && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleCloseModal}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={handleModalContentClick}
            className="bg-gray-900 border border-gray-700 rounded-lg w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl"
          >
            {/* Modal Header */}
            <div className="p-4 border-b border-gray-700 flex justify-between items-center bg-gray-800">
              <h3 className="text-lg font-medium text-blue-200">CV Preview</h3>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* PDF Preview */}
            <div className="flex-1 overflow-auto p-1 bg-gray-800">
              <iframe
                src="/KYLE RESUME.pdf"
                className="w-full h-full min-h-[500px] rounded border border-gray-700"
                title="CV Preview"
              ></iframe>
            </div>

            {/* Modal Footer with Download Button */}
            <div className="p-4 border-t border-gray-700 flex justify-end bg-gray-800">
              <motion.button
                onClick={handleCvDownload}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-lg shadow-blue-500/20"
              >
                <Download size={16} />
                <span>Download CV</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
