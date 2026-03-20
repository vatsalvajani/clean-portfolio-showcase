import "./Footer.css";

const navLinks = ["About", "Resume", "Services", "Portfolio", "Contact"];

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p className="footer-logo">
        Vatsal Vajani
      </p>

      <nav className="footer-nav">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="footer-nav-link"
          >
            {link}
          </a>
        ))}
      </nav>

      {/* <p className="footer-copy">
        © {new Date().getFullYear()} All Rights Reserved by{" "}
        <a href="#" className="footer-copy-link">Vatsal Vajani</a>
      </p> */}
    </div>
  </footer>
);

export default Footer;

