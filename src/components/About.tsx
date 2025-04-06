import { motion } from "framer-motion"

export default function About() {
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

  // Soft skills data
  const softSkills = [
    { name: "Leadership", percentage: 60 },
    { name: "Teamwork", percentage: 92 },
    { name: "Communication", percentage: 50 },
    { name: "Problem Solving", percentage: 50 }
  ];

  // Technical expertise data
  const techExpertise = [
    { name: "Flutter", category: "frontend", color: "bg-blue-500" },
    { name: "React", category: "frontend", color: "bg-blue-400" },
    { name: "JavaScript", category: "frontend", color: "bg-yellow-400" },
    { name: "HTML", category: "frontend", color: "bg-orange-500" },
    { name: "Tailwind CSS", category: "frontend", color: "bg-teal-500" },
    { name: "Python", category: "backend", color: "bg-green-500" },
    { name: "PHP", category: "backend", color: "bg-indigo-500" },
    { name: "MySQL", category: "database", color: "bg-blue-600" },
    { name: "Firebase", category: "database", color: "bg-yellow-500" },
    { name: "Supabase", category: "database", color: "bg-emerald-500" }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-r from-gray-900 via-blue-950 to-black text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="text-9xl md:text-[20rem] font-bold text-gray-700 select-none absolute -right-20 top-1/4"
        >
          RESUME
        </motion.h1>
      </div>

      {/* Decorative elements - Using blue tones like the hero section */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-500 blur-[100px] opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-indigo-600 blur-[120px] opacity-10"></div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="container mx-auto px-6 relative z-10"
      >
        {/* About Me Heading with underline animation */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-3 tracking-wide">
            <span className="text-white">ABOUT</span>
            <span className="text-blue-400 ml-4">ME</span>
          </h2>
          <div className="relative">
            <div className="h-1 w-24 bg-blue-500 rounded"></div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              className="h-1 w-full bg-blue-500 rounded absolute top-0 left-0 opacity-50"
            ></motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Personal Info Column */}
          <motion.div variants={itemVariants} className="backdrop-blur-sm bg-black bg-opacity-30 p-8 rounded-xl border border-blue-900">
            <h3 className="text-3xl font-bold mb-8 text-blue-400">PERSONAL INFORMATION:</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8">
              <div className="group">
                <p className="text-lg text-gray-400 mb-1">First Name</p>
                <p className="text-xl font-medium text-white group-hover:text-blue-300 transition-colors">Kyle</p>
              </div>

              <div className="group">
                <p className="text-lg text-gray-400 mb-1">Middle Name</p>
                <p className="text-xl font-medium text-white group-hover:text-blue-300 transition-colors">Sampiano</p>
              </div>

              <div className="group">
                <p className="text-lg text-gray-400 mb-1">Last Name</p>
                <p className="text-xl font-medium text-white group-hover:text-blue-300 transition-colors">Cervantes</p>
              </div>

              <div className="group">
                <p className="text-lg text-gray-400 mb-1">Age</p>
                <p className="text-xl font-medium text-white group-hover:text-blue-300 transition-colors">21 Years</p>
              </div>

              <div className="group">
                <p className="text-lg text-gray-400 mb-1">Nationality</p>
                <p className="text-xl font-medium text-white group-hover:text-blue-300 transition-colors">Filipino</p>
              </div>

              <div className="group">
                <p className="text-lg text-gray-400 mb-1">Languages</p>
                <p className="text-xl font-medium text-white group-hover:text-blue-300 transition-colors">Filipino, English</p>
              </div>

              <div className="group">
                <p className="text-lg text-gray-400 mb-1">Address</p>
                <p className="text-xl font-medium text-white group-hover:text-blue-300 transition-colors">Lianga Surigao Del Sur</p>
              </div>

              <div className="group">
                <p className="text-lg text-gray-400 mb-1">Phone</p>
                <p className="text-xl font-medium text-white group-hover:text-blue-300 transition-colors">+63-969-209-1713</p>
              </div>

              <div className="group">
                <p className="text-lg text-gray-400 mb-1">Freelance:</p>
                <p className="text-xl font-medium text-white group-hover:text-blue-300 transition-colors">Available</p>
              </div>

              <div className="group">
                <p className="text-lg text-gray-400 mb-1">Email</p>
                <p className="text-xl font-medium text-white group-hover:text-blue-300 transition-colors">kylecervantes2003@gmail.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            {/* Soft Skills Section with Circular Progress */}
            <motion.div
              variants={itemVariants}
              className="backdrop-blur-sm bg-black bg-opacity-30 p-8 rounded-xl border border-blue-900 mb-6"
            >
              <h3 className="text-3xl font-bold mb-8 text-blue-400">SOFT SKILLS:</h3>
              <div className="grid grid-cols-2 gap-6">
                {softSkills.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="relative h-32 w-32 mb-4">
                      {/* Background circle */}
                      <div className="absolute inset-0 rounded-full border-4 border-gray-700"></div>

                      {/* Colored progress circle */}
                      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
                        <motion.circle
                          cx="50"
                          cy="50"
                          r="48"
                          fill="none"
                          strokeWidth="4"
                          stroke="url(#blueGradient)"
                          strokeLinecap="round"
                          strokeDasharray={`${skill.percentage * 3.01}, 1000`}
                          transform="rotate(-90 50 50)"
                          initial={{ strokeDasharray: "0, 1000" }}
                          whileInView={{ strokeDasharray: `${skill.percentage * 3.01}, 1000` }}
                          transition={{ duration: 1.5, delay: index * 0.2 }}
                        />
                        <defs>
                          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3B82F6" />
                            <stop offset="100%" stopColor="#60A5FA" />
                          </linearGradient>
                        </defs>
                      </svg>

                      {/* Percentage display */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.span
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                          className="text-2xl font-bold text-blue-400"
                        >
                          {skill.percentage}%
                        </motion.span>
                      </div>
                    </div>
                    <p className="text-lg font-medium text-white text-center group-hover:text-blue-300 transition-colors">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stats Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Years Experience Box */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative border border-blue-900 p-8 rounded-xl bg-black bg-opacity-50 backdrop-blur-sm overflow-hidden group"
              >
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <motion.h2
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-6xl font-bold text-blue-400"
                >
                  1<span className="text-4xl">+</span>
                </motion.h2>
                <div className="mt-4 flex items-center">
                  <span className="w-10 h-0.5 bg-blue-500 mr-3"></span>
                  <p className="uppercase font-medium text-gray-300">
                    YEARS OF<br />EXPERIENCE
                  </p>
                </div>
              </motion.div>

              {/* Happy Customers Box */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative border border-blue-900 p-8 rounded-xl bg-black bg-opacity-50 backdrop-blur-sm overflow-hidden group"
              >
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-indigo-600 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <motion.h2
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, delay: 0.3, repeat: Infinity }}
                  className="text-6xl font-bold text-blue-400"
                >
                  4<span className="text-4xl">+</span>
                </motion.h2>
                <div className="mt-4 flex items-center">
                  <span className="w-10 h-0.5 bg-blue-500 mr-3"></span>
                  <p className="uppercase font-medium text-gray-300">
                    SATISFIED<br />CUSTOMERS
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Certificates Box */}
            <motion.div
              whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
              className="relative border border-blue-900 p-8 rounded-xl bg-black bg-opacity-50 backdrop-blur-sm overflow-hidden group"
            >
              <div className="absolute -right-4 -top-4 w-32 h-32 bg-blue-800 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <motion.h2
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, delay: 0.6, repeat: Infinity }}
                className="text-6xl font-bold text-blue-400"
              >
                4<span className="text-4xl">+</span>
              </motion.h2>
              <div className="mt-4 flex items-center">
                <span className="w-10 h-0.5 bg-blue-500 mr-3"></span>
                <p className="uppercase font-medium text-gray-300">
                  ACHIEVED<br />EXPERIENCE
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Technical Expertise Section */}
        <motion.div
          variants={itemVariants}
          className="backdrop-blur-sm bg-black bg-opacity-30 p-8 rounded-xl border border-blue-900 mt-16"
        >
          <h3 className="text-3xl font-bold mb-8 text-blue-400">TECHNICAL EXPERTISE:</h3>
          <div className="space-y-6">
            {/* Frontend */}
            <div>
              <h4 className="text-lg font-medium mb-3 text-blue-300">Frontend Development</h4>
              <div className="flex flex-wrap gap-2">
                {techExpertise
                  .filter(tech => tech.category === "frontend")
                  .map((tech, index) => (
                    <span
                      key={index}
                      className={`${tech.color} text-gray-900 font-medium px-3 py-1 rounded-full text-sm`}
                    >
                      {tech.name}
                    </span>
                  ))
                }
              </div>
            </div>

            {/* Backend */}
            <div>
              <h4 className="text-lg font-medium mb-3 text-green-300">Backend Development</h4>
              <div className="flex flex-wrap gap-2">
                {techExpertise
                  .filter(tech => tech.category === "backend")
                  .map((tech, index) => (
                    <span
                      key={index}
                      className={`${tech.color} text-gray-900 font-medium px-3 py-1 rounded-full text-sm`}
                    >
                      {tech.name}
                    </span>
                  ))
                }
              </div>
            </div>

            {/* Database */}
            <div>
              <h4 className="text-lg font-medium mb-3 text-yellow-300">Database & Cloud Services</h4>
              <div className="flex flex-wrap gap-2">
                {techExpertise
                  .filter(tech => tech.category === "database")
                  .map((tech, index) => (
                    <span
                      key={index}
                      className={`${tech.color} text-gray-900 font-medium px-3 py-1 rounded-full text-sm`}
                    >
                      {tech.name}
                    </span>
                  ))
                }
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}