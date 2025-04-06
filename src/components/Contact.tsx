import { motion } from "framer-motion"

export default function Contact() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-gray-900 via-blue-950 to-black text-white relative overflow-hidden">
      {/* Animated background elements - adjusted for mobile */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="text-6xl sm:text-8xl md:text-9xl lg:text-[20rem] font-bold text-gray-700 select-none absolute -right-5 sm:-right-10 md:-right-20 top-1/4"
        >
          CONTACT
        </motion.h1>
      </div>

      {/* Decorative elements - adjusted for all screen sizes */}
      <div className="absolute top-5 sm:top-10 left-5 sm:left-10 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 rounded-full bg-blue-500 blur-[60px] sm:blur-[80px] md:blur-[100px] opacity-20"></div>
      <div className="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 rounded-full bg-indigo-600 blur-[80px] sm:blur-[100px] md:blur-[120px] opacity-10"></div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="container mx-auto px-4 sm:px-6 relative z-10"
      >
        {/* Contact Heading with underline animation - responsive text sizes */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center mb-10 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 tracking-wide">
            <span className="text-white">CONTACT</span>
            <span className="text-blue-400 ml-2 sm:ml-4">ME</span>
          </h2>
          <div className="relative">
            <div className="h-1 w-16 sm:w-20 md:w-24 bg-blue-500 rounded"></div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              className="h-1 w-full bg-blue-500 rounded absolute top-0 left-0 opacity-50"
            ></motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
          {/* Contact Info Column - improved padding for different screens */}
          <motion.div
            variants={itemVariants}
            className="backdrop-blur-sm bg-black bg-opacity-30 p-5 sm:p-6 md:p-8 rounded-xl border border-blue-900"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 text-blue-400">GET IN TOUCH</h3>

            <div className="space-y-6 md:space-y-8">
              {/* Email - adjusted for better mobile display */}
              <div className="group">
                <p className="text-base sm:text-lg text-gray-400 mb-1">Email</p>
                <motion.a
                  href="mailto:kylecervantes2003@gmail.com"
                  className="text-base sm:text-lg md:text-xl font-medium text-white flex items-center flex-wrap p-2 -m-2 rounded-lg hover:bg-blue-900 hover:bg-opacity-20 transition-all duration-300 border border-transparent hover:border-blue-700"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)"
                  }}
                >
                  <div className="mr-3 p-2 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="break-all">kylecervantes2003@gmail.com</span>
                </motion.a>
              </div>

              {/* Phone - adjusted for mobile */}
              <div className="group">
                <p className="text-base sm:text-lg text-gray-400 mb-1">Phone</p>
                <a
                  href="tel:+639692091713"
                  className="text-base sm:text-lg md:text-xl font-medium text-white group-hover:text-blue-300 transition-colors flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +63-969-209-1713
                </a>
              </div>

              {/* Location - adjusted for mobile */}
              <div className="group">
                <p className="text-base sm:text-lg text-gray-400 mb-1">Location</p>
                <p className="text-base sm:text-lg md:text-xl font-medium text-white group-hover:text-blue-300 transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Lianga Surigao Del Sur
                </p>
              </div>

              {/* Social Media Links - better spacing for mobile */}
              <div className="pt-2 sm:pt-4">
                <p className="text-base sm:text-lg text-gray-400 mb-2 sm:mb-3">Connect With Me</p>
                <div className="flex space-x-3 sm:space-x-4">
                  <motion.a
                    whileHover={{ y: -5 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-900 bg-opacity-30 flex items-center justify-center rounded-full border border-blue-800 text-blue-400 hover:bg-blue-800 hover:bg-opacity-50 transition-all"
                    href="https://github.com/Kyleeestone"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" sm="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -5 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-900 bg-opacity-30 flex items-center justify-center rounded-full border border-blue-800 text-blue-400 hover:bg-blue-800 hover:bg-opacity-50 transition-all"
                    href="https://www.instagram.com/its_kookiiiee/?igsh=MWI1c3dhcm5uNmJ6cQ%3D%3D#"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" sm="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -5 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-900 bg-opacity-30 flex items-center justify-center rounded-full border border-blue-800 text-blue-400 hover:bg-blue-800 hover:bg-opacity-50 transition-all"
                    href="https://web.facebook.com/profile.php?id=61565167920693"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" sm="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.313h3.591l-.467 3.622h-3.124v9.294h6.127c.733 0 1.325-.591 1.325-1.324v-21.35c0-.733-.592-1.325-1.325-1.325z"/>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
