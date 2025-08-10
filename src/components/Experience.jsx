import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./experience.css";
import OrientalLogo from "../assets/orientallogo.avif";
import ACELogo from "../assets/ACE_LOGO.png";

const experienceList = [
  {
    id: 1,
    date: "July 2025 – Present",
    location: "New Delhi, Delhi, India",
    company: "Oriental Inurance Company Ltd.",
    role: "Data and Software Engineer Intern",
    type: "Full-time",
    logo: OrientalLogo,
    shortDesc:
      "Contributing to software engineering and data automation initiatives at Oriental Insurance Company.",
    details: {
      detailedDesc:
        "As an intern at Oriental Government Company, I contribute to both software engineering and data automation efforts. My role involves building full-stack web applications, optimizing workflows through automation, and developing cross-platform solutions, including APK builds. I also work with legal data systems, implementing scalable tools for data handling and tracking. Currently, I'm exploring AI-driven interfaces, including interactive 3D elements, to enhance user engagement and system intelligence.",
      projects: [
        {
          name: "Legal Work Automation",
          desc: "Working on automating legal workflows by developing tools for data tracking, status monitoring, and task assignment. Streamlining multi-stage legal processes through Google Sheets scripting and backend logic to reduce manual effort, improve accuracy, and ensure timely case handling.",
          tags: [
            "Software Engineering",
            "Data Automation",
            "Workflow Automation",
            "Backend Development",
            "Google Apps Script",
            "Process Optimization",
            "LegalTech",
            "DSA Logic",
            "Task Management",
            "Scripting",
          ],
        },
        {
          name: "3D AI for Policies and Claims",
          desc: "Designing an AI-driven interactive assistant with a 3D animated front-end for immersive user interaction. The system integrates multiple AI models under a unified core, including modules for policy recommendation, explanation, claim processing, fraud detection, and other support functions. Focused on delivering intelligent, context-aware responses through a visually engaging, modular architecture.",
          tags: [
            "AI Assistant",
            "Data Science",
            "Machine Learning",
            "3D Interface",
            "Interactive Front-End",
            "Modular AI Architecture",
            "Recommendation System",
            "Policy Explanation",
            "Claims Automation",
            "Fraud Detection",
            "Natural Language Processing",
            "Visual Intelligence",
          ],
        },
        {
          name: "Visualising App",
          desc: "Built a cross-functional Android application to display dynamic company information, visualize data, and enable on-demand data retrieval. Integrated role-based access for admins and users, with secure backend logic to manage permissions and content visibility. Utilized Android Studio for development, Google Sheets for lightweight data operations, and Django APIs for backend connectivity and scalability.",
          tags: [
            "Android Studio",
            "Android Development",
            "Full-Stack Development",
            "Django API",
            "Google Sheets Integration",
            "Role-Based Access",
            "Data Visualization",
            "Mobile App",
            "Dynamic Data Fetching",
            "Admin Dashboard",
            "User Management",
          ],
        },
      ],
      tags: [
        "Data Analyst",
        "Machine Learning",
        "Software Engineering",
        "Data Automation",
        "LegalTech",
        "Workflow Automation",
        "Android Development",
        "Full-Stack Development",
        "Django API",
        "Data Visualization",
        "AI Assistant",
        "3D Interface",
        "Fraud Detection",
        "DSA Logic",
      ],
    },
  },
  {
    id: 2,
    date: "Feb 2025 – Present",
    location: "New Delhi, Delhi, India",
    company: "The ACE",
    role: "Organiser",
    type: "Full-time",
    logo: ACELogo,
    shortDesc:
      "Organized large-scale tech events at The ACE, collaborated with sponsors like Code Crafters and GitHub, and developed event websites.",
    details: {
      detailedDesc:
        "Served as an organizer at The ACE, leading the planning and execution of major tech events with sponsors such as GeeksforGeeks and GitHub. Responsibilities included end-to-end event coordination, sponsor communication, venue negotiation, and technical contributions like website development and content management. Ensured seamless collaboration between teams to deliver high-impact experiences for attendees.",
      projects: [
        {
          name: "Cognition Website",
          desc: "Built responsive React site with animations for the event named cognition with a unique visuals and displays.",
          tags: ["Reactjs", "Framer Motion", "Tailwind CSS", "FormSpree"],
          link: "https://cognition.theace.tech/",
        },
        {
          name: "3D Website for displaying project done by all member of ACE",
          desc: "Built responsive React 3D website with animations and 3D model, used blender tocreate the model and .gltf file to use the model in website.",
          tags: [
            "Reactjs",
            "Framer Motion",
            "Tailwind CSS",
            "Blender",
            "React-three-fibre",
          ],
          link: "https://github.com/AtharvTyagi1805/3D-website-for-project-Display",
        },
      ],
      tags: [
        "Leadership",
        "Communication",
        "Handling Sponsors",
        "Reactjs",
        "Framer Motion",
        "Tailwind CSS",
        "FormSpree",
        "Blender",
        "React Three Fiber",
        "3D Web Development",
        "Responsive Design",
        "UI Animations",
        "GLTF Models",
      ],
    },
  },
  {
    id: 3,
    date: "Oct 2025 – ",
    location: "Gr. Noida, Delhi-NCR, India",
    company: "ACE-DTC",
    role: "Co-Lead",
    type: "Full-time",
    logo: ACELogo,
    shortDesc:
      "Co-Lead at ACE-DTC, organized tech workshops & hackathons, built websites, and promoted emerging technologies like Blockchain, AR/VR, and Game Development.",
    details: {
      detailedDesc:
        "Served as Co-Lead at ACE-DTC, a college tech club focused on community-driven learning and innovation. Led the planning and execution of multiple technical workshops and hackathons, actively engaging students in hands-on experiences. Contributed to web development for club initiatives and championed underrated but high-impact technologies including Blockchain, AR/VR, and Game Development. Helped foster a culture of experimentation, peer learning, and tech curiosity within the campus.",
      projects: [
        {
          name: "3D Website for displaying project done by all member of ACE",
          desc: "Built responsive React 3D website with animations and 3D model, used blender tocreate the model and .gltf file to use the model in website.",
          tags: [
            "Reactjs",
            "Framer Motion",
            "Tailwind CSS",
            "Blender",
            "React-three-fibre",
          ],
          link: "https://github.com/AtharvTyagi1805/3D-website-for-project-Display",
        },
      ],
      tags: [
        "Reactjs",
        "Framer Motion",
        "Tailwind CSS",
        "Blender",
        "React Three Fiber",
        "3D Web Development",
        "UI Animations",
        "Tech Leadership",
        "Community Building",
        "Hackathon Organizer",
        "Workshop Facilitation",
        "Web Development",
        "Blockchain",
        "AR/VR",
        "Game Development",
        "Emerging Technologies",
        "College Tech Club",
        "GLTF Models",
      ],
    },
  },
];

const fadeInVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3 + 0.7,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Experience = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedExp, setSelectedExp] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedExp ? "hidden" : "auto";
  }, [selectedExp]);

  return (
    <div
      id="experience"
      ref={ref}
      className="min-h-screen py-20 px-4 flex flex-col items-center"
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold hover-fill text-center mb-2"
        data-text="EXPERIENCE"
        variants={fadeInVariant}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={0}
      >
        EXPERIENCE
      </motion.h1>
      <motion.p
        className="italic text-sm text-gray-500 dark:text-gray-400 mb-12"
        variants={fadeInVariant}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={0.5}
      >
        click on the circle to know more
      </motion.p>

      <div className="relative w-full max-w-4xl">
        <div className="vertical-line"></div>

        {experienceList.map((exp, i) => (
          <motion.div
            key={exp.id}
            className="timeline-entry"
            variants={fadeInVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={i + 1}
          >
            <div
              className="timeline-circle"
              onClick={() => setSelectedExp(exp)}
            ></div>

            <div className="timeline-left group">
              <p className="text-sm font-medium date-text transition-all group-hover:font-bold group-hover:text-black dark:group-hover:text-white">
                {exp.date}
              </p>
              <p className="text-xs text-gray-500 location-text transition-all relative">
                <span className="underline-hover">{exp.location}</span>
              </p>
            </div>

            <div className="timeline-right group ml-14 hover:backdrop-blur-sm transition-all duration-300">
              <h2
                className="text-2xl underline-hover font-bold inline-block"
                data-text={exp.role}
              >
                {exp.role}
              </h2>
              <h3 className="text-xl text-gray-700 dark:text-gray-300">
                {exp.company}
              </h3>
              <p className="text-xs italic text-gray-500 dark:text-gray-400">
                {exp.type}
              </p>
              <p className="mt-2 text-sm text-black dark:text-white">
                {exp.shortDesc}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {exp.details.tags.map((tag, idx) => (
                  <span key={idx} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedExp && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <button
              onClick={() => setSelectedExp(null)}
              className="absolute top-4 right-6 text-2xl font-bold text-gray-800 dark:text-gray-100 hover:scale-110 transition"
            >
              ×
            </button>
            <img
              src={selectedExp.logo}
              alt={selectedExp.company}
              className="w-24 mx-auto mb-4"
            />
            <h2
              className="text-2xl font-bold text-center"
              data-text={selectedExp.company}
            >
              {selectedExp.company}
            </h2>
            <p className="text-sm text-center text-gray-500 mt-1">
              {selectedExp.role}
            </p>
            <p className="text-center mt-4">
              {selectedExp.details.detailedDesc}
            </p>

            {selectedExp.details.projects?.length > 0 && (
              <div className="mt-6">
                <h3 className="text-xl font-semibold underline mb-2">
                  Projects
                </h3>
                <ul className="space-y-4">
                  {selectedExp.details.projects.map((proj, idx) => (
                    <li
                      key={idx}
                      className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                    >
                      <p className="font-bold">{proj.name}</p>
                      <p className="text-sm mt-1">{proj.desc}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {proj.tags.map((t, i) => (
                          <span key={i} className="tag-pill">
                            {t}
                          </span>
                        ))}
                      </div>
                      {proj.link && (
                        <a
                          href={proj.link}
                          className="block text-xs text-blue-500 underline mt-1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit Project
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {selectedExp.details.tags.length > 0 && (
              <div className="mt-6">
                <h3 className="text-xl font-semibold underline mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedExp.details.tags.map((tag, idx) => (
                    <span key={idx} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Experience;
