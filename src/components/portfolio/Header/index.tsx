import { useState, useEffect } from "react";
import { Moon, Sun, Linkedin, Github, Menu, X } from "lucide-react";
import modeIcon from "../../../assets/mode-icon.svg";
import "./Header.css";

const navLinks = [
  { label: "About me", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Portfolio", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [dark, setDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <a href="#home" className="header-logo">
          Vatsal Vajani
        </a>

        {/* Desktop nav */}
        <nav className="header-nav">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="header-nav-link"
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

