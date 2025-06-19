const experiences = [
  {
    time: "Oct 2023 – Present",
    location: "New Delhi, Delhi, India",
    organization: "OnzOff",
    role: "Co-Founder",
    type: "Full-time",
    description:
      "Leading product design and development strategies for innovative digital solutions.",
    tags: ["Product Design", "UI/UX", "Leadership"],
  },
  {
    time: "Oct 2023 – Present",
    location: "Greater Delhi Area",
    organization: "The Ace: OTC",
    role: "President",
    type: "Full-time",
    description: "Managing organization operations and strategic initiatives.",
    tags: ["Leadership", "Operations", "Strategy"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen px-6 py-20 text-white flex flex-col items-center"
    >
      <h2 className="text-5xl font-berkshire mb-12 relative group">
        Experience
        <span className="absolute left-1/2 -bottom-1 transform -translate-x-1/2 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full" />
      </h2>

      <div className="relative w-full max-w-5xl">
        {experiences.map((exp, index) => (
          <div key={index} className="flex items-start mb-16">
            <div className="w-1/3 relative flex flex-col items-end pr-8 text-sm text-gray-400">
              <div className="absolute top-1 left-[calc(100%-8px)] w-4 h-4 rounded-full border-4 border-white bg-black z-10" />
              <div className="absolute top-0 left-[calc(100%-1px)] w-px h-full bg-gray-700 z-0" />
              <div className="group relative cursor-default">
                <p className="group-hover:text-white transition duration-300 underline-animation">
                  {exp.time}
                </p>
                <p className="text-xs mt-1">{exp.location}</p>
              </div>
            </div>

            <div className="w-2/3 pl-8 group hover:bg-white/5 rounded-lg transition duration-300 p-4">
              <div className="flex justify-between items-center flex-wrap gap-2">
                <h3 className="text-xl font-semibold relative group inline-block">
                  {exp.role}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full" />
                </h3>
                <span className="text-xs bg-gray-800 px-3 py-1 rounded-full">
                  {exp.type}
                </span>
              </div>

              <p className="text-gray-400 mt-1 font-medium">
                {exp.organization}
              </p>
              <p className="text-gray-300 mt-2 leading-relaxed text-sm md:text-base">
                {exp.description}
              </p>

              <div className="flex flex-wrap mt-3 gap-2">
                {exp.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-700 px-2 py-1 rounded-full text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
