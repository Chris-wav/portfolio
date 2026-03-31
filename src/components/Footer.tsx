const Footer = () => {
  return (
    <footer
      className="relative w-full max-w-7xl mx-auto px-6 md:px-16 py-24"
      id="footer"
    >
      <div className="bg-[#3e3a35] rounded-[3rem] p-10 md:p-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 shadow-2xl">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-serif text-[#f9f7f2] leading-tight">
            Let's make something <br />
            <span className="italic font-light opacity-80">
              worth remembering.
            </span>
          </h2>
          <p className="mt-6 text-[#f9f7f2]/60 font-light tracking-wide">
            Open to freelance, full-time, and everything in between.
          </p>
        </div>

        <a
          href="#contact"
          className="bg-[#f9f7f2] cursor-pointer text-[#3e3a35] px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform flex items-center gap-2"
        >
          start a conversation <span>→</span>
        </a>
      </div>

      <div className="mt-20 pt-10 border-t border-[#3e3a35]/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <a href="#">
          <span className="font-serif text-xl text-[#3e3a35] tracking-tight hover:opacity-70 cursor-pointer transition-opacity">
            christos.studio
          </span>
        </a>

        <div className="flex gap-8 text-sm text-[#3e3a35]/60 font-light tracking-widest">
          <a
            href="https://github.com/Chris-wav"
            target="_blank"
            className="hover:text-[#3e3a35] transition-colors"
          >
            github
          </a>
          <a
            href="https://www.linkedin.com/in/christos-kalatzis-1baa88381/"
            target="_blank"
            className="hover:text-[#3e3a35] transition-colors"
          >
            linkedin
          </a>
        </div>

        <span className="text-xs text-[#3e3a35]/40 font-light">© 2026</span>
      </div>
    </footer>
  );
};

export default Footer;
