import React, { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Html } from "@react-three/drei";
import { FiMail, FiUser, FiMessageSquare, FiCode } from "react-icons/fi";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

const ThreeDCard = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(time * 0.3) * 0.1;
    meshRef.current.rotation.y = Math.cos(time * 0.2) * 0.1;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[8, 6, 0.5]} />
      <meshStandardMaterial color="#e2e8f0" metalness={0.5} roughness={0.2} />
      <Html position={[0, 0, 0.26]} transform occlude>
        <FiCode className="text-[10rem] text-white dark:text-white" />
      </Html>
    </mesh>
  );
};

const typewriterTexts = [
  "Hey! I am Atharv Tyagi, I solve algorithms, program code and sometimes cry about errors.",
  "Code, coffee, and chaos – that's my debugging routine.",
  "Atharv here! I turn logic into magic (and sometimes bugs).",
  "Solving problems one curly brace at a time.",
  "Front-end by day, back-end by night – errors 24/7.",
];

const Contact = () => {
  const [state, handleSubmit] = useForm("myzjbqyw");
  const textRef = useRef(null);
  const cursorRef = useRef(null);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 40;
    const deletingSpeed = 20;
    const pauseTime = 1500;

    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const type = () => {
      const fullText = typewriterTexts[currentTextIndex];
      const currentDisplay = fullText.substring(0, charIndex);

      if (textRef.current) {
        textRef.current.textContent = currentDisplay;
      }

      if (!isDeleting && charIndex < fullText.length) {
        charIndex++;
        timeoutId = setTimeout(type, typingSpeed);
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        timeoutId = setTimeout(type, deletingSpeed);
      } else {
        isDeleting = !isDeleting;
        timeoutId = setTimeout(() => {
          if (!isDeleting) {
            setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length);
          }
          type();
        }, pauseTime);
      }
    };

    type();
    return () => clearTimeout(timeoutId);
  }, [currentTextIndex]);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <div className="relative inline-block">
              <motion.h1
                className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Drop Me a Msg
                <span className="text-indigo-600 dark:text-indigo-400 ml-2">
                  {"</>"}
                </span>
              </motion.h1>
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-indigo-600 dark:bg-indigo-400"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </div>

            <div className="mt-8 relative">
              <p
                ref={textRef}
                className="text-lg md:text-xl text-gray-700 dark:text-gray-300 min-h-[120px]"
              />
              <span
                ref={cursorRef}
                className="ml-1 inline-block w-[2px] h-6 bg-indigo-600 dark:bg-indigo-400 animate-blink"
              />
            </div>

            <div className="mt-12 w-32 h-32 mx-auto lg:mx-0">
              <Canvas>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <ThreeDCard />
                <OrbitControls enableZoom={false} />
                <PerspectiveCamera makeDefault position={[0, 0, 15]} />
              </Canvas>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <motion.div
              className="w-full max-w-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-indigo-600 dark:bg-indigo-400 rounded-xl blur-lg opacity-30"></div>

                <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 transform transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-2xl border border-gray-200 dark:border-gray-700">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                    Contact Me
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiUser className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        className="w-full pl-10 pr-3 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900 dark:text-white"
                        placeholder="Your Name"
                      />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiMail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        className="w-full pl-10 pr-3 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900 dark:text-white"
                        placeholder="Your Email"
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </div>

                    <div className="relative">
                      <div className="absolute top-3 left-3">
                        <FiMessageSquare className="h-5 w-5 text-gray-400" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full pl-10 pr-3 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900 dark:text-white"
                        placeholder="Your Message"
                      />
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                    >
                      {state.submitting ? "Sending..." : "Send Message"}
                    </button>

                    {state.succeeded && (
                      <div className="mt-4 p-3 rounded-lg text-center bg-green-100 text-green-700">
                        Message sent successfully!
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </div>
  );
};

export default Contact;
