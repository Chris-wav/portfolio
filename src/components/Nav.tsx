import { useState, useEffect } from "react";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-6 md:px-16 py-6 flex items-center justify-between ${
        isScrolled
          ? "bg-[#f9f7f2]/80 backdrop-blur-md py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="flex-1">
        <a href="#">
          <span className="font-serif text-xl text-[#3e3a35] tracking-tight hover:opacity-70 cursor-pointer transition-opacity">
            christos.studio
          </span>
        </a>
      </div>

      <div className="hidden md:flex flex-1 justify-center">
        <ul className="flex gap-10 text-[#6b665f] text-sm font-light tracking-wide">
          <li>
            <a
              href="#work"
              className="hover:text-[#3e3a35] transition-colors cursor-pointer"
            >
              work
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-[#3e3a35] transition-colors cursor-pointer"
            >
              about
            </a>
          </li>
          <li>
            <a
              href="#process"
              className="hover:text-[#3e3a35] transition-colors cursor-pointer"
            >
              process
            </a>
          </li>
        </ul>
      </div>

      <div className="flex-1 flex justify-end">
        <a
          href="#contact"
          className="px-6 py-2 cursor-pointer border border-[#3e3a35]/30 text-[#3e3a35] text-sm rounded-full hover:bg-[#3e3a35] hover:text-[#f9f7f2] transition-all"
        >
          say hello →
        </a>
      </div>
    </nav>
  );
};

export default Nav;
