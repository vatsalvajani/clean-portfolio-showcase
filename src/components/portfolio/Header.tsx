import { useState, useEffect } from "react";
import { Moon, Sun, Linkedin, Github, Menu, X } from "lucide-react";

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

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary dark:bg-card dark:border-b dark:border-border">
      <div className="container flex items-center justify-between h-14">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 text-primary-foreground font-heading font-bold text-lg">
          <span className="flex gap-[3px]">
            <span className="w-[3px] h-4 bg-primary-foreground rounded-full inline-block opacity-60" />
            <span className="w-[3px] h-5 bg-primary-foreground rounded-full inline-block opacity-80" />
            <span className="w-[3px] h-6 bg-primary-foreground rounded-full inline-block" />
            <span className="w-[3px] h-5 bg-primary-foreground rounded-full inline-block opacity-80" />
            <span className="w-[3px] h-4 bg-primary-foreground rounded-full inline-block opacity-60" />
          </span>
          vatsal.design
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right side: socials + theme toggle */}
        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>

          <button
            onClick={() => setDark(!dark)}
            className="text-primary-foreground/80 hover:text-primary-foreground transition-colors ml-1"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
