import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Infinity } from "lucide-react";
import img from "../assets/intro.png";

const Intro = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div
      ref={ref}
      className="min-h-screen w-full flex flex-col md:flex-row text-white bg-transparent relative"
    >
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-6 md:px-16 py-16 gap-4 z-10">
        <div className="leading-tight">
          <div className="group relative inline-block">
            <span className="text-[2.5rem] md:text-[3.5rem] font-berkshire font-light">
              my
            </span>
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></div>
          </div>

          <div className="mt-1 group relative inline-block">
            <span className="text-[5.5rem] md:text-[7.5rem] font-bevietnam font-semibold leading-[0.9]">
              lif.e
            </span>
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></div>
          </div>
          <br />

          <div className="mt-2 italic font-bevietnam font-light group relative inline-block">
            <span className="text-[3.5rem] md:text-[5rem]">pixels</span>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
          </div>
        </div>

        <div className="text-left mt-6 text-white">
          <p className="font-berkshire text-xl md:text-2xl italic">
            Hi, I am{" "}
            <span className="font-medium font-belleza underline underline-offset-4">
              Anshuman Mishra
            </span>
          </p>
          <p className="text-lg font-bevietnam md:text-xl mt-3 text-gray-300 max-w-[30rem]">
            I mix colors, code, and curiosity — swipe down to see the madness.
          </p>
        </div>

        <div className="mt-10 flex flex-row gap-6 flex-wrap">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 w-[160px] flex flex-col items-center text-center">
            <p className="text-3xl font-bold text-white">5+</p>
            <p className="text-sm text-white/80 mt-1">Years Experience</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 w-[160px] flex flex-col items-center text-center">
            <p className="text-3xl font-bold text-white">50+</p>
            <p className="text-sm text-white/80 mt-1">Projects Completed</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 w-[160px] flex flex-col items-center text-center">
            <Infinity className="text-white w-8 h-8 mb-1" />
            <p className="text-sm text-white/80 mt-1">Cups of Coffee</p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 relative overflow-hidden bg-transparent flex flex-col">
        <motion.div
          variants={{
            hidden: { x: "100%" },
            visible: { x: "0%" },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1 }}
          className="absolute top-0 right-0 h-full w-1/2 bg-white z-0"
        ></motion.div>

        <motion.div
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 1 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute inset-0 flex items-center justify-center z-10"
        >
          <div className="h-[24rem] w-[24rem] rounded-full border-4 border-white bg-black"></div>
        </motion.div>

        <div className="flex-grow relative">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
            <motion.img
              src={img}
              alt="Anshuman"
              variants={{
                hidden: { y: "100%" },
                visible: { y: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 1, delay: 0.4 }}
              className="w-[450px] h-auto object-cover"
            />

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-[-1px] px-10 py-3 bg-black border-white border-[0.02rem] text-white text-lg md:text-xl rounded-full shadow-md flex justify-center min-w-[500px]"
            >
              <span className="relative group font-medium">
                Anshuman Mishra
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
