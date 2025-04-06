import { projects } from "../data/projects"
import { motion } from "framer-motion"

// Define the project type to match the properties you use
interface Project {
  title: string;
  description: string;
  link: string;
  image?: string;
  technologies?: string[];
  demo?: string;
}

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-gray-900 via-blue-950 to-black text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="text-6xl sm:text-9xl md:text-[15rem] lg:text-[20rem] font-bold text-gray-700 select-none absolute -right-20 top-1/4"
        >
          PROJECTS
        </motion.h1>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 sm:w-32 h-20 sm:h-32 rounded-full bg-blue-500 blur-[80px] sm:blur-[100px] opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-24 sm:w-40 h-24 sm:h-40 rounded-full bg-indigo-600 blur-[90px] sm:blur-[120px] opacity-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 tracking-wide text-center">
            <span className="text-white">MY</span>
            <span className="text-blue-400 ml-2 sm:ml-4">PROJECTS</span>
          </h2>
          <div className="relative">
            <div className="h-1 w-16 sm:w-24 bg-blue-500 rounded"></div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              className="h-1 w-full bg-blue-500 rounded absolute top-0 left-0 opacity-50"
            ></motion.div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
        >
          {(projects as Project[]).map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="backdrop-blur-sm bg-black bg-opacity-30 rounded-xl overflow-hidden shadow-lg border border-blue-900 hover:border-blue-500 transition-all duration-300 flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="h-36 sm:h-48 bg-gray-800 relative overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500">
                    <span>No image available</span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6 flex-grow">
                <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{project.title}</h4>
                <p className="text-sm sm:text-base text-gray-300 mb-4">{project.description}</p>

                {/* Tech Stack Used */}
                {project.technologies && (
                  <div className="mb-4">
                    <p className="text-xs sm:text-sm text-gray-400 mb-2">Technologies used:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech: string, i: number) => (
                        <span key={i} className="text-xs bg-gray-800 text-blue-300 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Project Links */}
              <div className="p-3 sm:p-4 border-t border-blue-900 flex justify-between">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition flex items-center text-sm sm:text-base"
                  >
                    GitHub
                    <svg className="h-3 w-3 sm:h-4 sm:w-4 ml-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.775.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                    </svg>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 transition flex items-center text-sm sm:text-base"
                  >
                    Live Demo
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm12 9V5a1 1 0 00-1-1H5a1 1 0 00-1 1v7h13zm-1 1H4v2a1 1 0 001 1h10a1 1 0 001-1v-2z" clipRule="evenodd" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}