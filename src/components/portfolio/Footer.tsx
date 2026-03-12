const navLinks = ["About", "Resume", "Services", "Portfolio", "Contact"];

const Footer = () => (
  <footer className="bg-[hsl(230,25%,12%)] py-10 px-5">
    <div className="container flex flex-col items-center gap-6">
      {/* Logo / Name */}
      <p className="text-lg font-semibold text-white tracking-wide">
        <span className="text-primary font-bold">///</span> vatsal.design
      </p>

      {/* Nav Links */}
      <nav className="flex flex-wrap items-center justify-center gap-6">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-sm text-gray-400 hover:text-primary transition-colors"
          >
            {link}
          </a>
        ))}
      </nav>

      {/* Copyright */}
      <p className="text-xs text-gray-500">
        © {new Date().getFullYear()} All Rights Reserved by{" "}
        <a href="#" className="text-primary hover:underline">Vatsal Vajani</a>
      </p>
    </div>
  </footer>
);

export default Footer;
