import { motion } from "framer-motion";
import { BookOpen, Calendar, Award, MapPin, GraduationCap } from "lucide-react";

export default function Schools() {
  // Array of school data
  const schools = [
    {
      id: 1,
      name: "North Eastern Mindanao State University",
      degree: "Bachelor of Science in Computer Science",
      year: "2022 - 2025",
      location: "Lianga and Tandag, Surigao del Sur, Philippines",
      description: "Specialized in web and mobile application development with focus on modern frameworks and programming languages.",
      achievements: ["None", "Ongoing"]
    },
    {
      id: 2,
      name: "Lianga National Comprehensive High School",
      degree: "Senior High School - HUMSS Track",
      year: "2019 - 2021",
      location: "Lianga, Surigao del Sur, Philippines",
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
      {/* Keeping the original background elements */}
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
              <span className="text-white">EDUCATION</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 ml-2">JOURNEY</span>
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent absolute -bottom-2 left-0"
            ></motion.div>
          </div>
          <p className="text-blue-300/80 text-base sm:text-lg max-w-md sm:max-w-xl text-center mt-4">
            My academic journey has equipped me with both theoretical knowledge
            and practical skills in technology and development.
          </p>
        </motion.div>

        {/* Timeline Container - New Style */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-blue-500/30 hidden md:block"></div>

          {/* School Items */}
          <div className="space-y-12">
            {schools.map((school) => (
              <motion.div
                key={school.id}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-0 transform -translate-x-1/2 hidden md:block">
                  <div className="w-5 h-5 rounded-full bg-blue-500 border-4 border-gray-900"></div>
                </div>

                {/* Card */}
                <div className="md:ml-16 backdrop-blur-md bg-gray-800/50 rounded-xl overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    {/* Left side with school info */}
                    <div className="md:w-2/3 p-6 border-b md:border-b-0 md:border-r border-gray-700">
                      <div className="flex items-center mb-2">
                        <GraduationCap size={20} className="text-blue-400 mr-2" />
                        <h3 className="text-xl font-bold text-white">{school.name}</h3>
                      </div>

                      <div className="flex items-center mb-3 text-blue-300">
                        <BookOpen size={16} className="mr-1" />
                        <p className="font-medium">{school.degree}</p>
                      </div>

                      <p className="text-gray-300 mb-4 text-sm">{school.description}</p>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-xs uppercase tracking-wider text-blue-400 mb-2 font-semibold flex items-center">
                          <Award size={14} className="mr-1" />
                          Achievements
                        </h4>
                        <ul className="pl-5 space-y-1">
                          {school.achievements.map((achievement, i) => (
                            <li key={i} className="text-gray-300 text-sm list-disc">
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right side with year and location */}
                    <div className="md:w-1/3 p-6 bg-gray-900/50">
                      <div className="flex items-center mb-4">
                        <Calendar size={16} className="text-blue-400 mr-2" />
                        <p className="text-blue-200">{school.year}</p>
                      </div>

                      <div className="flex items-start">
                        <MapPin size={16} className="text-blue-400 mr-2 mt-1 flex-shrink-0" />
                        <p className="text-gray-300 text-sm">{school.location}</p>
                      </div>
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
