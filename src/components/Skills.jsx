import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./skills.css";

import python from "../assets/Python.png";
import js from "../assets/JS.png";
import cpp from "../assets/Cpp.png";
import java from "../assets/java.png";
import c from "../assets/C.png";
import kotlin from "../assets/Kotlin.png";
import R from "../assets/R.png";

import ML from "../assets/ML.png";
import AI from "../assets/AI_skill.png";
import ST from "../assets/ST.png";
import NLP from "../assets/NLP.png";
import tenserflow from "../assets/tensorflow.png";
import SHAP from "../assets/SHAP.png";
import Scipy from "../assets/scipy.png";
import sklearn from "../assets/Sklearn.png";
import EDA from "../assets/EDA.png";
import matplot from "../assets/matplot.png";
import numpy from "../assets/numpy.png";
import pandas from "../assets/pandas.png";

import react from "../assets/React.png";
import django from "../assets/Django.png";
import Tailwin from "../assets/ReactChartjs.png";
import reactChart from "../assets/Tailwind.png";
import R3F from "../assets/R3F.png";

import excel from "../assets/Excel.png";
import sql from "../assets/SQL.png";
import AS from "../assets/android_studio.png";
import ubuntu from "../assets/ubuntu.png";
import mongoDB from "../assets/MongoDB.png";
import git from "../assets/Git.png";
import vscode from "../assets/vs.png";

const skills = {
  Languages: [
    { name: "Python", image: python, level: 90 },
    { name: "R", image: R, level: 60 },
    { name: "JavaScript", image: js, level: 80 },
    { name: "C++", image: cpp, level: 55 },
    { name: "C", image: c, level: 65 },
    { name: "Java", image: java, level: 75 },
    { name: "Kotlin", image: kotlin, level: 60 },
  ],
  PythonLibraries: [
    { name: "NumPy", image: numpy, level: 95 },
    { name: "Pandas", image: pandas, level: 93 },
    { name: "Matplotlib", image: matplot, level: 88 },
    { name: "Seaborn / EDA", image: EDA, level: 85 },
    { name: "SciPy", image: Scipy, level: 75 },
    { name: "Scikit-learn", image: sklearn, level: 90 },
    { name: "TensorFlow", image: tenserflow, level: 70 },
    { name: "NLP", image: NLP, level: 70 },
    { name: "Sentence Transformers", image: ST, level: 68 },
    { name: "SHAP (Explainability)", image: SHAP, level: 65 },
    { name: "Machine Learning", image: ML, level: 85 },
    { name: "Artificial Intelligence", image: AI, level: 80 },
  ],
  Frameworks: [
    { name: "Django", image: django, level: 95 },
    { name: "React.js", image: react, level: 90 },
    { name: "Tailwind CSS", image: reactChart, level: 88 },
    { name: "React Chart.js", image: Tailwin, level: 75 },
    { name: "React Three Fiber (R3F)", image: R3F, level: 75 },
  ],
  Tools: [
    { name: "SQL", image: sql, level: 90 },
    { name: "Excel", image: excel, level: 85 },
    { name: "MongoDB", image: mongoDB, level: 80 },
    { name: "Android Studio", image: AS, level: 65 },
    { name: "Ubuntu", image: ubuntu, level: 60 },
    { name: "Git", image: git, level: 85 },
    { name: "VS Code", image: vscode, level: 90 },
  ],
};

const progressColors = ["#f87171", "#60a5fa", "#34d399", "#fbbf24", "#c084fc"];

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

const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div
      id="skills"
      ref={ref}
      className="px-6 py-16 min-h-screen flex flex-col items-center"
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center hover-fill mb-12"
        variants={fadeInVariant}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={0}
        data-text="TECHNOLOGIES"
      >
        TECHNOLOGIES
      </motion.h1>

      <div className="flex flex-col items-center w-full max-w-5xl gap-14">
        {Object.entries(skills).map(([category, techList], i) => (
          <motion.div
            key={category}
            className="w-full flex flex-col items-center"
            variants={fadeInVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={i + 1}
          >
            <h2 className="text-2xl font-semibold mb-4 text-center">
              {category}
            </h2>

            <div
              className={`category-card group relative min-w-[320px] w-full max-w-6xl p-6 border-t-[5px] border-l-[5px] border-black dark:border-white rounded-3xl shadow-lg transition-colors duration-300 ${
                hoveredCard?.category === category ? "hovered" : ""
              }`}
            >
              {hoveredCard?.category === category && (
                <div className="category-fill-overlay">
                  <motion.div
                    key={`${hoveredCard.category}-${hoveredCard.index}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${hoveredCard.level}%` }}
                    transition={{ duration: 1 }}
                    className=""
                    style={{
                      backgroundColor: hoveredCard.color,
                    }}
                  />
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center z-10 relative">
                {techList.map((tech, idx) => {
                  const isHovered =
                    hoveredCard?.category === category &&
                    hoveredCard?.index === idx;

                  return (
                    <div
                      key={tech.name}
                      className="inner-skill-flip-wrapper"
                      onMouseEnter={() =>
                        setHoveredCard({
                          category,
                          index: idx,
                          level: tech.level,
                          color: progressColors[idx % progressColors.length],
                        })
                      }
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div
                        className={`inner-skill-flip-card ${
                          isHovered ? "flipped" : ""
                        }`}
                      >
                        <div className="inner-skill-front">
                          <img
                            src={tech.image}
                            alt={tech.name}
                            className="w-16 h-16 mx-auto"
                          />
                          <p className="text-center mt-2 text-sm">
                            {tech.name}
                          </p>
                        </div>

                        <div className="inner-skill-back flex flex-col items-center justify-center">
                          <p className="text-lg font-bold mb-2 text-gray-800 dark:text-white">
                            {tech.level}%
                          </p>

                          <div className="loading-bar-outer w-full">
                            <motion.div
                              key={`${tech.name}-fill`}
                              initial={{ width: 0 }}
                              animate={{ width: `${tech.level}%` }}
                              transition={{ duration: 1 }}
                              className="loading-bar-fill"
                              style={{
                                backgroundColor:
                                  progressColors[idx % progressColors.length],
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
