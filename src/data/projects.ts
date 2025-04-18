import portfolioImage from "../assets/Logo.jpg"
import todoImage from "../assets/ogol.png"
import todoImage2 from "../assets/Logoo.jpg"
import todoImage3 from "../assets/Scholar.png"
export const projects = [
  {
    title: "Barangay GIS: Health Center Management Program",
    description: "A simple website in Amaga SDS, with the information of individual living that community, and have the map to track the house of the individual. ",
    link: "#",
    technologies: ["PHP", "CSS/JAVASCRIPT", "Google Earth"],
    image: portfolioImage,
  },
  {
    title: "Community Bulletin App",
    description: "Simple community bulletin app for posting and viewing announcements.",
    link: "#",
    technologies: ["Flutter", "Supabase", "Firebase"],
    image: todoImage,
    status: "Soon to be published", // New status field
  },
  {
    title: "ROTC Enrollment",
    description: "A full-stack enrollment web system.",
    link: "#",
    technologies: ["PHP", "CSS", "JavaScript"],
    image: todoImage2,
    status: "Soon to be published", // New status field
  },
  {title: "NEMSU Scholarship",
    description: "A platform designed to connect students with scholarship opportunities, offering tools for application tracking and personalized recommendations.",
    link: "#",
    technologies: ["React", "Tailwind CSS", "Supabase"],
    image: todoImage3,
    status: "Soon to be published", // New status field
  },
]
