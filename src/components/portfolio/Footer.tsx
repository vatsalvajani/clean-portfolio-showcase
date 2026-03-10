import { Linkedin, Github } from "lucide-react";

const Footer = () => (
  <footer className="py-8 px-5 border-t border-border">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-body-light">
        © {new Date().getFullYear()} Vatsal Vajani. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-body-light hover:text-primary transition-colors" aria-label="LinkedIn">
          <Linkedin size={18} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-body-light hover:text-primary transition-colors" aria-label="GitHub">
          <Github size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
