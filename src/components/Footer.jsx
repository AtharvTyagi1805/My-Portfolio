import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiDownload, FiCode } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const [isHovered, setIsHovered] = useState(null);

  const socialLinks = [
    {
      id: "github",
      icon: <FiGithub />,
      label: "GitHub",
      url: "https://github.com/AtharvTyagi1805",
      color: "#333",
    },
    {
      id: "linkedin",
      icon: <FiLinkedin />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/atharv-tyagi-764341240/",
      color: "#0077B5",
    },
    {
      id: "leetcode",
      icon: <SiLeetcode />,
      label: "LeetCode",
      url: "https://leetcode.com/u/pTzcOxFlx4/",
      color: "#FFA116",
    },
  ];

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Atharv_Tyagi_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <footer className="relative overflow-hidden bg-[#f5f5f5] dark:bg-[#121212] border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gray-300 dark:text-gray-800"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 2 + 1}rem`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {"</>"}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-10 md:mb-0 text-center md:text-left"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-4"
              variants={item}
            >
              <span className="inline-block mr-2"></span>
              Hit. And. Trial.
            </motion.h2>

            <motion.p
              className="text-lg text-gray-700 dark:text-gray-300 max-w-md"
              variants={item}
            >
              Fixing errors and debugging code since 2022. Debugging by day,
              dreaming in algorithms by night.
            </motion.p>

            <motion.div
              className="mt-6 flex justify-center md:justify-start"
              variants={item}
            >
              <button
                onClick={downloadResume}
                className="flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/30 dark:shadow-indigo-500/10"
              >
                <FiDownload className="mr-2" />
                Download Resume
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center"
                variants={item}
                whileHover={{ y: -5 }}
                onMouseEnter={() => setIsHovered(link.id)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <div className="relative">
                  <div
                    className={`absolute inset-0 rounded-full ${
                      isHovered === link.id ? "animate-ping" : ""
                    }`}
                    style={{ backgroundColor: link.color, opacity: 0.3 }}
                  />
                  <div
                    className="relative w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl shadow-lg transition-all duration-300"
                    style={{ backgroundColor: link.color }}
                  >
                    {link.icon}
                  </div>
                </div>
                <span className="mt-2 font-medium text-gray-700 dark:text-gray-300">
                  {link.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        <div className="my-12 flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent rounded-full" />
        </div>

        <motion.div
          className="text-center text-gray-600 dark:text-gray-400 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-wrap justify-center items-center gap-4">
            <div className="flex items-center">
              <FiCode className="mr-2 text-indigo-600 dark:text-indigo-400" />
              <span className="font-mono">while (!succeed) try();</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>© {new Date().getFullYear()} Atharv Tyagi</span>
            <span className="hidden sm:inline">•</span>
            <span>All bugs reserved </span>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        .animate-bounce {
          animation: bounce 1.5s infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
