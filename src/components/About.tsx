import { motion } from "framer-motion";
import { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Code, Settings, User, Globe } from "lucide-react";

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
    <section id="about" className="py-16 sm:py-32 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
      {/* Background elements - Matched with Experience section */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>

        {/* Animated gradient blobs - Matched with Experience section */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/4 left-1/5 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 rounded-full bg-gradient-to-br from-blue-600/20 to-blue-400/10 blur-3xl"
        ></motion.div>

        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-1/3 right-1/4 w-64 sm:w-80 md:w-[30rem] h-64 sm:h-80 md:h-[30rem] rounded-full bg-gradient-to-tr from-indigo-700/20 to-violet-500/10 blur-3xl"
        ></motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10"
      >
        {/* Heading with modern underline - Matched with Experience section */}
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

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Personal Info Column - 5 columns wide - Updated to match Experience section */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="relative group">
              {/* Glow effect on hover - matched with Experience section */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl opacity-0 group-hover:opacity-30 blur transition duration-300"></div>

              <div className="bg-gray-800/70 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-gray-700 group-hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden">
                {/* Terminal header bar - Updated colors to match Experience */}
                <div className="flex items-center justify-between mb-6 bg-gray-900/80 -mx-8 -mt-8 px-4 py-3 border-b border-gray-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-blue-300 font-mono">profile.js</div>
                  <div></div>
                </div>

                {/* Code-style object declaration - Updated colors */}
                <div className="font-mono text-md">
                  <div className="mb-2">
                    <span className="text-blue-400">const</span> <span className="text-blue-300">Information</span> = {"{"}
                  </div>

                  {/* Properties with icons - Updated text colors */}
                  <div className="ml-4 mb-1 flex items-center">
                    <User size={14} className="text-blue-400 mr-2 inline" />
                    <span className="text-gray-300">name</span>: <span className="text-blue-200">'Kyle Cervantes'</span>,
                  </div>
                  <div className="ml-4 mb-1 flex items-center">
                    <Code size={14} className="text-blue-400 mr-2 inline" />
                    <span className="text-gray-300">role</span>: <span className="text-blue-200">'Web & Mobile Developer'</span>,
                  </div>

                  {/* Tech stack as array - Updated text colors */}
                  <div className="ml-4 mb-1 flex items-start">
                    <Settings size={14} className="text-blue-400 mr-2 mt-1" />
                    <div>
                      <span className="text-gray-300">stack</span>: [
                      <span className="text-blue-200">'Flutter'</span>, <span className="text-blue-200">'React'</span>, <span className="text-blue-200">'JavaScript'</span>],
                    </div>
                  </div>

                  {/* Expertise as array - Updated text colors */}
                  <div className="ml-4 mb-1 flex items-start">
                    <Code size={14} className="text-blue-400 mr-2 mt-1" />
                    <div>
                      <span className="text-gray-300">expertise</span>: [
                    </div>
                  </div>
                  <div className="ml-8 mb-1">
                    <span className="text-blue-200">'Web Development'</span>,
                  </div>
                  <div className="ml-8 mb-1">
                    <span className="text-blue-200">'Mobile Development'</span>,
                  </div>
                  <div className="ml-8 mb-1">
                    <span className="text-blue-200">'Frontend'</span>
                  </div>
                  <div className="ml-4 mb-1">
                    ],
                  </div>

                  {/* Contact details with icons - Updated text colors */}
                  <div className="ml-4 mb-1 flex items-center">
                    <span className="w-4 h-4 text-blue-400 mr-2 flex items-center justify-center">
                      <span className="text-blue-400">#</span>
                    </span>
                    <span className="text-gray-300">age</span>: <span className="text-blue-200">'21 Years'</span>,
                  </div>
                  <div className="ml-4 mb-1 flex items-center">
                    <Globe size={14} className="text-blue-400 mr-2 inline" />
                    <span className="text-gray-300">nationality</span>: <span className="text-blue-200">'Filipino'</span>,
                  </div>
                  <div className="ml-4 mb-1 flex items-center">
                    <span className="w-4 h-4 text-blue-400 mr-2 flex items-center justify-center">
                      <span className="text-blue-400">🗣️</span>
                    </span>
                    <span className="text-gray-300">languages</span>:<span className="text-blue-200">'Filipino'</span>, <span className="text-blue-200">'English'</span>,
                  </div>
                  {/* Close object */}
                  <div>
                    {"};"}
                  </div>
                </div>

                {/* Animated cursor */}
                <div className="h-4 w-2 bg-blue-400/70 mt-2 animate-pulse"></div>

                {/* Corner decoration like in Experience section */}
                <div className="absolute top-0 right-0 border-t-[40px] border-r-[40px] border-t-transparent border-r-blue-500/20"></div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - 7 columns wide */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col gap-8">
            {/* Combined Soft Skills & Technical Expertise Box - Hover effect added */}
            <motion.div
              variants={itemVariants}
              className="relative group"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Glow effect on hover - matching Experience section */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl opacity-0 group-hover:opacity-30 blur transition duration-300"></div>

              <div className="relative bg-gray-800/70 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 group-hover:border-blue-500/50 transition-all duration-300 p-6 sm:p-8">
                {/* Soft Skills Section */}
                <div className="mb-12">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center">
                    <div className="p-2 bg-blue-500/20 rounded-lg mr-3">
                      <User size={18} className="text-blue-400" />
                    </div>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">SOFT SKILLS</span>
                    <span className="flex-grow border-t border-blue-500/20 ml-4"></span>
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                    {softSkills.map((skill, index) => (
                      <div key={index} className="flex flex-col items-center bg-gray-900/50 p-4 rounded-lg hover:bg-gray-900/80 transition-all duration-300">
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
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center">
                    <div className="p-2 bg-blue-500/20 rounded-lg mr-3">
                      <Code size={18} className="text-blue-400" />
                    </div>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">TECHNICAL EXPERTISE</span>
                    <span className="flex-grow border-t border-blue-500/20 ml-4"></span>
                  </h3>

                  {/* Filter tabs - Updated styling for consistency */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {techCategories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                          ${activeCategory === category
                            ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                            : "bg-gray-900/50 text-gray-300 hover:bg-gray-900/80"}`}
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

                {/* Corner decoration like in Experience section */}
                <div className="absolute top-0 right-0 border-t-[40px] border-r-[40px] border-t-transparent border-r-blue-500/20"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
