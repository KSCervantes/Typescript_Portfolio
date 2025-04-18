import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Star } from "lucide-react";

export default function Experience() {
  // Array of experience data
  const experiences = [
    {
      id: 1,
      company: "NEMSU Lianga Campus",
      position: "Web Developer",
      year: "2023 - Present",
      location: "Lianga, Surigao del Sur",
      description: "Collaborated on building responsive web applications using React and Tailwind CSS.",
      achievements: ["Improved page load speed by 40%", "Implemented new design system"]
    },
    {
      id: 2,
      company: "NEMSU Lianga Campus",
      position: "Mobile App Developer",
      year: "2025 - Present",
      location: "Lianga, Surigao del Sur",
      description: "Designed and developed cross-platform mobile applications using Flutter. Worked on UI/UX implementation and database integration.",
      achievements: ["Led team of 3 student developers",  "Conducted user testing and feedback sessions"]
    }
  ];

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

  return (
    <section
      id="experience"
      className="py-16 sm:py-32 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>

        {/* Animated gradient blobs */}
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
        {/* Heading - Matching About Section Style */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center mb-16 sm:mb-24"
        >
          <div className="relative mb-4">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">
              <span className="text-white">WORK</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 ml-2">EXPERIENCE</span>
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent absolute -bottom-2 left-0"
            ></motion.div>
          </div>
          <p className="text-blue-300/80 text-base sm:text-lg max-w-md sm:max-w-xl text-center mt-4">
            Professional milestones that have shaped my career and expanded my technical expertise.
          </p>
        </motion.div>

        {/* Experience Cards - New Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {experiences.map((experience) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative group"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl opacity-0 group-hover:opacity-30 blur transition duration-300"></div>

              {/* Card */}
              <div className="relative bg-gray-800/70 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 group-hover:border-blue-500/50 transition-all duration-300">
                {/* Top section with company and position */}
                <div className="bg-gray-900/80 p-5 border-b border-gray-700">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center">
                        <div className="p-2 bg-blue-500/20 rounded-lg mr-3">
                          <Briefcase size={18} className="text-blue-400" />
                        </div>
                        <h3 className="text-lg font-bold text-white">{experience.company}</h3>
                      </div>
                      <p className="text-blue-300 mt-2">{experience.position}</p>
                    </div>
                    <div className="px-3 py-1 bg-blue-500/10 rounded-full flex items-center">
                      <Calendar size={14} className="text-blue-400 mr-1" />
                      <span className="text-blue-200 text-sm">{experience.year}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom section with description and achievements */}
                <div className="p-5">
                  <div className="flex items-start mb-4">
                    <MapPin size={16} className="text-blue-400 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-300 text-sm">{experience.location}</p>
                  </div>

                  <p className="text-gray-300 mb-5 text-sm border-l-2 border-blue-500/30 pl-4">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-blue-400 mb-3 font-semibold flex items-center">
                      <Star size={14} className="mr-1" />
                      Key Contributions
                    </h4>
                    <div className="space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center bg-gray-900/50 rounded-lg p-2 text-sm">
                          <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                          <p className="text-gray-200">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Corner decoration */}
                  <div className="absolute top-0 right-0 border-t-[40px] border-r-[40px] border-t-transparent border-r-blue-500/20"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlighted link to portfolio */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex justify-center"
        >
        </motion.div>
      </motion.div>
    </section>
  );
}