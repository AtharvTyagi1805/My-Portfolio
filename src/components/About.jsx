import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-4 text-white text-center"
    >
      <div className="mb-6">
        <h2 className="text-5xl font-belleza relative group">
          About Me
          <span className="block font-bevietnam text-sm italic text-gray-300 mt-1">
            But Make It Cool
          </span>
          <span className="absolute left-1/2 -bottom-1 transform -translate-x-1/2 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full" />
        </h2>
      </div>

      <div className="max-w-3xl font-classic bg-white/5 border border-white/10 px-6 py-6 rounded-2xl backdrop-blur-md text-lg leading-relaxed font-light">
        <p>
          I’m basically a <span className="font-semibold italic">designer</span>{" "}
          by accident and a developer because Google told me to be. I specialize
          in turning caffeine and procrastination into borderline usable
          interfaces and eye candy. My work’s that rare mix of “Did they
          actually do that?” and “Wow, I kind of like it.”
        </p>
        <br />
        <p>
          When I’m not busy juggling pixels, I’m probably lost in game dev,
          branding, or pretending cinematography is a real job. Powered by
          coffee, bad jokes, and an unhealthy obsession with organizing folders
          I’ll never look at again.
        </p>
      </div>
    </section>
  );
};

export default About;
