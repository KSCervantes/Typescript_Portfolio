import { motion } from "framer-motion";
import { BookOpen, Calendar, Award, MapPin } from "lucide-react";

export default function Schools() {
  // Array of school data
  const schools = [
    {
      id: 1,
      name: "North Eastern Mindanao State University",
      degree: "Bachelor of Science in Computer Science",
      year: "2022 - 2025",
      location: "Lianga, Surigao del Sur, Philippines",
      description: "Specialized in web and mobile application development with focus on modern frameworks and programming languages.",
      achievements: ["None", "Ongoing"]
    },
    {
      id: 2,
      name: "Lianga National Comprehensive High School",
      degree: "Senior High School - HUMSS Track",
      year: "2019 - 2021",
      location: "Lianga,Surigao del Sur, Philippines",
      description: "Focused on studying societal issues and changes as well as human conditions.",
      achievements: ["Diploma", "Graduated with Honors"]
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
      id="education"
      className="py-16 sm:py-32 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden"
    >
      {/* Enhanced background elements */}
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
        {/* Heading */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center mb-16 sm:mb-24"
        >
          <div className="relative mb-4">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">
              <span className="text-white">EDUCATION</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 ml-2 sm:ml-4">
                JOURNEY
              </span>
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent absolute -bottom-2 left-0"
            ></motion.div>
          </div>
          <p className="text-blue-300/80 text-base sm:text-lg max-w-md sm:max-w-xl text-center">
            My academic journey has equipped me with both theoretical knowledge
            and practical skills in technology and development.
          </p>
        </motion.div>

        {/* Schools List */}
        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-400 to-cyan-300 opacity-30 rounded-full hidden sm:block"></div>

          {/* School Items */}
          <div className="space-y-12 sm:space-y-16">
            {schools.map((school, index) => (
              <motion.div
                key={school.id}
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center"
              >
                {/* Left side for even items */}
                <div
                  className={`w-full sm:w-1/2 ${
                    index % 2 === 0
                      ? "sm:pr-8 text-center sm:text-right"
                      : "sm:order-last sm:pl-8 text-center sm:text-left"
                  }`}
                >
                  <div className="backdrop-filter backdrop-blur-xl bg-white/5 p-4 sm:p-6 rounded-2xl border border-white/10 shadow-lg relative overflow-hidden group transition-all duration-300 hover:shadow-blue-900/20 hover:border-blue-500/30">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      {school.name}
                    </h3>
                    <div className="flex items-center mb-4 justify-center sm:justify-end gap-2">
                      <BookOpen size={16} className="text-blue-400" />
                      <p className="text-blue-300 font-medium">{school.degree}</p>
                    </div>
                    <p className="text-gray-400 text-sm sm:text-base mb-4">
                      {school.description}
                    </p>

                    {/* Achievements */}
                    <div className="mt-4">
                      <h4 className="text-xs sm:text-sm uppercase tracking-wider text-blue-400 mb-2 font-semibold">
                        Achievements
                      </h4>
                      <ul className="space-y-2">
                        {school.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 justify-center sm:justify-end"
                          >
                            <span className="text-gray-300 text-sm">
                              {achievement}
                            </span>
                            <Award
                              size={14}
                              className="text-yellow-400 flex-shrink-0"
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Center timeline dot */}
                <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-800 border-4 border-blue-400 shadow-lg shadow-blue-400/20 z-10 my-4 sm:my-0">
                  <BookOpen size={16} className="text-blue-400" />
                </div>

                {/* Right side for odd items */}
                <div
                  className={`w-full sm:w-1/2 ${
                    index % 2 === 0
                      ? "sm:order-last sm:pl-8 text-center sm:text-left"
                      : "sm:pr-8 text-center sm:text-right"
                  }`}
                >
                  <div className="backdrop-filter backdrop-blur-xl bg-white/5 p-4 sm:p-6 rounded-2xl border border-white/10 shadow-lg">
                    <div className="flex items-center gap-2 mb-2 justify-center sm:justify-start">
                      <Calendar
                        size={16}
                        className="text-blue-400 flex-shrink-0"
                      />
                      <p className="text-blue-300 text-sm sm:text-base">
                        {school.year}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <MapPin
                        size={16}
                        className="text-blue-400 flex-shrink-0"
                      />
                      <p className="text-gray-400 text-sm sm:text-base">
                        {school.location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
