import { motion } from "framer-motion";
import { ChevronUp, Map, Calendar, Code, Mail, Phone, Coffee } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const [currentYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  // Update time and visibility state
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { hour: "numeric", minute: "numeric", hour12: true, timeZone: "Asia/Manila" };
      setCurrentTime(now.toLocaleTimeString('en-US', options) + ' PHT');
    };

    window.addEventListener("scroll", toggleVisibility);

    updateTime();
    const timeInterval = setInterval(updateTime, 60000);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      clearInterval(timeInterval);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Skills categories
  const skillCategories = [
    { name: "Frontend", url: "#skills" },
    { name: "Backend", url: "#skills" },
    { name: "Design", url: "#skills" },
    { name: "Mobile", url: "#skills" },
  ];

  // Project categories
  const projectCategories = [
    { name: "Web Apps", url: "#projects" },
    { name: "Mobile Apps", url: "#projects" },
    { name: "UI/UX Design", url: "#projects" },
    { name: "Open Source", url: "#projects" },
  ];


  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden pt-20 pb-10">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] bg-[size:50px_50px] opacity-10"></div>

        {/* Animated gradient blobs */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/4 left-1/5 w-64 h-64 rounded-full bg-gradient-to-br from-blue-600/10 to-blue-400/5 blur-3xl"
        ></motion.div>

        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-gradient-to-tr from-indigo-700/10 to-violet-500/5 blur-3xl"
        ></motion.div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        className={`fixed bottom-8 right-8 p-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 z-50 transition-all duration-300 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        } hover:shadow-xl hover:shadow-purple-500/40`}
        onClick={scrollToTop}
        whileHover={{
          scale: 1.15,
          rotate: 10,
          boxShadow: "0 0 20px rgba(128, 90, 213, 0.8)", // Purple glow effect
        }}
        whileTap={{ scale: 0.95 }}
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} className="animate-bounce" />
      </motion.button>

      {/* Top wave separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-20"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-gray-900"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-gray-900"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-gray-900"
          ></path>
        </svg>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10"
      >
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand column */}
          <motion.div variants={itemVariants} className="md:col-span-4">
            <div>
              <div className="relative mb-6">
                <h3 className="text-3xl font-bold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Kyle</span>
                  <span className="text-white">Cervantes</span>
                </h3>
                <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-cyan-400 mt-2"></div>
              </div>

              <p className="text-blue-200/80 mb-6 leading-relaxed text-justify">
                Creative developer focused on building innovative web experiences that blend design and technology. Let's build something amazing together.
              </p>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="flex items-center text-blue-300 text-sm">
                  <Map size={14} className="mr-1 text-blue-400" />
                  Lianga, Surigao Del Sur, Philippines
                </span>
                <span className="flex items-center text-blue-300 text-sm">
                  <Calendar size={14} className="mx-1 text-blue-400" />
                  {currentTime}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Projects column */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-4 text-white flex items-center">
              <span className="h-4 w-1 bg-cyan-500 mr-2 rounded-r"></span>
              Projects
            </h4>
            <ul className="space-y-2">
              {projectCategories.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    className="text-blue-200/80 hover:text-blue-300 transition-colors duration-300 flex items-center group"
                  >
                    <span className="h-0.5 w-0 bg-cyan-400 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Skills column */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-4 text-white flex items-center">
              <span className="h-4 w-1 bg-indigo-500 mr-2 rounded-r"></span>
              Skills
            </h4>
            <ul className="space-y-2">
              {skillCategories.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    className="text-blue-200/80 hover:text-blue-300 transition-colors duration-300 flex items-center group"
                  >
                    <span className="h-0.5 w-0 bg-indigo-400 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact column */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-4 text-white flex items-center">
              <span className="h-4 w-1 bg-purple-500 mr-2 rounded-r"></span>
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:kylecervantes2003@gmail.com"
                  className="text-blue-200/80 hover:text-blue-300 transition-colors duration-300 flex items-center group"
                >
                  <Mail size={16} className="mr-2 text-purple-400" />
                  <span className="group-hover:underline">kylecervantes2003@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+639692091713"
                  className="text-blue-200/80 hover:text-blue-300 transition-colors duration-300 flex items-center group"
                >
                  <Phone size={16} className="mr-2 text-purple-400" />
                  <span className="group-hover:underline">+63-969-209-1713</span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="inline-flex items-center px-3 py-1 mt-2 text-sm rounded border border-purple-500 text-purple-300 hover:bg-purple-500/10 transition-colors duration-300"
                >
                  <Calendar size={14} className="mr-1" />
                  <span>Schedule a call</span>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Inspirational quote */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border border-blue-800/30 rounded-xl p-6 mb-12 backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex-grow">
              <p className="text-lg font-light italic text-blue-200">
                "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle."
              </p>
              <p className="mt-2 text-sm text-blue-300">— Steve Jobs</p>
            </div>
            <div className="flex-shrink-0">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-4 py-2 rounded-lg shadow-lg shadow-blue-500/20 transition-all duration-300"
              >
                <Mail size={16} className="mr-2" />
                <span>Get in Touch</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Bottom section with copyright and additional info */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Thank you message */}
            <motion.div variants={itemVariants} className="flex items-center">
              <Coffee size={16} className="text-amber-400 mr-2" />
              <p className="text-blue-200/70 text-sm">
                Thanks for visiting my portfolio!
              </p>
            </motion.div>

            {/* Tech stack */}
            <motion.div variants={itemVariants} className="flex items-center justify-center">
              <Code size={16} className="text-blue-400 mr-2" />
              <p className="text-blue-200/70 text-sm">
                Built with React, Tailwind CSS & Framer Motion
              </p>
            </motion.div>

            {/* Last updated */}
            <motion.div variants={itemVariants} className="flex items-center justify-end">
              <p className="text-blue-200/70 text-sm">
                Last updated: April 2025
              </p>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between items-center text-sm text-blue-200/70"
          >
            <p>© {currentYear} Kyle Cervantes. All rights reserved.</p>
            <div className="flex mt-2 md:mt-0">
              <a href="#" className="mx-2 hover:text-blue-300 transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="mx-2 hover:text-blue-300 transition-colors">Terms of Use</a>
              <span>•</span>
              <a href="#" className="mx-2 hover:text-blue-300 transition-colors">Sitemap</a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}