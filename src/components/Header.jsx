import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollingUp(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed w-full z-50 transition-transform duration-300 backdrop-blur-md bg-black/20 ${
        scrollingUp ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-white text-2xl font-serif">
          <span className="font-bold">Anshuman</span>Mishra
        </div>

        <nav className="hidden md:flex gap-6 text-white">
          {["Home", "About", "Experience", "Work", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group"
            >
              <span className="text-white">{item}</span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <div className="md:hidden text-white">
          {menuOpen ? (
            <X
              size={28}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer"
            />
          ) : (
            <Menu
              size={28}
              onClick={() => setMenuOpen(true)}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-full w-full bg-black/70 backdrop-blur-lg py-6">
          <div className="flex flex-col items-center space-y-4 text-white text-lg">
            {["Home", "About", "Experience", "Projects", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative group"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{item}</span>
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
