import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import { TypeAnimation } from "react-type-animation";
import { FaInfinity } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Home.css";

function Model() {
  const group = useRef();
  const { scene, animations } = useGLTF("/robot_playground.glb");
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        const name = child.name.toLowerCase();
        if (name.includes("background") || name.includes("plane")) {
          child.visible = false;
        }
      }
    });

    if (actions["Experiment"]) {
      actions["Experiment"].reset().fadeIn(0.5).play();
    } else {
      console.warn("Animation 'Experiment' not found. Available:", names);
    }
  }, [actions, scene, names]);

  return (
    <primitive ref={group} object={scene} scale={1.1} position={[0, -1.2, 0]} />
  );
}

const colors = ["#00FFFF", "#FF69B4", "#00CED1", "#00008B"];

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, type: "spring", stiffness: 60 },
  }),
};

const Home = () => {
  return (
    <div
      id="home"
      className="home-wrapper w-full min-h-screen flex flex-col justify-between pt-8 px-4 md:px-12 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* LEFT SIDE */}
        <motion.div
          className="w-full md:w-1/2 px-4 space-y-8"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          {/* HEADINGS */}
          <div className="heading-block font-[Arial] leading-[1.2] max-w-fit">
            <div className="flex gap-2 items-end">
              <span
                className="text-outline hover-fill translate-y-[0.5rem]"
                data-text="my"
              >
                my
              </span>
              <span className="text-outline hover-fill" data-text="World">
                World
              </span>
              <span className="text-outline text-[1.5rem] translate-y-[1.4rem]">
                of
              </span>
            </div>

            <div
              className="text-center text-outline hover-fill mt-2 block"
              data-text="HIT and"
            >
              HIT and
            </div>

            <div className="flex justify-end mt-2">
              <span className="text-outline hover-fill block" data-text="TRIAL">
                TRIAL
              </span>
            </div>
          </div>

          {/* PARAGRAPH */}
          <motion.p
            className="text-[1.1rem] leading-snug max-w-xl"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Hey! I am{" "}
            <span
              className="text-[2rem] text-outline hover-fill"
              data-text="Atharv Tyagi"
            >
              Atharv Tyagi
            </span>
            , I solve algorithms, program code and sometimes cry about errors –
            swipe to go through my journey of debugging errors
          </motion.p>

          {/* ROLES TEXT */}
          <motion.div
            className="text-[2.3rem] md:text-[3rem] font-bold flex items-center flex-wrap text-left"
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <span className="text-outline hover-fill mr-4" data-text="I am">
              I am
            </span>
            <span className="inline-block relative">
              <TypeAnimation
                sequence={[
                  "Developer",
                  1500,
                  "Programmer",
                  1500,
                  "Coder",
                  1500,
                  "Data Scientist",
                  1500,
                ]}
                wrapper="span"
                repeat={Infinity}
                className="px-4 py-1 border border-black border-dashed"
                style={{
                  fontSize: "2.6rem",
                  display: "inline-block",
                  backgroundImage: `repeating-linear-gradient(
                    45deg,
                    ${colors[0]} 0px, ${colors[0]} 3px,
                    ${colors[1]} 3px, ${colors[1]} 6px,
                    ${colors[2]} 6px, ${colors[2]} 9px,
                    ${colors[3]} 9px, ${colors[3]} 12px
                  )`,
                  backgroundSize: "12px 12px",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              />
            </span>
          </motion.div>

          {/* CARDS */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6"
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <div className="bg-white/20 backdrop-blur-md rounded-lg border border-gray-300 p-4 text-center card-hover">
              <h3 className="text-3xl font-bold">2+</h3>
              <p className="text-sm">Years Experience</p>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-lg border border-gray-300 p-4 text-center card-hover">
              <h3 className="text-3xl font-bold">20+</h3>
              <p className="text-sm">Projects Completed</p>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-lg border border-gray-300 p-4 text-center card-hover">
              <h3 className="text-3xl font-bold flex justify-center items-center gap-1">
                <FaInfinity className="text-2xl" />
              </h3>
              <p className="text-sm">Errors</p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - 3D MODEL */}
        <motion.div
          className="w-full md:w-1/2 h-[450px] md:h-[600px] relative"
          custom={4}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: (i) => ({
              opacity: 1,
              x: 0,
              transition: { delay: i * 0.2, type: "spring", stiffness: 60 },
            }),
          }}
        >
          <Canvas
            camera={{ position: [2, 1.5, 4], fov: 45 }}
            gl={{ alpha: true }}
            style={{ background: "transparent", width: "100%", height: "100%" }}
          >
            <ambientLight intensity={1.2} />
            <directionalLight position={[2, 2, 5]} intensity={1} />
            <Model />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
