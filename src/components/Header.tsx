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

  // Animation for navbar items
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
      transition: { duration: 0.2 }
    }
  };

  // Animation for logo
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

  return (
    <header
      className={`fixed w-full text-white shadow-lg py-3 sm:py-4 px-4 sm:px-5 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-gray-900/95 via-blue-950/95 to-black/95 backdrop-blur-md"
          : "bg-gradient-to-r from-gray-900/80 via-blue-950/80 to-black/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center relative">
        {/* Enhanced background effects - adjusted for better sizing on small screens */}
        <div className="absolute -left-5 sm:-left-10 top-1/2 -translate-y-1/2 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-blue-500 blur-[40px] sm:blur-[60px] opacity-20 animate-pulse"></div>
        <div className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-indigo-600 blur-[30px] sm:blur-[50px] opacity-10 animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute left-1/3 bottom-0 w-24 sm:w-32 h-6 sm:h-8 rounded-full bg-blue-400 blur-[50px] sm:blur-[80px] opacity-5"></div>

        {/* Logo with enhanced animation - responsive text size */}
        <motion.div
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          <motion.h1
            className="text-xl sm:text-2xl font-bold tracking-wider"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="text-white">MY</span>
            <motion.span
              className="text-blue-400 ml-1 sm:ml-2"
              animate={{
                textShadow: ["0 0 5px rgba(96, 165, 250, 0)", "0 0 15px rgba(96, 165, 250, 0.5)", "0 0 5px rgba(96, 165, 250, 0)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              PORTFOLIO
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Desktop Navigation - adjusted spacing for various screen sizes */}
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
                className="absolute -bottom-1 left-0 h-0.5 bg-blue-400"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              ></motion.span>
            </motion.a>
          ))}
        </nav>

        {/* Mobile menu button - better touch target */}
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full hover:bg-blue-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ?
              <X size={22} className="text-blue-400" /> :
              <Menu size={22} className="text-blue-400" />
            }
          </button>
        </motion.div>
      </div>

      {/* Mobile Navigation Menu - improved animation and touch targets */}
      <motion.nav
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          height: mobileMenuOpen ? "auto" : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="flex flex-col items-center mt-2 space-y-1 pb-2">
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
              whileHover={{ scale: 1.03, color: "#60a5fa" }}
              whileTap={{ scale: 0.98 }}
              className="font-medium py-3 px-6 w-full text-center border-b border-blue-900 border-opacity-30 hover:bg-blue-900 hover:bg-opacity-30 transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </motion.nav>
    </header>
  );
}