import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Github, Instagram, Facebook, Linkedin, ArrowRight, MessageCircle, Calendar, Clock } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from "emailjs-com";

export default function Contact() {
  const [hoverLink, setHoverLink] = useState<number | null>(null);
  const [messageCount, setMessageCount] = useState(0);
  const [typingIndicator, setTypingIndicator] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isSending, setIsSending] = useState(false);

  // New states for form inputs
  const [messageInput, setMessageInput] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderName, setSenderName] = useState("");

  // Update time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Typing indicator animation
  useEffect(() => {
    if (typingIndicator) {
      const timeout = setTimeout(() => {
        setTypingIndicator(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [typingIndicator]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Social media links data with enhanced info
  const socialLinks = [
    {
      name: "GitHub",
      url: "#",
      icon: <Github size={18} />,
      color: "from-gray-600 to-gray-800",
      description: "Check out my code repositories",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/its_kylcrvnts/",
      icon: <Instagram size={18} />,
      color: "from-pink-500 to-purple-700",
      description: "View my creative snapshots",
    },
    {
      name: "Facebook",
      url: "https://web.facebook.com/profile.php?id=61565167920693",
      icon: <Facebook size={18} />,
      color: "from-blue-600 to-blue-800",
      description: "Connect with me socially",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kyle-cervantes/",
      icon: <Linkedin size={18} />,
      color: "from-blue-700 to-blue-900",
      description: "See my professional profile",
    },
  ];

  // Contact info data with availability status
  const contactInfo = [
    {
      title: "Email",
      value: "kylecervantes2003@gmail.com",
      link: "mailto:kylecervantes2003@gmail.com",
      icon: <Mail size={20} className="text-white" />,
      statusColor: "bg-green-500",
      status: "Responds within 24 hours",
    },
    {
      title: "Phone",
      value: "+63-969-209-1713",
      link: "tel:+639692091713",
      icon: <Phone size={20} className="text-white" />,
      statusColor: "bg-yellow-500",
      status: "Available weekdays 9AM - 5PM PHT",
    },
    {
      title: "Location",
      value: "Lianga, Surigao Del Sur",
      link: null,
      icon: <MapPin size={20} className="text-white" />,
      statusColor: "bg-blue-500",
      status: "Philippines (GMT+8)",
    },
  ];

  // Send message function
  const handleSendMessage = () => {
    if (!messageInput.trim()) {
      alert("Please enter a message.");
      return;
    }

    setIsSending(true);
    setTypingIndicator(true);

    // Send email using EmailJS
    emailjs
      .send(
        "service_8jv8mtr", // Your EmailJS service ID
        "template_0d0c1hp", // Your EmailJS template ID
        {
          message: messageInput,
          from_name: "Website Contact Form",
          to_email: "kylecervantes2003@gmail.com", // Your email
          subject: "New Message from Website",
        },
        "66khAmrY4EB00TYi_" // Your EmailJS user ID
      )
      .then(
        () => {
          setMessageCount((prev) => prev + 1);
          setMessageInput("");
          setIsSending(false);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Failed to send message:", error);
          alert("Failed to send message. Please try again.");
          setIsSending(false);
          setTypingIndicator(false);
        }
      );
  };

  const handleScheduleMeeting = () => {
    setIsCalendarOpen(true);
  };

  const handleSendMeeting = () => {
    if (!selectedDate) {
      alert("Please select a date and time.");
      return;
    }

    if (!senderEmail) {
      alert("Please enter your email address.");
      return;
    }

    setIsSending(true);

    // Format the selected date
    const formattedDate = selectedDate.toLocaleString();

    // Send email using EmailJS
    emailjs
      .send(
        "service_8jv8mtr", // Your EmailJS service ID
        "template_0d0c1hp", // Your EmailJS template ID
        {
          message: `A meeting has been scheduled for: ${formattedDate}\nFrom: ${senderName || "Not provided"}\nEmail: ${senderEmail}`,
          from_name: senderName || "Website Meeting Scheduler",
          to_email: "kylecervantes2003@gmail.com", // Your email
          subject: "Meeting Schedule Request",
          reply_to: senderEmail, // Enable direct reply to the sender
        },
        "66khAmrY4EB00TYi_" // Your EmailJS user ID
      )
      .then(
        () => {
          alert("Meeting scheduled successfully!");
          setIsCalendarOpen(false);
          setSelectedDate(null);
          setSenderEmail("");
          setSenderName("");
          setIsSending(false);
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Failed to schedule the meeting. Please try again.");
          setIsSending(false);
        }
      );
  };

  return (
    <section
      id="contact"
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

        {/* Additional subtle glow elements */}
        <motion.div
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
          className="absolute top-1/2 left-3/4 w-32 md:w-64 h-32 md:h-64 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-300/5 blur-3xl"
        ></motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10"
      >
        {/* Enhanced Heading with Animated Underline */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center mb-16"
        >
          <div className="relative mb-4">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">
              <span className="text-white">CONTACT</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 ml-2">
                ME
              </span>
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="h-0.5 w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent absolute -bottom-2 left-0"
            ></motion.div>
          </div>
          <p className="text-blue-300/80 text-base sm:text-lg max-w-md sm:max-w-xl text-center mt-4">
            Let's connect and create something amazing together
          </p>
        </motion.div>

        {/* Contact Container */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Enhanced Contact Info Column */}
          <div className="lg:col-span-7">
            <motion.div
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative group h-full"
            >
              {/* Enhanced glow effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl opacity-0 group-hover:opacity-40 blur transition duration-300"></div>

              {/* Enhanced Card with Chat-like Interface */}
              <div className="relative bg-gray-800/70 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 group-hover:border-blue-500/50 transition-all duration-300 h-full">
                {/* Top section with enhanced heading */}
                <div className="bg-gray-900/80 p-6 border-b border-gray-700 flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <MessageCircle size={18} className="text-blue-400" />
                      Get In Touch
                    </h3>
                    <p className="text-blue-300 mt-2">
                      Feel free to reach out for collaborations or just a
                      friendly chat
                    </p>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-800/60 p-2 rounded-lg">
                    <Clock size={14} className="text-blue-400" />
                    <span className="text-sm text-blue-300">{currentTime}</span>
                  </div>
                </div>

                {/* Enhanced Contact Info Items */}
                <div className="p-6 space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="group/item"
                    >
                      {item.link ? (
                        <a
                          href={item.link}
                          className="flex items-start rounded-xl transition-all duration-300 hover:bg-white/5 p-3 relative overflow-hidden"
                          onMouseEnter={() => setHoverLink(index)}
                          onMouseLeave={() => setHoverLink(null)}
                        >
                          {/* Subtle hover effect */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300`}
                          ></div>

                          <div className="mr-4 p-3 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg shadow-lg shadow-blue-500/20 z-10">
                            {item.icon}
                          </div>
                          <div className="z-10 flex-grow">
                            <h4 className="text-sm font-medium text-blue-300/90 mb-1">
                              {item.title}
                            </h4>
                            <p className="text-lg font-medium text-white relative overflow-hidden">
                              {item.value}
                              <span
                                className={`absolute bottom-0 left-0 h-px bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-300 ${
                                  hoverLink === index ? "w-full" : "w-0"
                                }`}
                              ></span>
                            </p>
                            <div className="flex items-center mt-2 gap-2">
                              <span
                                className={`h-2 w-2 rounded-full ${item.statusColor}`}
                              ></span>
                              <span className="text-xs text-blue-200">
                                {item.status}
                              </span>
                            </div>
                          </div>
                          <div className="z-10 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                            <ArrowRight size={16} className="text-blue-400" />
                          </div>
                        </a>
                      ) : (
                        <div
                          className="flex items-start rounded-xl transition-all duration-300 hover:bg-white/5 p-3 relative overflow-hidden"
                          onMouseEnter={() => setHoverLink(index)}
                          onMouseLeave={() => setHoverLink(null)}
                        >
                          {/* Subtle hover effect */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300`}
                          ></div>

                          <div className="mr-4 p-3 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg shadow-lg shadow-blue-500/20 z-10">
                            {item.icon}
                          </div>
                          <div className="z-10 flex-grow">
                            <h4 className="text-sm font-medium text-blue-300/90 mb-1">
                              {item.title}
                            </h4>
                            <p className="text-lg font-medium text-white relative overflow-hidden">
                              {item.value}
                              <span
                                className={`absolute bottom-0 left-0 h-px bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-300 ${
                                  hoverLink === index ? "w-full" : "w-0"
                                }`}
                              ></span>
                            </p>
                            <div className="flex items-center mt-2 gap-2">
                              <span
                                className={`h-2 w-2 rounded-full ${item.statusColor}`}
                              ></span>
                              <span className="text-xs text-blue-200">
                                {item.status}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Enhanced Social Media Links with Hover Effects */}
                <div className="p-6 border-t border-gray-700">
                  <h4 className="text-lg font-medium text-blue-300/90 mb-4">
                    Connect With Me
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        whileHover={{
                          y: -5,
                          boxShadow:
                            "0 10px 25px -5px rgba(59, 130, 246, 0.5)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-12 h-12 bg-gradient-to-br ${social.color} flex items-center justify-center rounded-lg text-white shadow-lg transition-all duration-300 hover:text-white relative group/social`}
                      >
                        {social.icon}
                        <div className="absolute -bottom-10 opacity-0 group-hover/social:opacity-100 group-hover/social:translate-y-0 translate-y-2 text-xs font-medium transition-all duration-300 text-center w-24 bg-gray-800 p-1 rounded shadow-lg pointer-events-none">
                          <div className="font-bold">{social.name}</div>
                          <div className="text-blue-300 text-xs leading-tight">
                            {social.description}
                          </div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Interactive Message Box */}
                <div className="p-6 border-t border-gray-700 relative">
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Write a message..."
                      className="flex-grow bg-gray-900/60 text-white border border-gray-700 rounded-l-lg p-2 px-4 outline-none focus:border-blue-500 transition-colors duration-300"
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      disabled={isSending}
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={isSending}
                      className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-2 px-4 rounded-r-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 flex items-center gap-2 disabled:opacity-50"
                    >
                      <span>{isSending ? "Sending..." : "Send"}</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>

                  {/* Message Counter */}
                  <div className="absolute top-0 right-0 -translate-y-full">
                    {messageCount > 0 && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded-full flex items-center justify-center min-w-4 min-h-4"
                      >
                        {messageCount}
                      </motion.div>
                    )}
                  </div>

                  {/* Typing Indicator Animation */}
                  {typingIndicator && (
                    <div className="mt-2 text-xs text-blue-300 flex items-center gap-2">
                      <div className="flex space-x-1">
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            repeatType: "loop",
                            delay: 0,
                          }}
                          className="h-1.5 w-1.5 rounded-full bg-blue-400"
                        ></motion.div>
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            repeatType: "loop",
                            delay: 0.2,
                          }}
                          className="h-1.5 w-1.5 rounded-full bg-blue-400"
                        ></motion.div>
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            repeatType: "loop",
                            delay: 0.4,
                          }}
                          className="h-1.5 w-1.5 rounded-full bg-blue-400"
                        ></motion.div>
                      </div>
                      <span>Kyle is typing...</span>
                    </div>
                  )}
                </div>

                {/* Enhanced corner decoration */}
                <div className="absolute top-0 right-0 border-t-[40px] border-r-[40px] border-t-transparent border-r-blue-500/30"></div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Map/Location Column */}
          <div className="lg:col-span-5">
            <motion.div
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative group h-full"
            >
              {/* Enhanced glow effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl opacity-0 group-hover:opacity-40 blur transition duration-300"></div>

              {/* Enhanced Card */}
              <div className="relative h-full bg-gray-800/70 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 group-hover:border-blue-500/50 transition-all duration-300 flex flex-col">
                {/* Enhanced Map visualization */}
                <div className="flex-grow min-h-64 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-indigo-900 opacity-60"></div>
                  <div className="absolute inset-0 bg-[url('/api/placeholder/800/600')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>

                  {/* Enhanced Map Grid */}
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                  {/* Animated Radar Pulse */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <motion.div
                        animate={{
                          scale: [0, 1.5],
                          opacity: [0.8, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                        className="absolute inset-0 rounded-full border border-blue-400"
                      ></motion.div>
                      <motion.div
                        animate={{
                          scale: [0, 1.5],
                          opacity: [0.8, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut",
                          delay: 0.5,
                        }}
                        className="absolute inset-0 rounded-full border border-blue-400"
                      ></motion.div>
                    </div>
                  </div>

                  {/* Enhanced Location marker */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="text-center">
                      <motion.div
                        whileHover={{
                          y: -5,
                          boxShadow:
                            "0 10px 25px -5px rgba(59, 130, 246, 0.5)",
                        }}
                        className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30 cursor-pointer group"
                      >
                        <MapPin
                          size={28}
                          className="text-white group-hover:scale-110 transition-all duration-300"
                        />
                      </motion.div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        Lianga, Surigao Del Sur
                      </h3>
                      <div className="text-blue-200 text-sm flex items-center justify-center gap-1">
                        <motion.span
                          animate={{ y: [0, -3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          🇵🇭
                        </motion.span>
                        <span>Philippines (GMT+8)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced availability calendar section */}
                <div className="p-6 bg-gray-800/80 border-t border-gray-700">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar size={16} className="text-blue-400" />
                    <h4 className="text-base font-medium text-blue-300">
                      Availability
                    </h4>
                  </div>

                  <div className="grid grid-cols-7 gap-1 mb-4">
                    {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                      <div
                        key={i}
                        className={`text-center text-xs font-medium p-1 rounded-md ${
                          i < 5 ? "text-blue-300" : "text-gray-500"
                        }`}
                      >
                        {day}
                      </div>
                    ))}
                    {["M", "T", "W", "T", "F"].map((_, i) => (
                      <div
                        key={i}
                        className="h-2 bg-gradient-to-r from-green-500 to-green-400 rounded-md"
                      />
                    ))}
                    {["S", "S"].map((_, i) => (
                      <div
                        key={i}
                        className="h-2 bg-gradient-to-r from-gray-700 to-gray-600 rounded-md"
                      />
                    ))}
                  </div>

                  <p className="text-blue-300 text-sm">
                    I'm open to remote work opportunities and collaborations
                    from anywhere in the world.
                  </p>
                </div>

                {/* Enhanced corner decoration */}
                <div className="absolute top-0 right-0 border-t-[40px] border-r-[40px] border-t-transparent border-r-blue-500/30"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Schedule Meeting Button */}
        <motion.div variants={itemVariants} className="mt-8 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleScheduleMeeting}
            className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-6 py-3 rounded-lg shadow-lg shadow-blue-500/20 flex items-center gap-2 mx-auto transition-all duration-300"
          >
            <Calendar size={18} />
            <span>Schedule a Meeting</span>
          </motion.button>
        </motion.div>

        {/* Calendar Popup with Email Field */}
        {isCalendarOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white max-w-md w-full">
              <h3 className="text-xl font-bold mb-4 text-blue-300">Schedule a Meeting</h3>

              <div className="space-y-4">
                {/* Name field */}
                <div>
                  <label className="block text-blue-300 text-sm font-medium mb-1">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 outline-none"
                  />
                </div>

                {/* Email field */}
                <div>
                  <label className="block text-blue-300 text-sm font-medium mb-1">Your Email <span className="text-red-400">*</span></label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    required
                    className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 outline-none"
                  />
                </div>

                {/* Date picker */}
                <div>
                  <label className="block text-blue-300 text-sm font-medium mb-1">
                    Preferred Date & Time <span className="text-red-400">*</span>
                  </label>
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    showTimeSelect
                    dateFormat="MMMM d, yyyy h:mm aa"
                    className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 outline-none"
                    placeholderText="Select date and time"
                    minDate={new Date()}
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => setIsCalendarOpen(false)}
                  className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 transition-colors duration-300 text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSendMeeting}
                  disabled={isSending || !selectedDate || !senderEmail}
                  className="px-6 py-2 rounded bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white flex items-center gap-2 disabled:opacity-50 transition-all duration-300"
                >
                  {isSending ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Calendar size={16} />
                      <span>Schedule</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}
