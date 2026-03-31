const Process = () => {
  const education = [
    {
      year: "2024",
      title: "Meta Front-End Developer Professional Certificate",
      org: "Coursera / Meta",
      desc: "Specialized in React, Javascript, and UX/UI design principles for modern web applications.",
    },
    {
      year: "2023 — 2024",
      title: "Coding Factory",
      org: "Athens University of Economics and Business",
      desc: "Intensive professional training in Java, Full-stack development, and Software Engineering.",
    },
    {
      year: "2023",
      title: "CS50x: Introduction to Computer Science",
      org: "Harvard University",
      desc: "Deep dive into the fundamentals of programming, algorithms, and data structures.",
    },
    {
      year: "Graduate",
      title: "BSc in Economic & Regional Development",
      org: "Panteion University",
      desc: "Analytical background in economics and data, providing a unique perspective on problem-solving and systems.",
    },
  ];

  return (
    <section
      id="process"
      className="max-w-7xl mx-auto px-6 md:px-16 py-32 bg-[#f9f7f2]"
    >
      <div className="mb-20">
        <h2 className="text-4xl font-serif text-[#3e3a35]">
          academic foundation
        </h2>
        <p className="text-[#3e3a35]/40 italic font-serif mt-2 tracking-wide text-sm uppercase">
          The path from Economics to Engineering
        </p>
      </div>

      <div className="relative space-y-12">
        {/* Η κάθετη γραμμή (timeline) */}
        <div className="absolute left-0 md:left-[20%] top-0 bottom-0 w-[1px] bg-[#3e3a35]/10 hidden md:block"></div>

        {education.map((item, index) => (
          <div
            key={index}
            className="relative grid grid-cols-1 md:grid-cols-5 gap-4 group"
          >
            {/* Year Column */}
            <div className="md:col-span-1">
              <span className="text-xs font-medium text-[#8fae8b] tracking-[0.2em] uppercase">
                {item.year}
              </span>
            </div>

            {/* Dot on Timeline (only for desktop) */}
            <div className="hidden md:block absolute left-[20%] -translate-x-1/2 top-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#8fae8b] border-4 border-[#f9f7f2] group-hover:scale-125 transition-transform"></div>
            </div>

            {/* Content Column */}
            <div className="md:col-span-4 md:pl-16">
              <h3 className="text-2xl font-serif text-[#3e3a35] group-hover:text-[#8fae8b] transition-colors">
                {item.title}
              </h3>
              <p className="text-[#3e3a35]/60 text-sm font-medium mt-1 mb-3 italic tracking-wide">
                {item.org}
              </p>
              <p className="text-[#6b665f] font-light max-w-2xl leading-relaxed text-base">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
