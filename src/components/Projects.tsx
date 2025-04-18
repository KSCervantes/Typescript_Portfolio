import { projects } from "../data/projects"
import { motion } from "framer-motion"
import { ExternalLink, Github, Star } from "lucide-react"

// Define the project type to match the properties you use
interface Project {
  title: string;
  description: string;
  link: string;
  image?: string;
  technologies?: string[];
  demo?: string;
  status?: string;
}

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="projects" className="py-32 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background elements matching Experience section */}
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header matching Experience section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-16 md:mb-24"
        >
          <div className="relative mb-4">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              <span className="text-white">MY</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 ml-2">PROJECTS</span>
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent absolute -bottom-2 left-0"
            ></motion.div>
          </div>
          <p className="text-blue-300/80 text-base sm:text-lg max-w-xl text-center mt-4">
            Showcasing my creative work and technical expertise in action
          </p>
        </motion.div>

        {/* Enhanced Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
        >
          {(projects as Project[]).map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative group"
            >
              {/* Glow effect on hover - matching Experience cards */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl opacity-0 group-hover:opacity-30 blur transition duration-300"></div>

              {/* Card */}
              <div className="relative bg-gray-800/70 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 group-hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col">
                {/* Image Section */}
                <div className="h-48 sm:h-56 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full bg-gradient-to-br from-gray-800 to-gray-900">
                      <span className="text-gray-400">No image available</span>
                    </div>
                  )}

                  {/* Project title overlay on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  </div>

                  {/* Corner decoration - matching Experience cards */}
                  <div className="absolute top-0 right-0 border-t-[40px] border-r-[40px] border-t-transparent border-r-blue-500/20"></div>
                </div>

                {/* Content Section */}
                <div className="p-5 flex-grow">
                  <p className="text-gray-300 mb-5 text-sm border-l-2 border-blue-500/30 pl-4">
                    {project.description}
                  </p>

                  {/* Status */}
                  {project.status && (
                    <p className="text-md text-yellow-400 font-semibold mb-4">
                      {project.status}
                    </p>
                  )}

                  {/* Technologies */}
                  {project.technologies && (
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-blue-400 mb-3 font-semibold flex items-center">
                        <Star size={14} className="mr-1" />
                        Technologies Used
                      </h4>
                      <div className="space-y-2">
                        {project.technologies.map((tech, i) => (
                          <div key={i} className="flex items-center bg-gray-900/50 rounded-lg p-2 text-sm">
                            <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                            <p className="text-gray-200">{tech}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Links */}
                <div className="p-5 border-t border-white/10 flex justify-between items-center">
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-blue-400 px-4 py-2 rounded-lg transition-all duration-300"
                    >
                      <Github size={16} />
                      <span className="font-medium">GitHub</span>
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-lg shadow-blue-600/20"
                    >
                      <ExternalLink size={16} />
                      <span className="font-medium">Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
