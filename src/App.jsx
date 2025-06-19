import React from "react";
import Bg from "./components/Bg";
import Header from "./components/Header";
import Home from "./components/Home";
import Intro from "./components/Intro";
import Flex from "./components/Flex";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Game from "./components/Game";

function App() {
  return (
    <>
      <Bg />
      <Header />
      <main className="relative z-10">
        <Home />
        <Intro />
        <Flex />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Game />
        <Footer />
      </main>
    </>
  );
}

export default App;
