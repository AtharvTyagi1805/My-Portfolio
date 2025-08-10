import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./project.css";

import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/Project3.png";
import Project4 from "../assets/Project4.png";
import Project5 from "../assets/Project5.png";
import Project6 from "../assets/Project6.png";
import Project7 from "../assets/Project7.png";
import Project8 from "../assets/Project8.png";
import Project9 from "../assets/Project9.png";
import Project10 from "../assets/Project10.png";
import Project11 from "../assets/Project11.png";
import Project12 from "../assets/Project12.png";
import Project13 from "../assets/Project13.png";
import Project14 from "../assets/Project14.jpg";
import Project15 from "../assets/Project15.png";
import Project16 from "../assets/Project16.png";

const projectList = [
  {
    id: 1,
    name: "My Portfolio",
    image: Project1,
    desc: "Built a 3D interactive portfolio website using React Three Fiber, Framer Motion, and Formspree, featuring an animated 3D model and responsive design.",
    detaildesc:
      "Developed a dynamic and responsive portfolio website to showcase personal projects and experience. The site features an animated 3D model integrated using React Three Fiber and Blender assets, with smooth page transitions powered by Framer Motion. Implemented interactive elements, contact forms via Formspree, and used React Drei for simplified 3D scene handling. Focused on performance, clean UI, and immersive visuals to create an engaging personal brand experience.",
    techTags: [
      "React.js",
      "React Three Fiber",
      "Framer Motion",
      "React Drei",
      "Formspree",
      "Blender",
      "Responsive Design",
      "3D Web Development",
    ],
    journey: true,
    github: "http://github.com/AtharvTyagi1805/My-Portfolio",
    demo: "https://atharvtyagi1805.github.io/My-Portfolio/",
  },
  {
    id: 2,
    name: "Voice Cloning App",
    image: Project2,
    desc: "Built a voice cloning app using Streamlit and a TTS model, allowing users to generate and modify synthetic voices with adjustable parameters.",
    detaildesc:
      "Developed a voice cloning web app using Streamlit and a Text-to-Speech (TTS) model that allows users to synthesize and clone voices. The app includes controls to modify voice characteristics such as pitch, speed, tone, and emotion, enabling customizable voice outputs. Designed for ease of use with a clean Streamlit interface and real-time generation feedback. Focused on making advanced voice synthesis accessible through an interactive UI.",
    techTags: [
      "Python",
      "Streamlit",
      "Text-to-Speech (TTS)",
      "Voice Cloning",
      "Speech Synthesis",
      "Audio Processing",
      "Interactive UI",
      "Custom Voice Control",
    ],
    journey: true,
    github: "http://github.com/AtharvTyagi1805/Voice-cloning",
  },
  {
    id: 3,
    name: "Dashboard Data Visualisation",
    image: Project3,
    desc: "Built a full-stack dashboard using Django and React to visualize data through charts and maps, with filtering and API-based dynamic updates.",
    detaildesc:
      "Developed an interactive data visualization dashboard using Django (with Django REST Framework) for the backend and React.js for the frontend. Integrated APIs to fetch real-time or dynamic data, which is visualized using React Chart.js for graphs and Leaflet for map-based data displays. The dashboard includes filtering capabilities that allow users to explore and analyze data based on various criteria. Designed with a focus on responsiveness, performance, and clean user experience.",
    techTags: [
      "Django",
      "Django REST Framework",
      "MySQL",
      "React.js",
      "React Chart.js",
      "Leaflet.js",
      "API Integration",
      "Data Visualization",
      "Dashboard UI",
      "Filtering System",
      "Full-Stack Development",
    ],
    journey: true,
    github: "https://github.com/AtharvTyagi1805/Dashboard-Data-Visualaization",
  },
  {
    id: 4,
    name: "Swasthya - Health Chatbot(Python)",
    image: Project4,
    desc: "Built a health-focused chatbot using Python and Kivy, trained on custom intents with TF-IDF and cosine similarity for conversational understanding.",
    detaildesc:
      "Developed a health-oriented chatbot application using Python and Kivy for the GUI. The chatbot is trained on a structured intents.json dataset and uses TF-IDF vectorization combined with cosine similarity to understand and respond to user queries. Designed to assist users with general health-related questions, the application features a lightweight interface, offline capability, and rule-based logic for consistent interaction.",
    techTags: [
      "Python",
      "Kivy",
      "Chatbot",
      "TF-IDF Vectorizer",
      "Cosine Similarity",
      "Natural Language Processing",
      "Intent Recognition",
      "Offline Application",
      "GUI Development",
    ],
    journey: true,
    github:
      "https://github.com/AtharvTyagi1805/AI-Health-Bot-in-python-Swasthya",
  },
  {
    id: 5,
    name: "3D Website for Project Display",
    image: Project5,
    desc: "Designed and developed a 3D website featuring an interactive room environment to display projects, with floating cards and realistic models created in Blender.",
    detaildesc:
      "Created a 3D interactive website that showcases personal and team projects within a virtual room environment resembling a computer setup. The scene includes animated, floating project cards and spatial layout for immersive interaction. Designed 3D models using Blender and integrated them into the site using React Three Fiber and GLTF format. Focused on creating a smooth, responsive experience with attention to aesthetics, animation, and intuitive layout.",
    techTags: [
      "React.js",
      "React Three Fiber",
      "React Drei",
      "Blender",
      "GLTF Models",
      "3D Web Development",
      "Framer Motion",
      "Interactive UI",
      "Project Showcase",
      "Responsive Design",
    ],
    journey: true,
    github: "https://github.com/AtharvTyagi1805/3D-website-for-project-Display",
  },
  {
    id: 6,
    name: "Bell Bot - Health Chat Bot(Java)",
    image: Project6,
    desc: "Built a health-focused chatbot in Java using Swing and Applet, with intent-based communication powered by JSON.",
    detaildesc:
      "Developed a desktop-based health chatbot using Java Swing and Applet for the graphical interface. The chatbot uses an intents.json file to manage intent-response mapping, enabling structured, rule-based conversation. Designed for assisting users with general health-related queries, the application runs offline and features a lightweight, responsive UI. Emphasized modularity and clarity in both logic and interface components.",
    techTags: [
      "Java",
      "Swing",
      "Applet",
      "Chatbot",
      "Intent Recognition",
      "JSON Parsing",
      "GUI Development",
      "Offline Application",
      "Rule-Based System",
    ],
    journey: true,
    github: "https://github.com/AtharvTyagi1805/Health-ChatBot-Bell",
  },
  {
    id: 7,
    name: "Shopping App(Java)",
    image: Project7,
    desc: "Built a Java-based shopping cart application using Swing and Applet, implementing DSA operations with a modular Model–UI structure.",
    detaildesc:
      "Developed a desktop shopping cart system in Java with Swing and Applet for the graphical interface. The application follows a modular structure, with the UI layer (ShoppingCartUI.java) handling user interactions and the model layer (Product.java, CartItem.java, ShoppingCart.java) managing business logic, product data, and cart operations. Implemented DSA concepts such as dynamic lists, search, and aggregation for adding, removing, and calculating totals. Designed for a clean, interactive shopping experience with clear separation of concerns.",
    techTags: [
      "Java",
      "Swing",
      "Applet",
      "Shopping Cart",
      "DSA Operations",
      "ArrayList",
      "MVC Structure",
      "GUI Development",
      "Offline Application",
    ],
    journey: true,
    github: "https://github.com/AtharvTyagi1805/Java-Shopping-Cart",
  },
  {
    id: 8,
    name: "Calculator(Java)",
    image: Project8,
    desc: "Built a Java-based calculator with Swing and Applet, featuring a polished UI, light/dark mode toggle, and modular structure for clean logic handling.",
    detaildesc:
      "Developed a desktop calculator application in Java using Swing and Applet for a responsive and user-friendly interface. Implemented modular separation between the UI layer (CalculatorUI.java) and the logic layer (CalculatorLogic.java), ensuring clarity and maintainability. Added a light/dark mode toggle via a theme manager for enhanced user experience. The calculator supports standard arithmetic operations, decimal inputs, and clear/backspace functions, designed with an emphasis on usability and visual appeal.",
    techTags: [
      "Java",
      "Swing",
      "Applet",
      "Calculator",
      "Light/Dark Mode",
      "MVC Structure",
      "GUI Development",
      "Arithmetic Operations",
      "Offline Application",
    ],
    journey: true,
    github: "https://github.com/AtharvTyagi1805/Java-Calculator",
  },
  {
    id: 9,
    name: "Personal Diary(Java)",
    image: Project9,
    desc: "Built a Java-based personal diary using Swing and Applet with infinite pages, text file storage, and DSA logic via HashMap for quick data retrieval.",
    detaildesc:
      "Developed a desktop personal diary application in Java using Swing and Applet for a simple yet effective writing experience. Implemented DSA concepts through a HashMap to manage and retrieve diary entries efficiently. Designed to support infinite pages, with all entries saved to a .txt file to ensure persistence between sessions. On reopening the diary, users can continue exactly where they left off. The UI is clean and user-friendly, focusing on functionality, speed, and reliability for personal note-taking.",
    techTags: [
      "Java",
      "Swing",
      "Applet",
      "Personal Diary",
      "DSA Operations",
      "HashMap",
      "Text File Storage",
      "GUI Development",
      "Offline Application",
    ],
    journey: true,
    github: "https://github.com/AtharvTyagi1805/Personal-Diary-Java",
  },
  {
    id: 10,
    name: "FastAPI Agent Creator",
    image: Project10,
    desc: "Built a FastAPI service to create AI agents for Vapi and Retell, with Pydantic validation, provider-specific payload formatting, and robust error handling.",
    detaildesc:
      "Developed a REST API using FastAPI that acts as a unified interface for creating AI agents across two providers — Vapi and Retell. Integrated Pydantic models for strict request validation and automatic documentation, supporting custom parameters like model choice, temperature, system instructions, and metadata. Implemented provider-specific request builders that handle API key authentication, payload construction, and HTTP communication. Added detailed error handling to convert upstream API failures into clear HTTP responses. This design allows easy addition of more providers and simplifies client-side integration for AI agent creation workflows.",
    techTags: [
      "Python",
      "FastAPI",
      "Pydantic",
      "REST API",
      "Vapi Integration",
      "Retell Integration",
      "HTTP Requests",
      "Requests Library",
      "API Key Authentication",
      "Error Handling",
    ],
    journey: true,
    github: "https://github.com/AtharvTyagi1805/AgentTask",
  },
  {
    id: 11,
    name: "Code.OPT",
    image: Project11,
    desc: "Built a Django-based web app to fetch user code via APIs, run automated optimizations, and return improved code instantly in a clean HTML/CSS interface.",
    detaildesc:
      "Developed a full-stack code optimization platform named Code.OPT using Django for backend processing and HTML/CSS for a responsive front-end. The system fetches user-submitted code through API endpoints, applies an automated optimization engine to enhance performance, reduce redundancy, and improve readability, then returns the optimized output directly into a results text box below the editor. Implemented robust backend logic for secure data handling, integrated API fetching for external data sources, and designed the UI to be intuitive and minimal, enabling developers to get improved code suggestions quickly without leaving the browser.",
    techTags: [
      "Python",
      "Django",
      "HTML",
      "CSS",
      "Backend Development",
      "API Integration",
      "Code Optimization",
      "Automation",
      "Web Application",
      "Full-Stack Development",
    ],
    journey: true,
    github: "https://github.com/AtharvTyagi1805/Code.OPT",
  },
  {
    id: 12,
    name: "Ethical-XAI",
    image: Project12,
    desc: "Built a Python-based Ethical XAI system for security threat prediction with SHAP explainability, ethical clustering, and integrated external threat intelligence APIs.",
    detaildesc:
      "Developed an advanced AI-powered security threat analysis platform that combines predictive modeling, ethical AI principles, and explainable insights. The system processes and enriches CVE and CAPEC datasets, applies clustering and classification algorithms for accurate threat prediction, and leverages SHAP for model interpretability. Integrated with external APIs such as VirusTotal to enhance real-time intelligence gathering. The platform provides actionable mitigation strategies alongside transparent reasoning, enabling ethical decision-making in cybersecurity. Designed for scalability, asynchronous data fetching, and seamless retraining, ensuring adaptability to evolving threats.",
    techTags: [
      "Python",
      "scikit-learn",
      "SHAP",
      "Asyncio",
      "SentenceTransformer",
      "CVE Dataset",
      "CAPEC Dataset",
      "Threat Intelligence",
      "Explainable AI",
      "VirusTotal API",
    ],
    journey: true,
    github: "https://github.com/AtharvTyagi1805/Ethical-XAI",
  },
  {
    id: 13,
    name: "Cognition Website",
    image: Project13,
    desc: "Built a responsive React website for the Cognition event with smooth animations, unique visuals, and interactive displays.",
    detaildesc:
      "Developed a visually engaging and fully responsive event website for “Cognition” using React.js, Tailwind CSS, and Framer Motion for dynamic animations. Designed to showcase event details with a distinctive visual style, incorporating smooth transitions, interactive elements, and a clean layout for an engaging user experience. Integrated Formspree to handle form submissions efficiently without requiring a backend. Optimized the site for mobile and desktop devices, ensuring fast load times and accessibility for all visitors.",
    techTags: [
      "React.js",
      "Framer Motion",
      "Tailwind CSS",
      "Formspree",
      "Responsive Design",
      "Event Website",
      "Animations",
      "UI/UX",
      "Frontend Development",
    ],
    journey: true,
    github: "https://github.com/The-Acers/Cognition",
    demo: "https://cognition.theace.tech/",
  },
  {
    id: 14,
    name: "Legal Work Automation",
    image: Project14,
    desc: "Built a Google Apps Script–powered system to automate multi-stage legal workflows, track case statuses, and assign tasks, reducing manual effort and improving accuracy.",
    detaildesc:
      "Developed a legal workflow automation solution using Google Sheets scripting and backend logic to streamline multi-stage legal processes. Implemented automated data tracking, status monitoring, and role-based task assignments to reduce manual input, minimize human error, and ensure timely case handling. Leveraged DSA concepts for efficient data organization and implemented triggers to keep all stakeholders updated. The system improves transparency, speeds up legal operations, and supports high-volume case management with minimal overhead.",
    techTags: [
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
    journey: true,
  },
  {
    id: 15,
    name: "3D AI for policies and Claims",
    image: Project15,
    desc: "Designed an AI-powered 3D interactive assistant integrating policy recommendation, claim automation, fraud detection, and contextual support modules under one core system.",
    detaildesc:
      "Developed an immersive AI-driven assistant with a 3D animated front-end for enhanced user engagement in insurance-related services. The platform integrates multiple AI modules under a unified, modular architecture, including policy recommendation, policy explanation, claims processing, fraud detection, and contextual query handling. Focused on delivering intelligent, context-aware responses while maintaining a visually engaging interface. Designed to be scalable, with each AI module independently upgradable for continuous improvement and evolving user needs.",
    techTags: [
      "AI Assistant",
      "Data Science",
      "Machine Learning",
      "3D Interface",
      "Recommendation System",
      "Policy Explanation",
      "Claims Automation",
      "Fraud Detection",
      "NLP",
      "Visual Intelligence",
    ],
    journey: true,
  },
  {
    id: 16,
    name: "Visualising App",
    image: Project16,
    desc: "Built a role-based Android app for dynamic company data visualization and secure content access, backed by Django APIs and Google Sheets integration.",
    detaildesc:
      "Developed a cross-functional Android application to dynamically display company information, visualize data, and enable secure, on-demand data retrieval. Implemented role-based access controls for admins and regular users to manage permissions and content visibility. The backend, powered by Django APIs, ensures scalability and secure data handling, while Google Sheets serves as a lightweight data layer for quick updates. The application combines a user-friendly interface with powerful visualization features, making it a versatile tool for both management and operational teams.",
    techTags: [
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
    journey: true,
  },
];

const fadeInVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2 + 0.7,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Projects = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [active, setActive] = useState(null);
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const scrollPositionRef = useRef(0);
  const maxScrollRef = useRef(0);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [active]);

  useEffect(() => {
    if (!scrollRef.current) return;

    let requestId;
    const scrollSpeed = 0.5;
    maxScrollRef.current = scrollRef.current.scrollWidth / 2;

    const scrollProjects = () => {
      scrollPositionRef.current += scrollSpeed;

      if (scrollPositionRef.current > maxScrollRef.current) {
        scrollPositionRef.current = 0;
      }

      scrollRef.current.style.transform = `translateX(-${scrollPositionRef.current}px)`;
      requestId = requestAnimationFrame(scrollProjects);
    };

    requestId = requestAnimationFrame(scrollProjects);

    return () => {
      if (requestId) {
        cancelAnimationFrame(requestId);
      }
    };
  }, []);

  const scrollProjects = (direction) => {
    if (!scrollRef.current || !containerRef.current) return;

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    const scrollAmount = containerRef.current.offsetWidth * 0.8;
    const currentPosition = scrollPositionRef.current;

    let newPosition =
      currentPosition + (direction === "right" ? scrollAmount : -scrollAmount);

    if (newPosition > maxScrollRef.current) {
      newPosition = 0;
    } else if (newPosition < 0) {
      newPosition = maxScrollRef.current;
    }

    scrollRef.current.style.transition = "transform 0.5s ease-out";
    scrollRef.current.style.transform = `translateX(-${newPosition}px)`;
    scrollPositionRef.current = newPosition;

    setTimeout(() => {
      scrollRef.current.style.transition = "none";
      const restartScroll = () => {
        scrollPositionRef.current += 0.5;
        if (scrollPositionRef.current > maxScrollRef.current) {
          scrollPositionRef.current = 0;
        }
        scrollRef.current.style.transform = `translateX(-${scrollPositionRef.current}px)`;
        animationRef.current = requestAnimationFrame(restartScroll);
      };
      animationRef.current = requestAnimationFrame(restartScroll);
    }, 500);
  };

  return (
    <div
      id="projects"
      ref={ref}
      className="min-h-screen py-20 px-4 flex flex-col items-center relative overflow-hidden"
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center hover-fill relative mb-4"
        data-text="PROJECTS"
        variants={fadeInVariant}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={0}
      >
        PROJECTS
      </motion.h1>

      <motion.p
        className="text-lg text-center max-w-2xl mb-12 px-4 text-gray-600 dark:text-gray-300"
        variants={fadeInVariant}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={0.2}
      >
        My featured work with continuous horizontal scroll effect
      </motion.p>

      <div
        ref={containerRef}
        className="projects-container-wrapper w-full relative"
      >
        <button
          className="scroll-button left-0"
          onClick={() => scrollProjects("left")}
          aria-label="Scroll left"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="projects-scroll-container" ref={scrollRef}>
          {[...projectList, ...projectList].map((proj, idx) => (
            <div key={`${proj.id}-${idx}`} className="project-card">
              <img
                src={proj.image}
                alt={proj.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2
                className="text-xl font-bold underline-hover relative"
                data-text={proj.name}
              >
                {proj.name}
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-2 mb-3">
                {proj.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {proj.techTags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 flex-wrap">
                {proj.journey && (
                  <button className="btn" onClick={() => setActive(proj)}>
                    My Journey
                  </button>
                )}
                {proj.github && (
                  <a
                    href={proj.github}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {proj.demo && (
                  <a
                    href={proj.demo}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <button
          className="scroll-button right-0"
          onClick={() => scrollProjects("right")}
          aria-label="Scroll right"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {active && (
        <div className="project-modal" onClick={() => setActive(null)}>
          <motion.div
            className="project-modal-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          >
            <span className="close-btn" onClick={() => setActive(null)}>
              ×
            </span>
            <img
              src={active.image}
              alt={active.name}
              className="w-full h-48 object-cover rounded-md mb-6"
            />
            <h2
              className="text-2xl font-bold mb-2 text-center"
              data-text={active.name}
            >
              {active.name}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
              {active.detaildesc}
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {active.techTags.map((tag, i) => (
                <span key={i} className="tag-lg">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3 justify-center">
              {active.github && (
                <a
                  href={active.github}
                  className="btn-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  GitHub
                </a>
              )}
              {active.demo && (
                <a
                  href={active.demo}
                  className="btn-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  View Demo
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}

      <div className="mt-16 text-center max-w-2xl px-4">
        <motion.h3
          className="text-2xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={
            inView ? { opacity: 1, y: 0, transition: { delay: 0.8 } } : {}
          }
        >
          Thanks For going through my Projects
        </motion.h3>
        <motion.p
          className="text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={
            inView ? { opacity: 1, y: 0, transition: { delay: 1.0 } } : {}
          }
        >
          Thanks for reviewing my projects — each one is a story of late-night
          caffeine, countless debug logs, and tiny victories. Just like every ;
          matters in code, every project here shaped how I think, build, and
          break things (intentionally or not). Hope you enjoyed the journey as
          much as I enjoyed surviving it!
        </motion.p>
      </div>
    </div>
  );
};

export default Projects;
