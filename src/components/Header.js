import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
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
    <div
      className="fixed top-0 left-0 right-0 z-50 transition-transform duration-300 bg-zinc-900 h-16"
    >
      <div
        className="flex justify-between items-center p-2"
      >
        <nav className="flex gap-8">
          {socials.map((social, index) => (
            <a href={social.url} target="_blank" rel="noreferrer" key={index}>
              <FontAwesomeIcon icon={social.icon} size="2x" color="#fff"/>
            </a>
          ))}
        </nav>
        <nav className="flex gap-8">
          <a href="#about" onClick={handleClick("about")}>
            Om mig
          </a>
          <a href="#projects" onClick={handleClick("projects")}>
            Portfolio
          </a>
          <a href="#timeline" onClick={handleClick("timeline")}>
            Tidslinje
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
