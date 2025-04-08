import { motion } from "framer-motion";
import { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Import the separated skill data
import { techExpertise, techCategories } from "../data/technicalSkills";
import { softSkills } from "../data/softSkills";

export default function About() {
  const [activeCategory, setActiveCategory] = useState("all");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.7
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

  // Filter tech expertise based on active category
  const filteredTech = activeCategory === "all"
    ? techExpertise
    : techExpertise.filter(tech => tech.category === activeCategory);

  return (
    <section id="about" className="py-16 sm:py-32 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Enhanced background elements - similar to Hero section */}
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
          className="absolute top-1/4 left-1/5 w-64 md:w-96 h-64 md:h-96 rounded-full bg-gradient-to-br from-blue-600/20 to-blue-400/10 blur-3xl"
        ></motion.div>

        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-1/3 right-1/4 w-80 md:w-[30rem] h-80 md:h-[30rem] rounded-full bg-gradient-to-tr from-indigo-700/20 to-violet-500/10 blur-3xl"
        ></motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="container mx-auto px-4 sm:px-6 relative z-10"
      >
        {/* Heading with modern underline */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center mb-16 sm:mb-24"
        >
          <div className="relative mb-4">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">
              <span className="text-white">ABOUT</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 ml-2">ME</span>
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent absolute -bottom-2 left-0"
            ></motion.div>
          </div>
          <p className="text-blue-300/80 text-base sm:text-lg max-w-md sm:max-w-xl text-center mt-4">
            Passionate developer with creative solutions for modern web & mobile expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Personal Info Column - 5 columns wide - REDESIGNED TO CODE STYLE */}
          <motion.div variants={itemVariants} className="lg:col-span-5">
            <div className="bg-[#0d1117] p-6 sm:p-8 rounded-2xl border border-[#30363d] shadow-xl relative overflow-hidden group transition-all duration-300 hover:shadow-blue-900/20 hover:border-blue-500/30">
              {/* Code-style comment header */}
              <div className="mb-4 text-[#8b949e] font-mono text-sm">
                <span className="text-[#4d76cc]">// Profile Information</span>
              </div>

              {/* Code-style object declaration */}
              <div className="font-mono text-sm">
                <div className="mb-2">
                  <span className="text-[#79c0ff]">const</span> <span className="text-[#7ee787]">Information</span> = {"{"}
                </div>

                {/* Properties - name, role */}
                <div className="ml-4 mb-1">
                  <span className="text-[#e6edf2]">name</span>: <span className="text-[#a5d6ff]">'Kyle Cervantes'</span>,
                </div>
                <div className="ml-4 mb-1">
                  <span className="text-[#e6edf2]">role</span>: <span className="text-[#a5d6ff]">'Web & Mobile Developer'</span>,
                </div>

                {/* Tech stack as array */}
                <div className="ml-4 mb-1">
                  <span className="text-[#e6edf2]">stack</span>: [
                  <span className="text-[#a5d6ff]">'Flutter'</span>, <span className="text-[#a5d6ff]">'React'</span>, <span className="text-[#a5d6ff]">'JavaScript'</span>],
                </div>

                {/* Expertise as array */}
                <div className="ml-4 mb-1">
                  <span className="text-[#e6edf2]">expertise</span>: [
                </div>
                <div className="ml-8 mb-1">
                  <span className="text-[#a5d6ff]">'Web Development'</span>,
                </div>
                <div className="ml-8 mb-1">
                  <span className="text-[#a5d6ff]">'Mobile Development'</span>,
                </div>
                <div className="ml-8 mb-1">
                  <span className="text-[#a5d6ff]">'Frontend'</span>
                </div>
                <div className="ml-4 mb-1">
                  ],
                </div>

                {/* Contact details */}
                <div className="ml-4 mb-1">
                  <span className="text-[#e6edf2]">age</span>: <span className="text-[#a5d6ff]">'21 Years'</span>,
                </div>
                <div className="ml-4 mb-1">
                  <span className="text-[#e6edf2]">nationality</span>: <span className="text-[#a5d6ff]">'Filipino'</span>,
                </div>
                <div className="ml-4 mb-1">
                  <span className="text-[#e6edf2]">languages</span>: [<span className="text-[#a5d6ff]">'Filipino'</span>, <span className="text-[#a5d6ff]">'English'</span>],
                </div>
                <div className="ml-4 mb-1">
                  <span className="text-[#e6edf2]">address</span>: <span className="text-[#a5d6ff]">'Lianga Surigao Del Sur'</span>,
                </div>
                <div className="ml-4 mb-1">
                  <span className="text-[#e6edf2]">phone</span>: <span className="text-[#a5d6ff]">'+63-969-209-1713'</span>,
                </div>
                <div className="ml-4 mb-1">
                  <span className="text-[#e6edf2]">email</span>: <span className="text-[#a5d6ff]">'kylecervantes2003@gmail.com'</span>
                </div>

                {/* Close object */}
                <div>
                  {"};"}
                </div>
              </div>

              {/* Animated cursor */}
              <div className="h-4 w-2 bg-blue-400/70 mt-2 animate-pulse"></div>
            </div>
          </motion.div>

          {/* Right Column - 7 columns wide */}
          <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col gap-8">
            {/* Combined Soft Skills & Technical Expertise Box */}
            <motion.div
              variants={itemVariants}
              className="bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10 shadow-lg relative overflow-hidden"
            >
              {/* Soft Skills Section */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">SOFT SKILLS</span>
                  <span className="flex-grow border-t border-blue-500/20 ml-4"></span>
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                  {softSkills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20">
                        <CircularProgressbar
                          value={skill.percentage}
                          text={`${skill.percentage}%`}
                          styles={buildStyles({
                            textColor: "#ffffff",
                            pathColor: `url(#gradient-${index})`,
                            trailColor: "#2d3748",
                            textSize: "10px"
                          })}
                        />
                        {/* Gradient for each skill */}
                        <svg style={{ height: 0 }}>
                          <defs>
                            <linearGradient id={`gradient-${index}`} gradientTransform="rotate(90)">
                              <stop offset="0%" stopColor={skill.color.split(" ")[0].split("-")[1]} />
                              <stop offset="100%" stopColor={skill.color.split(" ")[1].split("-")[1]} />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <span className="mt-2 text-xs sm:text-sm font-medium text-white">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Expertise Section */}
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">TECHNICAL EXPERTISE</span>
                  <span className="flex-grow border-t border-blue-500/20 ml-4"></span>
                </h3>

                {/* Filter tabs */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {techCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                        ${activeCategory === category
                          ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                          : "bg-white/10 text-gray-300 hover:bg-white/20"}`}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>

                <motion.div
                  className="flex flex-wrap gap-3"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.05 }
                    }
                  }}
                >
                  {filteredTech.map((tech, index) => (
                    <motion.span
                      key={index}
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 }
                      }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                      className={`${tech.color} text-white font-medium px-4 py-2 rounded-lg text-sm flex items-center shadow-lg`}
                    >
                      {tech.name}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Row moved to bottom - Modern approach */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"
        >
          {[
            { number: "1+", label: "YEARS EXPERIENCE", color: "from-blue-500 to-blue-600" },
            { number: "4+", label: "SATISFIED CLIENTS", color: "from-cyan-400 to-blue-500" },
            { number: "4+", label: "ACHIEVEMENTS", color: "from-indigo-400 to-violet-500" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white/5 p-4 sm:p-6 rounded-2xl border border-white/10 shadow-lg relative overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5`}></div>

              <motion.h2
                animate={{
                  y: [0, -3, 0],
                  x: [0, 1, 0]
                }}
                transition={{ duration: 3, delay: index * 0.5, repeat: Infinity }}
                className={`text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}
              >
                {stat.number}
              </motion.h2>
              <div className="mt-3">
                <div className="h-px w-12 bg-gradient-to-r from-blue-400 to-transparent mb-2"></div>
                <p className="uppercase font-medium text-xs sm:text-sm tracking-wider text-gray-300">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
}
