import type { MouseEvent } from "react";
import "./Footer.css";

const navLinks = [
  { label: "About me", href: "#home" },
  { label: "Portfolio", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const handleNavClick = (
  e: MouseEvent<HTMLAnchorElement>,
  href: string
) => {
  e.preventDefault();

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

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <a href="/" className="footer-logo">
        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M5.70711 4.29289C6.09763 4.68342 6.09763 5.31658 5.70711 5.70711L2.41421 9L5.70711 12.2929C6.09763 12.6834 6.09763 13.3166 5.70711 13.7071C5.31658 14.0976 4.68342 14.0976 4.29289 13.7071L0.292893 9.70711C-0.0976311 9.31658 -0.0976311 8.68342 0.292893 8.29289L4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289Z" fill="currentColor"></path>
          <path fillRule="evenodd" clipRule="evenodd" d="M14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289L19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L15.7071 13.7071C15.3166 14.0976 14.6834 14.0976 14.2929 13.7071C13.9024 13.3166 13.9024 12.6834 14.2929 12.2929L17.5858 9L14.2929 5.70711C13.9024 5.31658 13.9024 4.68342 14.2929 4.29289Z" fill="currentColor"></path>
          <path fillRule="evenodd" clipRule="evenodd" d="M12.2425 0.0298499C12.7783 0.163799 13.1041 0.706733 12.9701 1.24253L8.97013 17.2425C8.83619 17.7783 8.29325 18.1041 7.75746 17.9701C7.22166 17.8362 6.8959 17.2933 7.02985 16.7575L11.0299 0.757457C11.1638 0.221662 11.7067 -0.104099 12.2425 0.0298499Z" fill="currentColor"></path>
        </svg>
        Vatsal Vajani
      </a>

      <nav className="footer-nav">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="footer-nav-link"
            onClick={(e) => handleNavClick(e, link.href)}
          >
            {link.label}
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

