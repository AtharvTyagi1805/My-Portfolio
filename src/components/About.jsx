import React, { useState, useRef, useLayoutEffect } from "react";
import "./about.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const semesterData = [
  {
    semester: 1,
    time: "2023-2024",
    sgpa: "8.64",
    subjects: [
      "Applied Chemistry / Basic Chemistry",
      "Applied Physics – I",
      "Electrical Science",
      "Applied Mathematics – I",
      "Communication Skills - I",
      "Human Values and Ethics",
      "Manufacturing Process",
      "Physics-I Lab",
      "Applied Chemistry Lab",
      "Engineering Graphics-I",
      "Electrical Science Lab",
      "Workshop Practice",
    ],
  },
  {
    semester: 2,
    time: "2024",
    sgpa: "8.66",
    subjects: [
      "Programming in C",
      "Applied Physics – II",
      "Envoiremental Science",
      "Applied Mathematics – II",
      "Communication Skills - II",
      "Engineering Mechanics",
      "Indian Constitution",
      "Physics-II Lab",
      "Programming in C Lab",
      "Engineering Graphics-I",
      "Envoiremental Science Lab",
    ],
  },
  {
    semester: 3,
    time: "2024",
    sgpa: "9.2",
    subjects: [
      "Data Structures",
      "Foundations of Data Science",
      "Digital Logic Design",
      "Principles of Artificial Intelligence",
      "Probability, Statistics and Linear Algebra",
      "Universal Human Values - II",
      "Critical Reasoning and Systems Thinking",
      "Selected Readings",
      "Data Structures Lab",
      "Foundations of Data Science Lab",
      "Digital Logic Design Lab",
      "Principles of Artificial Intelligence Lab",
      "Web Programming Lab",
    ],
  },
  {
    semester: 4,
    time: "2025",
    sgpa: "9.68",
    subjects: [
      "Object Oriented Programming",
      "Database Management Systems",
      "Software Engineering",
      "Computer Networks and Internet Protocol",
      "Fundamentals of Machine Learning",
      "Computational Methods",
      "Effective Technical Writing",
      "Emerging Trends in Technological Industries",
      "Object Oriented Programming Lab",
      "Database Management Systems Lab",
      "Computer Networks and Internet Protocol Lab",
      "Fundamentals of Machine Learning Lab",
      "Practicum (Integrated Project)",
    ],
  },
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.7 + i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const About = () => {
  const [flipped, setFlipped] = useState(false);
  const totalCGPA = (
    semesterData.reduce((acc, s) => acc + parseFloat(s.sgpa), 0) /
    semesterData.length
  ).toFixed(2);

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const cardContainerRef = useRef(null);
  const frontRef = useRef(null);
  const backRef = useRef(null);

  useLayoutEffect(() => {
    if (cardContainerRef.current && frontRef.current && backRef.current) {
      const frontHeight = frontRef.current.offsetHeight;
      const backHeight = backRef.current.offsetHeight;
      cardContainerRef.current.style.height = `${
        flipped ? backHeight : frontHeight
      }px`;
    }
  }, [flipped]);

  return (
    <div
      id="about"
      ref={ref}
      className="about-wrapper px-6 py-16 min-h-screen flex flex-col items-center"
    >
      <motion.div
        className="text-center mb-6 relative group"
        custom={0}
        variants={fadeInVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <h1
          className="text-4xl md:text-5xl font-bold hover-fill "
          data-text="ABOUT ME"
        >
          ABOUT ME
        </h1>
        <p className="italic text-sm text-gray-500 dark:text-gray-400 mt-1">
          and my errors
        </p>
      </motion.div>

      <motion.div
        ref={cardContainerRef}
        className={`card-container ${flipped ? "flipped" : ""}`}
        custom={1}
        variants={fadeInVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="card-inner">
          <motion.div className="card front" ref={frontRef}>
            <p className="text-base md:text-lg mt-4">
              Hey! I’m Atharv Tyagi — a B.Tech student in Artificial
              Intelligence & Data Science who talks to machines more than people
              (and surprisingly, they listen). I spend most of my time solving
              complex algorithms, building full-stack applications, and
              sometimes just staring at error messages until they reveal their
              secrets. From Python to React, Django to data wrangling with
              Pandas, I love turning coffee into code and ideas into working
              projects. Whether it's crafting a dashboard that visualizes data
              like art, building a chatbot that actually chats back, or cloning
              voices with a sprinkle of deep learning magic — I do it all with a
              mix of curiosity, chaos, and caffeine. I'm also that person who
              leads tech events, mentors peers, and still finds time to debug
              till dawn. In short: I build, break, fix, learn, and repeat — all
              with a smile and a few existential coding crises along the way.
            </p>
            <button
              onClick={() => setFlipped(true)}
              className="flip-button mt-8 ml-auto block"
            >
              <FaArrowRight />
            </button>
          </motion.div>

          <motion.div className="card back" ref={backRef}>
            <motion.h2
              className="text-2xl font-bold mb-6 text-center"
              custom={2}
              variants={fadeInVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              Semester Record
            </motion.h2>

            <motion.div
              className="about-timeline-wrapper"
              custom={3}
              variants={fadeInVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {Array.from({ length: 8 }, (_, i) => {
                const sem = i + 1;
                const data = semesterData.find((s) => s.semester === sem);
                const hasData = !!data;

                return (
                  <div
                    key={sem}
                    className={`about-timeline-item ${
                      hasData ? "active" : "disabled"
                    }`}
                  >
                    <div className="about-timeline-time">
                      {hasData ? data.time : "---"}
                    </div>
                    <div className="about-timeline-circle-group">
                      <div className="about-timeline-circle" />
                      {sem !== 8 && <div className="about-timeline-line" />}
                    </div>
                    <div className="about-timeline-semester group">
                      Sem {sem}
                      {hasData && (
                        <div className="about-timeline-hover-card">
                          <p>SGPA: {data.sgpa}</p>
                          <p>Subjects: {data.subjects.join(", ")}</p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </motion.div>

            <motion.div
              className="flex justify-between items-end w-full mt-8"
              custom={4}
              variants={fadeInVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <button onClick={() => setFlipped(false)} className="flip-button">
                <FaArrowLeft />
              </button>
              <div className="text-right font-semibold text-lg mt-4">
                Total CGPA: 9.09
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
