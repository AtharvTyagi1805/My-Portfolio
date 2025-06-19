import { useState, useEffect } from "react";
import code1 from "../assets/code1.png";
import code2 from "../assets/code2.png";
import design1 from "../assets/design1.jpg";
import design2 from "../assets/design2.jpg";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";

const projectsList = [
  {
    heading: "Design Portfolio",
    role: "UI/UX",
    desc: "My personal portfolio showcasing my design work with a parallax effect and interactive elements.",
    img: code1,
    tags: ["React", "Tailwind CSS", "Framer Motion", "UI/UX"],
    buttons: [
      { label: "My Journey", url: "#", primary: true },
      { label: "GitHub", url: "https://github.com" },
      { label: "View Demo", url: "https://example.com", primary: true },
    ],
    journeyDesc:
      "This portfolio represents my design evolution, showcasing creative coding and UX strategies through animations and minimalist UI principles.",
  },
  {
    heading: "Code Snippet Vault",
    role: "Frontend Dev",
    desc: "A collection of reusable code snippets stored with tags and categories.",
    img: code2,
    tags: ["React", "TypeScript", "Prisma", "Next.js"],
    buttons: [
      { label: "GitHub", url: "https://github.com" },
      { label: "View Demo", url: "https://example.com", primary: true },
    ],
  },
];

const designsList = [
  {
    heading: "Behance Redesign",
    desc: "A complete UI revamp concept of Behance with better accessibility.",
    img: design1,
    tags: ["Figma", "Product Design"],
    buttons: [{ label: "Behance", url: "https://behance.net", primary: true }],
  },
  {
    heading: "Food App UI",
    desc: "A UI design for a modern food delivery app, focused on speed and minimalism.",
    img: design2,
    tags: ["Figma", "Mobile UI"],
    buttons: [],
  },
];

const photosList = [
  {
    heading: "Street Dreams",
    location: "Delhi, India",
    img: photo1,
    desc: "A cinematic street capture during winter dusk in Delhi.",
    tags: ["Street", "Cinematic", "Sony Alpha"],
    buttons: [
      { label: "View Full", url: "https://unsplash.com", primary: true },
    ],
  },
  {
    heading: "Himalayan Tranquility",
    location: "Manali, India",
    img: photo2,
    desc: "A peaceful shot capturing the essence of a quiet Himalayan morning.",
    tags: ["Nature", "Travel", "DSLR"],
    buttons: [
      { label: "View Full", url: "https://unsplash.com", primary: true },
    ],
  },
];

const Projects = () => {
  const [activeOverlay, setActiveOverlay] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [journeyData, setJourneyData] = useState(null);

  useEffect(() => {
    document.body.style.overflow =
      activeOverlay || journeyData ? "hidden" : "auto";
    if (activeOverlay) {
      setTimeout(() => setShowOverlay(true), 10);
    } else {
      setShowOverlay(false);
    }
    return () => (document.body.style.overflow = "auto");
  }, [activeOverlay, journeyData]);

  const renderOverlayContent = () => {
    let data;
    if (activeOverlay === "Projects") data = projectsList;
    if (activeOverlay === "Design") data = designsList;
    if (activeOverlay === "Photos") data = photosList;

    return (
      <div
        className={`fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center transition-opacity duration-500 ${
          showOverlay ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`relative w-full max-w-6xl h-full overflow-y-auto p-8 border border-white/20 bg-black rounded-xl transform transition-transform duration-500 ${
            showOverlay ? "translate-y-0" : "translate-y-10"
          }`}
        >
          <button
            className="absolute top-4 right-6 text-white text-xl z-50"
            onClick={() => setActiveOverlay(null)}
          >
            ✕
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
            {data.map((item, index) => (
              <div
                key={index}
                className="bg-black border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-[1.015] hover:border-white/30 group"
              >
                <img
                  src={item.img}
                  alt={item.heading}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold relative group inline-block mb-2">
                    {item.heading}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full" />
                  </h3>

                  {item.desc && (
                    <p className="text-sm text-gray-300 leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  )}

                  {item.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs rounded-full bg-white/10 text-white border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {item.buttons && (
                    <div className="flex flex-wrap gap-3 mt-2">
                      {item.buttons.map((btn, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            if (
                              btn.label === "My Journey" &&
                              item.journeyDesc
                            ) {
                              setJourneyData(item);
                            } else {
                              window.open(btn.url, "_blank");
                            }
                          }}
                          className={`px-4 py-2 rounded-md text-sm font-medium border transition-all duration-300 ${
                            btn.primary
                              ? "bg-white text-black hover:bg-opacity-80"
                              : "border-white/20 text-white hover:border-white/40"
                          }`}
                        >
                          {btn.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderJourneyPopup = () => {
    if (!journeyData) return null;

    return (
      <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur">
        <div className="bg-black border border-white/20 text-white rounded-xl max-w-xl p-8 relative z-10 shadow-xl">
          <button
            onClick={() => setJourneyData(null)}
            className="absolute top-4 right-4 text-white text-xl"
          >
            ✕
          </button>
          <h3 className="text-3xl font-bold font-serif mb-4">
            {journeyData.heading}
          </h3>
          <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
            {journeyData.journeyDesc}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section id="work" className="min-h-screen px-6 py-20 text-white">
      <h2 className="text-5xl font-berkshire mb-12 text-center">
        <span className="relative inline-block group">
          Work
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full" />
        </span>
      </h2>

      <div className="grid font-belleza grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {["Projects", "Design", "Photos"].map((title) => (
          <div
            key={title}
            className="bg-black border border-white/10 p-12 rounded-xl h-[60vh] flex items-center justify-center text-center cursor-pointer transition-transform duration-300 relative group hover:border-white/30 hover:shadow-lg"
            onClick={() => setActiveOverlay(title)}
          >
            <h3 className="text-3xl font-semibold relative group">
              {title}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full" />
            </h3>
            <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-white to-transparent z-0 rounded-xl" />
          </div>
        ))}
      </div>

      {activeOverlay && renderOverlayContent()}
      {journeyData && renderJourneyPopup()}
    </section>
  );
};

export default Projects;
