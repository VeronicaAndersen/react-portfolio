import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto:v.e.andersen@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/VeronicaAndersen",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/andersenveronica/",
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setMenuOpen(false); // Stäng menyn efter klick
    }
  };

  const prevScrollPos = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-zinc-900 h-16">
      <div className="max-w-5xl mx-auto flex justify-between items-center h-full px-6">

        <nav className="flex gap-6">
          {socials.map((social, index) => (
            <a href={social.url} target="_blank" rel="noreferrer" key={index}>
              <FontAwesomeIcon icon={social.icon} size="lg" color="#fff" />
            </a>
          ))}
        </nav>

        <nav className="hidden md:flex gap-8 text-white">
          <a href="#about" onClick={handleClick("about")}>Om mig</a>
          <a href="#projects" onClick={handleClick("projects")}>Portfolio</a>
          <a href="#timeline" onClick={handleClick("timeline")}>Tidslinje</a>
        </nav>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-zinc-800 text-white px-6 py-4 space-y-4">
          <a href="#about" onClick={handleClick("about")} className="block">Om mig</a>
          <a href="#projects" onClick={handleClick("projects")} className="block">Portfolio</a>
          <a href="#timeline" onClick={handleClick("timeline")} className="block">Tidslinje</a>
        </div>
      )}
    </div>
  );
};

export default Header;
