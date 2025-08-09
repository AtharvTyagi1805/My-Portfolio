import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./header.css";

const menuItems = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Contact",
];

const Header = ({ darkMode, setDarkMode }) => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleItemClick = (id) => {
    setOpen(false);
    const target = document.getElementById(id.toLowerCase());
    if (target) {
      const flash = document.createElement("div");
      flash.className = `fast-forward-flash`;
      document.body.appendChild(flash);
      setTimeout(() => {
        flash.remove();
        target.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <>
      <div
        className={`menu-button-container toggle ${
          isMobile ? "mobile-toggle" : ""
        }`}
      >
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`menu-circle small ${darkMode ? "dark" : ""}`}
        >
          {darkMode ? "☾" : "☀"}
        </button>
      </div>

      <div
        className={`menu-button-container ${isMobile ? "mobile" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <div
          className={`menu-circle ${open ? "open" : ""} ${
            darkMode ? "dark" : ""
          }`}
        >
          <div className="bar top-bar"></div>
          <div className="bar mid-bar"></div>
          <div className="bar bot-bar"></div>
        </div>
      </div>

      <AnimatePresence>
        {!isMobile && open && (
          <motion.div
            className={`horizontal-menu ${darkMode ? "dark" : ""}`}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "720px", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="menu-items">
              {menuItems.map((item) => (
                <div
                  key={item}
                  className="menu-link"
                  onClick={() => handleItemClick(item)}
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMobile && open && (
          <motion.div
            className={`mobile-menu ${darkMode ? "dark" : ""}`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="menu-items mobile-items">
              {menuItems.map((item) => (
                <div
                  key={item}
                  className="menu-link"
                  onClick={() => handleItemClick(item)}
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
