import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import bgPattern from "../assets/bg.png";

const Bg = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveringText, setHoveringText] = useState(false);

  useEffect(() => {
    document.body.style.cursor = "none";

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const element = e.target;
      const computedStyle = window.getComputedStyle(element);

      const isTextElement = [
        "P",
        "SPAN",
        "H1",
        "H2",
        "H3",
        "H4",
        "H5",
        "H6",
        "A",
        "LI",
        "BUTTON",
        "INPUT",
        "TEXTAREA",
      ].includes(element.tagName);

      const hasTextCursor = computedStyle.cursor === "text";

      const isClickable = computedStyle.cursor === "pointer";

      if (isTextElement || hasTextCursor || isClickable) {
        setHoveringText(true);
      }
    };

    const handleMouseOut = () => {
      setHoveringText(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.body.style.cursor = "default";
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full -z-10"
        style={{
          backgroundImage: `url(${bgPattern})`,
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      <motion.div
        className="fixed w-1 h-1 bg-white rounded-full pointer-events-none z-50"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
        }}
      />

      <motion.div
        className="fixed bg-white/30 border border-white/70 rounded-full pointer-events-none z-50"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          width: hoveringText ? 60 : 30,
          height: hoveringText ? 60 : 30,
          borderWidth: hoveringText ? "3px" : "2px",
          filter: "blur(3px)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      />

      <motion.div
        className="fixed bg-white/15 border border-white/40 rounded-full pointer-events-none z-50"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          width: hoveringText ? 100 : 50,
          height: hoveringText ? 100 : 50,
          borderWidth: hoveringText ? "2px" : "1px",
          filter: "blur(2px)",
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
      />
    </>
  );
};

export default Bg;
