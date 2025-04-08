// Footer.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Function to handle scrolling to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Show button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="relative bg-gradient-to-b from-black to-gray-900 text-white py-16">

      {/* Back to top button - sticky and animated */}
      <motion.button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 z-50 ${showScrollButton ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        aria-label="Scroll to top"
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <path d="m18 15-6-6-6 6"/>
        </motion.svg>
      </motion.button>
    </footer>
  );
}
