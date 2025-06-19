import figma from "../assets/Figma.png";
import ai from "../assets/ai.png";
import ps from "../assets/ps.png";
import pr from "../assets/pr.png";
import ae from "../assets/ae.png";
import unity from "../assets/unity.png";
import unreal from "../assets/unreal.png";
import mysql from "../assets/mysql.png";
import cpp from "../assets/cpp.png";
import python from "../assets/python.png";

const tools = [
  { name: "Figma", icon: figma, link: "https://www.figma.com" },
  {
    name: "Illustrator",
    icon: ai,
    link: "https://www.adobe.com/products/illustrator.html",
  },
  {
    name: "Photoshop",
    icon: ps,
    link: "https://www.adobe.com/products/photoshop.html",
  },
  {
    name: "Premiere Pro",
    icon: pr,
    link: "https://www.adobe.com/products/premiere.html",
  },
  {
    name: "After Effects",
    icon: ae,
    link: "https://www.adobe.com/products/aftereffects.html",
  },
  { name: "Unity", icon: unity, link: "https://unity.com/" },
  { name: "Unreal", icon: unreal, link: "https://www.unrealengine.com/" },
  { name: "MySQL", icon: mysql, link: "https://www.mysql.com/" },
  { name: "C++", icon: cpp, link: "https://isocpp.org/" },
  { name: "Python", icon: python, link: "https://www.python.org/" },
];

const Flex = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 text-white">
      <h1 className="text-5xl font-semibold relative group mb-4">
        <span className="text-2xl font-berkshire ">my</span>
        <span className="ml-1 font-cherry">Flex</span>
        <span className="absolute left-0 bottom-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
      </h1>

      <p className="italic font-bevietnam text-center mt-1 mb-6 text-gray-300 max-w-xl">
        “My flex? Turning 'just an idea' into `woah, that’s cool!`“
      </p>

      <div className="bg-black border border-white/10 rounded-2xl p-6 flex flex-wrap justify-center gap-5">
        {tools.map((tool, index) => (
          <a
            href={tool.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center transition-transform duration-300 transform hover:scale-110"
          >
            <img
              src={tool.icon}
              alt={tool.name}
              className="w-full h-full object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Flex;
