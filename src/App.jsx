import { useState, useEffect } from "react";
import Bg from "./components/Bg";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  if (showSplash) {
    return (
      <div
        className={`w-full h-screen flex items-center justify-center ${
          darkMode ? "bg-[#1a1a1a] text-white" : "bg-[#f5f5f5] text-black"
        } text-[2rem] md:text-[3rem] font-light tracking-wide`}
      >
        Atharv Tyagi Portfolio
      </div>
    );
  }

  return (
    <>
      <div className={darkMode ? "dark" : "light"}>
        <Bg darkMode={darkMode} />
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="pt-24">
          <Home darkMode={darkMode} />
          {/* Add other sections here like: */}
          <About darkMode={darkMode} />
          <Skills darkMode={darkMode} />
          <Experience darkMode={darkMode} />
          <Projects darkMode={darkMode} />
          <Contact darkMode={darkMode} />
          <Footer darkMode={darkMode} />
        </div>
      </div>
    </>
  );
}

export default App;
