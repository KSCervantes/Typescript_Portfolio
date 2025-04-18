import { motion } from "framer-motion";
import graduateImage from '../assets/Profile.png';
import { Download, Mail, Code, FileText } from "lucide-react";
import { useState, useCallback, memo } from "react";

// Import icons or use SVG directly for better performance
const LanguageIcons = {
  JavaScript: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-yellow-400" fill="currentColor">
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
    </svg>
  ),
  React: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-blue-400" fill="currentColor">
      <path d="M12 9.861a2.139 2.139 0 100 4.278 2.139 2.139 0 100-4.278zm-5.992 6.394l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 001.363 3.578l.101.213-.101.213a23.307 23.307 0 00-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 011.182-3.046A24.752 24.752 0 015.317 8.95zm12.675 7.305l-.133-.469a23.357 23.357 0 00-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 001.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 01-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 00-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 00-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 013.233-.501 24.847 24.847 0 012.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zm9.589 20.362c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 002.421-2.968l.135-.193.234-.02a23.63 23.63 0 003.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 01-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 01-3.234.501 24.674 24.674 0 01-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 00-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 00-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0114.75 7.24zM7.206 22.677A2.38 2.38 0 016 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 002.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 01-2.052-2.545 24.976 24.976 0 01-3.233-.501zm5.984.628c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 01-1.35-2.122 30.354 30.354 0 01-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 011.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 015.033 0l.234.02.134.193a30.006 30.006 0 012.517 4.35l.101.213-.101.213a29.6 29.6 0 01-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 002.196-3.798 28.585 28.585 0 00-2.197-3.798 29.031 29.031 0 00-4.394 0 28.477 28.477 0 00-2.197 3.798 29.114 29.114 0 002.197 3.798z" />
    </svg>
  ),
  "HTML/CSS": (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-orange-500" fill="currentColor">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
      <g>
        <path d="M11.83 1a11.23 11.23 0 00-2.25.22 8.27 8.27 0 00-6.18 5.64 8.81 8.81 0 00-.42 2.72v2.06h6.24V12H1.77a8.42 8.42 0 00-.22 1.91 9.16 9.16 0 00.24 2.1 8.54 8.54 0 005.37 6.14 12.09 12.09 0 004.66.34 5.52 5.52 0 01-.33-1.82v-2.18a3.63 3.63 0 00-1-2.6 3.87 3.87 0 00-2.8-1H6.3v-.4a3.8 3.8 0 011-2.77 3.94 3.94 0 012.83-1h3.76a3.74 3.74 0 002.62-1 3.62 3.62 0 001-2.57V3.28A7.4 7.4 0 0014.26 1a13.7 13.7 0 00-2.43 0zM8.53 3.28a1.27 1.27 0 11-1.33 1.27 1.29 1.29 0 011.33-1.27z" fill="#3776AB" />
        <path d="M22.23 5.08a10 10 0 00-4.86-.51 6.16 6.16 0 01.9 3.19v1.86a3.69 3.69 0 01-1 2.74 4.25 4.25 0 01-3 1.08h-3.73a3.45 3.45 0 00-2.46.94 3.26 3.26 0 00-1 2.43v3.66a6 6 0 003.25 5.78 13.11 13.11 0 005.68.83 8.21 8.21 0 006.39-3.86 8.16 8.16 0 001-3.27 16.11 16.11 0 00.15-2.39h-6.2v-.39h8.88V17a11.39 11.39 0 01-.22-2.28 15.57 15.57 0 00-.17-2.3 7.41 7.41 0 00-3.61-7.34zm-3.46 16.26a1.2 1.2 0 01-1.2 1.27 1.26 1.26 0 01-1.27-1.27 1.19 1.19 0 011.25-1.2 1.16 1.16 0 011.22 1.2z" fill="#FFD43B" />
      </g>
    </svg>
  ),
  Flutter: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-blue-500" fill="currentColor">
      <path d="M14.314 0L2.3 12 6 15.7 21.684.012h-7.357L14.314 0zm.014 11.072l-6.471 6.457 6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.371z" />
    </svg>
  ),
  Dart: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-blue-700" fill="currentColor">
      <path d="M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 0 1 1.481-.315c.766.047 1.677.788 1.677.788L24 9.948v9.789h-4.263V24H9.789l-9-9C.303 14.5 0 13.795 0 13.105c0-.319.18-.818.316-1.105l3.789-7.895zm.679.679v11.787c.002.543.021 1.024.498 1.508L10.204 23h8.533v-4.263L4.784 4.784zm12.055-.678c-.899-.896-1.809-1.78-2.74-2.643-.302-.267-.567-.468-1.07-.462-.37.014-.87.195-.87.195L6.341 4.105l10.498.001z" />
    </svg>
  ),
  Firebase: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-yellow-600" fill="currentColor">
      <path d="M3.89 15.672L6.255.461A.542.542 0 0 1 7.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 0 0-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 0 0 1.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984z" />
    </svg>
  ),
  Supabase: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-emerald-500" fill="currentColor">
      <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.535a1.112 1.112 0 0 0 .894 1.789h9.363v8.959a.396.396 0 0 0 .716.233l9.08-12.261.402-.536a1.112 1.112 0 0 0-.895-1.79z" />
    </svg>
  )
};

// Memoize LanguageIcon component for better performance
const LanguageIcon = memo(({ language }: { language: keyof typeof LanguageIcons }) => {
  return (
    <div className="flex items-center">
      {LanguageIcons[language] || null}
    </div>
  );
});

// Main component
export default function Hero() {
  const [showCvPreview, setShowCvPreview] = useState(false);

  // Animation variants for consistent animations - simplified for better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Reduced stagger time
        duration: 0.6, // Reduced duration
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 }, // Reduced y distance
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }, // Reduced duration
    },
  };

  // Programming languages
  const programmingLanguages = [
    "JavaScript", "React", "HTML/CSS",
    "Python", "Flutter", "Dart", "Firebase", "Supabase"
  ];

  // Memoized handlers to prevent re-renders
  const handleCvClick = useCallback(() => {
    setShowCvPreview(true);
  }, []);

  const handleCvDownload = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const link = document.createElement('a');
    link.href = '/KYLE RESUME.pdf';
    link.download = 'Kyle_Cervantes_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const handleCloseModal = useCallback(() => {
    setShowCvPreview(false);
  }, []);

  const handleModalContentClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black text-white px-4 sm:px-6 md:px-8 py-12 sm:py-16 relative overflow-hidden"
    >
      {/* Optimized Background Elements - reduced number and complexity */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
        <motion.div
          initial={{ opacity: 0.3 }}
          animate={{ y: [-10, 10], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/4 left-1/5 w-32 sm:w-40 h-32 sm:h-40 rounded-full bg-gradient-to-br from-blue-600/20 to-blue-400/10 blur-3xl hidden sm:block"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0.2 }}
          animate={{ y: [10, -10], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-1/3 right-1/4 w-40 sm:w-56 h-40 sm:h-56 rounded-full bg-gradient-to-tr from-indigo-700/20 to-violet-500/10 blur-3xl hidden sm:block"
        ></motion.div>
      </div>

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="z-10 relative flex flex-col md:flex-row items-center justify-center w-full max-w-4xl gap-6 sm:gap-8 md:gap-12"
      >
        {/* Profile Picture - optimized animations */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          className="relative mb-6 md:mb-0 group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl opacity-0 group-hover:opacity-40 blur transition duration-300"></div>
          <div className="relative">
            <div className="absolute inset-0 p-1.5 rounded-lg shadow-lg shadow-blue-500/40 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 relative z-10 rounded-lg overflow-hidden backdrop-blur-sm border border-gray-700 group-hover:border-blue-500/50 transition-all duration-300">
              <img
                src={graduateImage}
                alt="Kyle Cervantes"
                className="w-full h-full object-cover"
                loading="eager" // Critical image loads immediately
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            </div>
          </div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900/80 border border-gray-700 px-3 py-1.5 rounded-full font-mono text-xs text-blue-300 flex items-center gap-1.5 whitespace-nowrap shadow-lg">
            <Code size={12} className="text-blue-400" />
            <span>Web & Mobile Developer</span>
          </div>
        </motion.div>

        {/* Text Content - simplified animations */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg"
        >
          <div className="relative mb-4 flex flex-col items-center justify-center sm:items-start sm:justify-start">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-lg sm:text-xl font-medium text-white/90">Hello</span>
              <motion.span
                animate={{ rotate: [0, 15, 0] }}
                transition={{ duration: 1, delay: 1, repeat: Infinity, repeatDelay: 5 }}
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
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg opacity-0 group-hover:opacity-40 blur transition duration-300"></div>
              <div className="relative bg-gray-800/70 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg transition-all duration-300 text-white flex items-center justify-center gap-2 text-xs sm:text-sm border border-gray-700 group-hover:border-blue-500/50 shadow-lg">
                <Mail size={14} className="text-blue-400" />
                <span className="text-blue-200">Get in Touch</span>
              </div>
            </motion.a>

            {/* CV Button */}
            <motion.button
              onClick={handleCvClick}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
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

          {/* Enhanced Programming Languages with Icons/Logos */}
          <motion.div
            variants={itemVariants}
            className="mt-8 relative w-full overflow-hidden h-10"
          >
            {/* Mobile-optimized tech stack with horizontal scrolling */}
            <div className="flex gap-4 w-full overflow-x-auto md:hidden scrollbar-hide relative">
              <motion.div
                animate={{
                  x: [0, -1000], // Adjust the distance based on the total width of the icons
                }}
                transition={{
                  duration: 25, // Adjust the duration for smooth scrolling
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex gap-8"
              >
                {[...programmingLanguages, ...programmingLanguages].map((lang, index) => (
                  <LanguageIcon key={index} language={lang as keyof typeof LanguageIcons} />
                ))}
              </motion.div>
            </div>

            {/* Animation for larger screens */}
            <div className="hidden md:block">
              <motion.div
                animate={{
                  x: [0, -1000],
                }}
                transition={{
                  duration: 25, // Slowed down for better performance
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute whitespace-nowrap flex gap-8"
              >
                {[...programmingLanguages, ...programmingLanguages].map((lang, index) => (
                  <LanguageIcon key={index} language={lang as keyof typeof LanguageIcons} />
                ))}
              </motion.div>

              {/* Fade edges */}
              <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
              <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
            </div>
          </motion.div>
                  </motion.div>
                </motion.div>

      {/* CV Preview Modal - only rendered when needed for better performance */}
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

            {/* PDF Preview - with loading optimization */}
            <div className="flex-1 overflow-auto p-1 bg-gray-800">
              <iframe
                src="/KYLE RESUME.pdf"
                className="w-full h-full min-h-[500px] rounded border border-gray-700"
                title="CV Preview"
                loading="lazy" // Use lazy loading for the iframe
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
