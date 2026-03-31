
const About = () => {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 md:px-16 py-32 border-t border-[#3e3a35]/5"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-5xl md:text-7xl font-serif text-[#3e3a35] leading-[1.1] tracking-tight">
            Making <br />
            <span className="italic font-light text-[#8fae8b]">space</span>{" "}
            <br />
            for   refined <br />
            <span className="italic font-light text-[#e5b299]">solutions</span>
          </h2>

          <div className="mt-10 flex items-center gap-3">
            <div className="w-12 h-[1px] bg-[#3e3a35]/20"></div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#3e3a35]/50 font-medium">
              Currently freelancing
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-8 text-lg md:text-xl text-[#6b665f] font-light leading-relaxed">
          <p>
            My journey started at <strong>Panteion University</strong>, where I
            developed an analytical mindset through Economic & Regional
            Development. This background allows me to approach every digital
            product not just as code, but as a strategic solution.
          </p>

          <p>
            Today, I bridge the gap between design and scalable technology. I am
            currently collaborating with a{" "}
            <strong>Senior Freelance Developer</strong>, focusing on WordPress &
            WooCommerce ecosystems, custom PHP logic, and high-converting
            e-commerce interfaces.
          </p>

          <p className="text-base md:text-lg border-l-2 border-[#8fae8b]/30 pl-6 italic">
            "I don't just build websites; I build digital tools that are rooted
            in logic and polished with aesthetic harmony."
          </p>

          <div className="grid grid-cols-2 gap-8 mt-4">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#3e3a35] font-bold mb-2">
                Focus
              </h4>
              <ul className="text-sm space-y-1 opacity-70">
                <li>• React & Next.js</li>
                <li>• PHP & WooCommerce</li>
                <li>• UI/UX Strategy</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#3e3a35] font-bold mb-2">
                Location
              </h4>
              <p className="text-sm opacity-70">
                Athens, Greece
                <br />
                Working Remotely
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
