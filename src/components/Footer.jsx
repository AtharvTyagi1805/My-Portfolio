import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiCodersrank } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex items-center gap-3 text-xl md:text-2xl group relative cursor-pointer">
            <SiCodersrank className="text-3xl text-yellow-400" />
            <span className="font-bevietnam relative text-white transition-all duration-300 group-hover:text-transparent group-hover:[-webkit-text-stroke:1px_white]">
              Thank you for showing interest!
              <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full" />
            </span>
          </div>

          <div className="w-full md:w-[1px] h-[1px] md:h-10 bg-white/30 md:mx-6" />

          <div className="text-xl md:text-2xl font-serif relative group cursor-pointer">
            <span className="font-cherry relative text-white transition-all duration-300 group-hover:text-transparent group-hover:[-webkit-text-stroke:1px_white]">
              Connect with me!
              <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full" />
            </span>
          </div>
        </div>

        <div className="flex gap-6 text-white text-3xl">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-125 duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-125 duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-125 duration-300"
          >
            <FaTwitter />
          </a>
        </div>

        <div>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 font-bevietnam inline-block bg-white text-black px-6 py-2 rounded-full font-medium text-lg transition hover:bg-black hover:text-white hover:border-white hover:border-[0.02rem]"
          >
            My Resume
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
