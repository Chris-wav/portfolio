import React from "react";

const Hero = () => {
  const techStack = [
    { name: "React / Next.js", color: "bg-[#d1d9cf]/40" },
    { name: "TypeScript", color: "bg-[#e5b299]/30" },
    { name: "Node & Express", color: "bg-[#d4a5a5]/30" },
    { name: "Tailwind CSS", color: "bg-gray-200/50" },
    { name: "PostgreSQL", color: "bg-[#d1d9cf]/40" },
    { name: "Supabase", color: "bg-[#e5b299]/20" },
    { name: "Figma", color: "bg-[#d4a5a5]/20" },
    { name: "AI / LLM APIs", color: "bg-gray-200/40" },
    { name: "Motion", color: "bg-[#d1d9cf]/30" },
    { name: "RESTful APIs", color: "bg-[#e5b299]/20" },
  ];

  return (
    <section
      className="relative w-full max-w-7xl mx-auto px-6 md:px-16 mt-24 mb-20"
      id="hero
    "
    >
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
        <div className="flex-1 z-10">
          <div className="flex items-center gap-2 mb-8">
            <span className="w-2 h-2 bg-[#8fae8b] rounded-full animate-pulse"></span>
            <span className="text-[#8fae8b] text-[11px] font-medium tracking-[0.1em] uppercase">
              Available for projects
            </span>
          </div>

          {/* Title */}
          <h1 className="text-7xl md:text-[100px] font-serif text-[#3e3a35] leading-[0.95] tracking-tight">
            Crafting <br />
            <span className="italic font-light text-[#8fae8b]">
              Digital
            </span>{" "}
            <br />
            Harmony.
          </h1>

          {/* Bio */}
          <p className="mt-10 text-lg md:text-xl text-[#6b665f] max-w-md leading-relaxed font-light">
            I build interfaces that breathe — calm, considered, and rooted in
            purpose. Full-stack dev with a love for thoughtful design.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex items-center gap-8">
            <a
              href="#projects"
              className="px-10  py-4 bg-[#3e3a35] text-[#f9f7f2] rounded-full hover:bg-[#2a2723] transition-all duration-300 shadow-xl shadow-black/5 font-medium"
            >
              view my work
            </a>
            <a
              href="/ChristosKalatzis-CV.pdf"
              download="ChristosKalatzis-CV.pdf"
              className="px-8 py-3 border border-[#3e3a35] text-[#3e3a35] rounded-full hover:bg-[#3e3a35] hover:text-[#f9f7f2] transition-all duration-300"
            >
              Download CV
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>
        </div>

        <div className="relative flex flex-col items-center lg:mr-10 mt-55 mr-10">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-[#c9a38d] via-[#d4a5a5] to-[#b38a8a] flex items-center justify-center shadow-2xl shadow-[#e5b299]/30 border-4 border-white/20">
            <span className="text-7xl md:text-8xl font-serif text-white/90">
              <img className="rounded-full" src="icon.jpg" alt="" />
            </span>
          </div>
          <div className="mt-8 px-5 py-1.5 bg-[#d1d9cf]/40 border border-[#d1d9cf]/60 rounded-full text-[#5b6a55] text-xs font-medium backdrop-blur-md shadow-sm">
            ✓ open to work
          </div>
        </div>
      </div>

      {/* ΚΑΤΩ ΜΕΡΟΣ: Tech Stack Section */}
      <div className="mt-32 w-full">
        {/* Divider line με κείμενο */}
        <div className="relative flex items-center justify-center mb-12">
          <div className="absolute w-full h-[1px] bg-[#3e3a35]/10"></div>
          <span className="relative bg-[#f9f7f2] px-8 text-[10px] tracking-[0.3em] uppercase text-gray-400 italic font-serif">
            what i work with
          </span>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className={`${tech.color} px-5 py-2.5 rounded-2xl text-[#3e3a35]/80 text-sm font-medium border border-white/60 backdrop-blur-sm hover:border-[#3e3a35]/20 transition-all cursor-default shadow-sm`}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
