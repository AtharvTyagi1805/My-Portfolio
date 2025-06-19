import { useState } from "react";
import { FaFigma, FaReact, FaPython, FaGamepad, FaCode } from "react-icons/fa";
import { SiAdobexd, SiAdobephotoshop } from "react-icons/si";

const skillsData = [
  {
    category: "Design & Creative",
    items: [
      {
        name: "Figma",
        icon: <FaFigma size={32} />,
        desc: "UI/UX design with modern workflows and components.",
      },
      {
        name: "Adobe XD",
        icon: <SiAdobexd size={32} />,
        desc: "Used for interactive mockups and wireframes.",
      },
      {
        name: "Photoshop",
        icon: <SiAdobephotoshop size={32} />,
        desc: "Graphic design and photo editing skills.",
      },
    ],
  },
  {
    category: "Development & Technical",
    items: [
      {
        name: "React",
        icon: <FaReact size={32} />,
        desc: "Frontend development using React ecosystem.",
      },
      {
        name: "Python",
        icon: <FaPython size={32} />,
        desc: "General scripting and ML with Python.",
      },
      {
        name: "Coding",
        icon: <FaCode size={32} />,
        desc: "Strong foundation in programming and problem-solving.",
      },
    ],
  },
  {
    category: "Game Development",
    items: [
      {
        name: "Gamepad",
        icon: <FaGamepad size={32} />,
        desc: "Beginner game development and simulation.",
      },
    ],
  },
];

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <section className="h-screen flex flex-col items-center justify-center px-4 py-8 text-white text-center relative">
      <h2 className="text-5xl font-berkshire mb-6 relative group inline-block">
        Technologies
        <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full transform -translate-x-1/2" />
      </h2>

      <p className="italic mb-10 text-gray-400 max-w-xl">
        Click on any skill to learn more about my experience
      </p>

      <div className="space-y-14 font-belleza max-w-4xl w-full">
        {skillsData.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-2xl font-semibold mb-4 group relative inline-block">
              {section.category}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full" />
            </h3>

            <div className="flex flex-wrap gap-6 justify-center">
              {section.items.map((skill, index) => (
                <div
                  key={index}
                  onClick={() => setActiveSkill(skill)}
                  className="cursor-pointer w-24 h-24 bg-[#1a1a1a] rounded-lg flex flex-col items-center justify-center text-white border border-white/10 transition duration-300 transform hover:scale-105 hover:border-white/30"
                >
                  {skill.icon}
                  <span className="text-xs mt-2">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {activeSkill && (
        <div className="fixed bottom-6 right-6 max-w-sm w-full bg-[#111] text-white p-4 border border-white/20 rounded-lg shadow-lg z-50">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-lg font-semibold">{activeSkill.name}</h4>
            <button
              className="text-white text-xl ml-4"
              onClick={() => setActiveSkill(null)}
            >
              &times;
            </button>
          </div>
          <p className="text-sm text-gray-300">{activeSkill.desc}</p>
        </div>
      )}
    </section>
  );
};

export default Skills;
