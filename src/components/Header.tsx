import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation for navbar items with enhanced effects
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -3,
      color: "#60a5fa", // text-blue-400
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  // Enhanced animation for logo
  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Navigation items
  const navItems = ["About", "Projects", "Contact"];

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (mobileMenuOpen && !target.closest('nav') && !target.closest('button')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  // Prevent body scrolling when the mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed w-full text-white shadow-xl py-3 sm:py-4 px-4 sm:px-6 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gradient-to-r from-gray-900/95 via-blue-950/95 to-black/95 backdrop-blur-md"
          : "bg-gradient-to-r from-gray-900/80 via-blue-950/80 to-black/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center relative">
        {/* Enhanced background effects with more dynamic animations */}
        <div className="absolute -left-5 sm:-left-10 top-1/2 -translate-y-1/2 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-blue-500 blur-[60px] sm:blur-[80px] opacity-20 animate-pulse"></div>
        <div className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 w-14 sm:w-20 h-14 sm:h-20 rounded-full bg-indigo-600 blur-[40px] sm:blur-[70px] opacity-15 animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute left-1/3 bottom-0 w-28 sm:w-36 h-8 sm:h-10 rounded-full bg-blue-400 blur-[60px] sm:blur-[90px] opacity-10"></div>
        <div className="absolute right-1/4 top-0 w-16 h-16 rounded-full bg-purple-500 blur-[70px] opacity-5 animate-pulse" style={{ animationDuration: '5s' }}></div>

        {/* Enhanced Logo with better animation */}
        <motion.div
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {/* Added logo icon */}
            <motion.div
              className="mr-2 text-blue-400 bg-blue-900/30 rounded-full p-1 border border-blue-400/20"
              animate={{
                rotate: [0, 5, 0, -5, 0],
                scale: [1, 1.05, 1, 1.05, 1]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </motion.div>

            <h1 className="text-xl sm:text-2xl font-bold tracking-wider">
              <span className="text-white">MY</span>
              <motion.span
                className="text-blue-400 ml-1 sm:ml-2"
                animate={{
                  textShadow: [
                    "0 0 5px rgba(96, 165, 250, 0)",
                    "0 0 15px rgba(96, 165, 250, 0.7)",
                    "0 0 5px rgba(96, 165, 250, 0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                PORTFOLIO
              </motion.span>
            </h1>
          </motion.div>
        </motion.div>

        {/* Enhanced Desktop Navigation with better hover effects */}
        <nav className="hidden md:flex space-x-4 lg:space-x-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              custom={i}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="font-medium relative group py-2 text-sm lg:text-base"
            >
              {item}
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              ></motion.span>
            </motion.a>
          ))}
        </nav>

        {/* Enhanced mobile menu button with better animations */}
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-blue-900/30 border border-blue-400/20 hover:bg-blue-800/40 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? (
              <X size={22} className="text-blue-400" />
            ) : (
              <Menu size={22} className="text-blue-400" />
            )}
          </motion.button>
        </motion.div>
      </div>

      {/* Enhanced Mobile Navigation Menu with better animations and styling */}
      <motion.nav
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          height: mobileMenuOpen ? "auto" : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden mt-3"
      >
        <motion.div
          className="flex flex-col items-center space-y-1 pb-2 rounded-lg bg-gradient-to-b from-blue-900/30 to-gray-900/30 backdrop-blur-md border border-blue-400/10"
          initial={{ y: -10 }}
          animate={{ y: mobileMenuOpen ? 0 : -10 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: mobileMenuOpen ? 1 : 0,
                y: mobileMenuOpen ? 0 : -10
              }}
              transition={{ delay: 0.1 * i }}
              whileHover={{ scale: 1.03, backgroundColor: "rgba(30, 64, 175, 0.2)" }}
              whileTap={{ scale: 0.98 }}
              className="font-medium py-3 px-6 w-full text-center border-b border-blue-400/10 last:border-b-0 hover:text-blue-400 transition-all duration-200 flex justify-center items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              {/* Added icon indicators */}
              <span className="inline-block mr-2 opacity-70">
                {item === "About" && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                )}
                {item === "Projects" && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                )}
                {item === "Contact" && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                )}
              </span>
              {item}
            </motion.a>
          ))}
        </motion.div>
      </motion.nav>
    </header>
  );
}
