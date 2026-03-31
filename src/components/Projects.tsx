const projects = [
  {
    title: "Gaming",
    name: "Game academy",
    category: "FULL-STACK • 2026",
    desc: "A duolingo-style app for gamers.Still in progress",
    tags: ["Supabase", "React", "Node.js", "AI Api integration", "Tailwind"],
    bgColor: "bg-[#aec0a9]",
    size: "md:col-span-2",
    icon: "🌿",
  },
  {
    title: "API Integration",
    name: "Flight-tracker",
    category: "FULLSTACK • 2025",
    desc: "Minimal flight tracker app with filters and real time ui updates.",
    tags: ["React-query", "React", "Node.js", "Tailwind"],
    bgColor: "bg-[#d4a383]",
    size: "md:col-span-1",
    icon: "🍂",
  },
  {
    title: "Panarcadian design",
    name: "E-commerce",
    category: "WEB • 2026",
    desc: "A responsive web app for a fictional organization.Using laravel for form validation.",
    tags: ["Laravel", "React", "Tailwind"],
    bgColor: "bg-[#d199ab]", // Dusty Rose
    size: "md:col-span-1",
    icon: "🌸",
  },
  {
    title: "A simple full-stack to-do-app",
    name: "To do ap",
    category: "TOOL • 2025",
    desc: "Organise your daily tasks",
    tags: ["React", "Node.js"],
    bgColor: "bg-[#bcaf9c]",
    size: "md:col-span-1",
    icon: "☁️",
  },
];

const Projects = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-16 py-24" id="projects">
      {/* Header Section */}
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-4xl font-serif text-[#3e3a35]">selected work</h2>
        <a
          href="https://github.com/Chris-wav"
          className="text-sm text-[#3e3a35]/60 hover:text-[#3e3a35] transition-colors border-b border-[#3e3a35]/20 pb-1"
        >
          all projects →
        </a>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className={`${project.size} group cursor-pointer`}>
            {/* Project Card Image/Cover */}
            <div
              className={`${project.bgColor} relative h-64 md:h-80 rounded-[2rem] p-8 overflow-hidden transition-transform duration-500 group-hover:scale-[0.98]`}
            >
              <div className="flex flex-col h-full justify-center items-center">
                <span className="text-white/90 text-4xl md:text-5xl font-serif italic tracking-wide">
                  {project.title}
                </span>
                <span className="absolute bottom-6 right-8 text-2xl drop-shadow-sm">
                  {project.icon}
                </span>
              </div>
            </div>

            {/* Project Info */}
            <div className="mt-6 px-2">
              <span className="text-[10px] tracking-[0.2em] text-[#3e3a35]/40 uppercase font-medium">
                {project.category}
              </span>
              <h3 className="text-2xl font-serif text-[#3e3a35] mt-2 mb-3">
                {project.name}
              </h3>
              <p className="text-[#6b665f] font-light leading-relaxed mb-6 max-w-md">
                {project.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#3e3a35]/5 rounded-full text-[11px] text-[#3e3a35]/60 border border-[#3e3a35]/5"
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

export default Projects;
