import { useState, useEffect } from "react";
import { Moon, Sun, Linkedin, Github, Menu, X } from "lucide-react";
import modeIcon from "../../../assets/mode-icon.svg";
import "./Header.css";

const navLinks = [
  { label: "About me", href: "#home" },
  { label: "Portfolio", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [dark, setDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(() => {
    if (typeof window === "undefined") return "#home";
    return window.location.hash || "#home";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const updateFromHash = () => setActiveHref(window.location.hash || "#home");
    updateFromHash();
    window.addEventListener("hashchange", updateFromHash);
    return () => window.removeEventListener("hashchange", updateFromHash);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    setActiveHref(href);
    setMobileOpen(false);

    const element = document.querySelector(href);
    const header = document.querySelector(".header");

    if (element && header instanceof HTMLElement) {
      const headerHeight = header.offsetHeight;

      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <a href="#home" className="header-logo">
          <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M5.70711 4.29289C6.09763 4.68342 6.09763 5.31658 5.70711 5.70711L2.41421 9L5.70711 12.2929C6.09763 12.6834 6.09763 13.3166 5.70711 13.7071C5.31658 14.0976 4.68342 14.0976 4.29289 13.7071L0.292893 9.70711C-0.0976311 9.31658 -0.0976311 8.68342 0.292893 8.29289L4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289Z" fill="currentColor"></path>
          <path fillRule="evenodd" clipRule="evenodd" d="M14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289L19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L15.7071 13.7071C15.3166 14.0976 14.6834 14.0976 14.2929 13.7071C13.9024 13.3166 13.9024 12.6834 14.2929 12.2929L17.5858 9L14.2929 5.70711C13.9024 5.31658 13.9024 4.68342 14.2929 4.29289Z" fill="currentColor"></path>
          <path fillRule="evenodd" clipRule="evenodd" d="M12.2425 0.0298499C12.7783 0.163799 13.1041 0.706733 12.9701 1.24253L8.97013 17.2425C8.83619 17.7783 8.29325 18.1041 7.75746 17.9701C7.22166 17.8362 6.8959 17.2933 7.02985 16.7575L11.0299 0.757457C11.1638 0.221662 11.7067 -0.104099 12.2425 0.0298499Z" fill="currentColor"></path>
        </svg>
          Vatsal Vajani
        </a>

        {/* Desktop nav */}
        <nav className={`header-nav ${mobileOpen ? "open" : ""}`}>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`header-nav-link ${
                activeHref === l.href ? "active" : ""
              }`}
              onClick={(e) => handleNavClick(e, l.href)}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right side: socials + theme toggle + mobile menu button */}
        <div className="header-right">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="header-social-link"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="header-social-link"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="header-mobile-toggle"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <button
            onClick={() => setDark(!dark)}
            className="header-theme-toggle"
            aria-label="Toggle theme"
          >
            <img
              src={dark ? modeIcon : modeIcon}
              alt="theme icon"
              className="header-theme-icon"
            />
          </button>

        </div>
      </div>     

      {/* Mobile nav dropdown */}
      <nav
        className={`header-mobile-nav ${
          mobileOpen ? "header-mobile-nav-open" : "header-mobile-nav-closed"
        }`}
      >
        <div className="header-mobile-nav-inner">
          {navLinks.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="header-mobile-link"
              style={{
                transitionDelay: mobileOpen ? `${i * 60}ms` : '0ms',
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? 'translateY(0)' : 'translateY(-8px)',
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;

