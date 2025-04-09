import { motion } from "framer-motion"
import { useState } from "react"

export default function Contact() {
  const [hoverLink, setHoverLink] = useState<number | null>(null);

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
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Social media links data
  const socialLinks = [
    {
      name: "GitHub",
      url: "#",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/its_kylcrvnts/",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
    },
    {
      name: "Facebook",
      url: "https://web.facebook.com/profile.php?id=61565167920693",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.313h3.591l-.467 3.622h-3.124v9.294h6.127c.733 0 1.325-.591 1.325-1.324v-21.35c0-.733-.592-1.325-1.325-1.325z"/>
            </svg>
    },
    {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kyle-cervantes/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.063-1.867-3.063-1.868 0-2.155 1.46-2.155 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.038 0 3.6 2.001 3.6 4.604v5.592z" />
      </svg>
    ),
  },
  ];

  // Contact info data
  const contactInfo = [
    {
      title: "Email",
      value: "kylecervantes2003@gmail.com",
      link: "mailto:kylecervantes2003@gmail.com",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
    },
    {
      title: "Phone",
      value: "+63-969-209-1713",
      link: "tel:+639692091713",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
    },
    {
      title: "Location",
      value: "Lianga Surigao Del Sur",
      link: null,
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-32 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Enhanced background elements - matching About section */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>

        {/* Animated gradient blobs */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/4 left-1/5 w-48 md:w-96 h-48 md:h-96 rounded-full bg-gradient-to-br from-blue-600/20 to-blue-400/10 blur-3xl"
        ></motion.div>

        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-1/3 right-1/4 w-64 md:w-[30rem] h-64 md:h-[30rem] rounded-full bg-gradient-to-tr from-indigo-700/20 to-violet-500/10 blur-3xl"
        ></motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="container mx-auto px-4 sm:px-6 relative z-10"
      >
        {/* Contact Heading with modern underline */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center mb-12 md:mb-20"
        >
          <div className="relative mb-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-center">
              <span className="text-white">CONTACT</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 ml-2 md:ml-4">ME</span>
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent absolute -bottom-2 left-0"
            ></motion.div>
          </div>
          <p className="text-blue-300/80 text-base md:text-lg max-w-xl text-center px-4">
            Let's connect and discuss how we can work together on your next project
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="max-w-4xl mx-auto"
        >
          <div className="backdrop-filter backdrop-blur-xl bg-white/5 p-5 sm:p-8 md:p-10 rounded-2xl border border-white/10 shadow-xl relative overflow-hidden group transition-all duration-300 hover:shadow-blue-900/20 hover:border-blue-500/30">
            {/* Decorative corner elements */}
            <div className="absolute w-12 h-12 md:w-16 md:h-16 -top-6 md:-top-8 -left-6 md:-left-8 border-b border-r border-blue-500/30 rounded-br-3xl"></div>
            <div className="absolute w-12 h-12 md:w-16 md:h-16 -bottom-6 md:-bottom-8 -right-6 md:-right-8 border-t border-l border-blue-500/30 rounded-tl-3xl"></div>

            {/* Main content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10">
              {/* Contact Info Column */}
              <div className="lg:col-span-7 space-y-6 md:space-y-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold flex items-center mb-4 md:mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">GET IN TOUCH</span>
                    <span className="flex-grow border-t border-blue-500/20 ml-4"></span>
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base mb-6 md:mb-8">
                    Feel free to reach out if you have any questions or would like to collaborate on a project. I'm always open to new opportunities and challenges.
                  </p>
                </div>

                {/* Contact Info Items - Mobile optimized */}
                <div className="space-y-4 md:space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="group/item"
                    >
                      {item.link ? (
                        <a
                          href={item.link}
                          className="flex items-start p-3 md:p-4 rounded-xl transition-all duration-300 hover:bg-white/5"
                          onMouseEnter={() => setHoverLink(index)}
                          onMouseLeave={() => setHoverLink(null)}
                        >
                          <div className="mr-3 md:mr-4 p-2 md:p-3 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg shadow-lg shadow-blue-500/20">
                            {item.icon}
                          </div>
                          <div className="overflow-hidden">
                            <h4 className="text-xs md:text-sm font-medium text-blue-300/90 mb-1">{item.title}</h4>
                            <p className="text-base md:text-lg font-medium text-white relative overflow-hidden break-all md:break-normal">
                              {item.value}
                              <span className={`absolute bottom-0 left-0 h-px bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-300 ${hoverLink === index ? 'w-full' : 'w-0'}`}></span>
                            </p>
                          </div>
                        </a>
                      ) : (
                        <div
                          className="flex items-start p-3 md:p-4 rounded-xl transition-all duration-300 hover:bg-white/5"
                          onMouseEnter={() => setHoverLink(index)}
                          onMouseLeave={() => setHoverLink(null)}
                        >
                          <div className="mr-3 md:mr-4 p-2 md:p-3 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg shadow-lg shadow-blue-500/20">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="text-xs md:text-sm font-medium text-blue-300/90 mb-1">{item.title}</h4>
                            <p className="text-base md:text-lg font-medium text-white relative overflow-hidden">
                              {item.value}
                              <span className={`absolute bottom-0 left-0 h-px bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-300 ${hoverLink === index ? 'w-full' : 'w-0'}`}></span>
                            </p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Social Media Links - Mobile optimized */}
                <div className="pt-4 md:pt-6">
                  <h4 className="text-base md:text-lg font-medium text-blue-300/90 mb-4 md:mb-6">
                    Connect With Me
                    <div className="h-px w-20 bg-gradient-to-r from-blue-400 to-transparent mt-2"></div>
                  </h4>
                  <div className="flex flex-wrap gap-3 md:gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        aria-label={social.name}
                        whileHover={{
                          y: -5,
                          boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)"
                        }}
                        className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center rounded-lg text-white shadow-lg transition-all duration-300 hover:text-white"
                      >
                        {social.icon}
                        <span className="absolute mt-16 opacity-0 group-hover:opacity-100 text-xs font-medium transition-opacity duration-300">{social.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Map/Visual Column - Mobile optimized */}
              <div className="lg:col-span-5">
                <div className="h-56 sm:h-64 md:h-full min-h-64 rounded-xl overflow-hidden relative group">
                  {/* Placeholder map/location visual - Replace with actual map component if available */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-black/50 z-10 group-hover:opacity-60 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="text-center px-4 md:px-6">
                      <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 rounded-full bg-blue-500 flex items-center justify-center animate-pulse">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Lianga, Surigao Del Sur</h3>
                      <p className="text-blue-200 text-xs md:text-sm">Philippines</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-indigo-900 opacity-60"></div>
                  <div className="absolute inset-0 bg-[url('/api/placeholder/800/600')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
