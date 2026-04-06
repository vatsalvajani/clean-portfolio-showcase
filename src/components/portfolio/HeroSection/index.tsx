import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import htmlLogo from "../../../assets/html-logo.svg";
import cssLogo from "../../../assets/css-logo.svg";
import jsLogo from "../../../assets/javascript-logo.svg";
import bootstrapLogo from "../../../assets/bootstrap-logo.svg";
import wordpressLogo from "../../../assets/wordpress-logo.svg";
import reactLogo from "../../../assets/react-js-logo.svg";
import profileImage from "../../../assets/new-profile-image-1.png";
import "./HeroSection.css";

const tools = [
  { name: "HTML", icon: htmlLogo },
  { name: "CSS", icon: cssLogo },
  { name: "JS", icon: jsLogo },
  { name: "Bootstrap", icon: bootstrapLogo },
  { name: "Wordpress", icon: wordpressLogo },
  { name: "React", icon: reactLogo },
];

const HeroSection = () => (
  <section id="home" className="hero-section">
    <div className="container">
      <div className="hero-layout">
        <div className="hero-content">
          <p className="hero-greeting">Hi, I'm Vatsal Vajani</p>
          <h1 className="hero-heading">
            <span className="hero-heading-line hero-heading-line-main">Senior</span>
            <span className="hero-heading-line hero-heading-line-gradient">Frontend Developer</span>
          </h1>
          <p className="hero-description">
            I design and develop high-performance, responsive websites using modern frontend technologies, focusing on usability, scalability, and seamless user experiences.
          </p>
          <div className="hero-actions">
            <Button className="hero-primary-button" asChild>
              <a
                href="/Vatsal-Vajani-Senior-Web-Designer-Resume.pdf"
                download="Vatsal-Vajani-Senior-Web-Designer-Resume.pdf"
              >
                Download CV <Download size={24} />
              </a>
            </Button>
            <Button variant="outline" className="hero-secondary-button" asChild>
              <a href="#contact">
                <span className="hero-secondary-btn-span">
                  Hire me <ArrowRight size={24} />
                </span>
              </a>
            </Button>
          </div>
          <div className="hero-experience">
            <p className="hero-experience-text">
              7+ years with professional design software
            </p>
            <div className="hero-tools">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="hero-tool-card"
                >
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="hero-tool-icon"
                  />
                </div>
              ))}
              <span className="tools-more-text">...and more</span>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <span className="profile-img-wrap">
            <img src={profileImage} className="hero-image" />
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;

