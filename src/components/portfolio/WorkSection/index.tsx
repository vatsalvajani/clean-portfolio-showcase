import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import blakImg from "../../../assets/work-blak.webp";
import dhillImg from "../../../assets/work-dhill.webp";
import herogoImg from "../../../assets/work-herogo.webp";
import massaImg from "../../../assets/work-massa.webp";
import recoImg from "../../../assets/work-reco.webp";
import viktorImg from "../../../assets/work-vva.webp";
import reviewImg from "../../../assets/work-reviewprep.webp";
import iwiImg from "../../../assets/work-iwi.webp";
import "../common.css"
import "./WorkSection.css";

const projects = [
  {
    title: "Dhill Finance",
    image: dhillImg,
    desc: "Developed responsive WordPress Elementor website, optimizing layouts, performance, and user experience across desktop and mobile devices.",
    type: "Financial Service Website",
    features: "WordPress Elementor CMS, Reusable Components, mobile optimization",
    tools: "WordPress, Elementor",
    link: "https://dhillfinancial.com/",
  },
  {
    title: "Blak",
    image: blakImg,
    desc: "Contributed to frontend development, creating responsive, visually appealing layouts and structuring case studies for desktop and mobile.",
    type: "Creative / Agency Portfolio Website",
    features: "Case study structure, mobile optimization, clean UI components",
    tools: "NextJS, HTML, CSS",
    link: "https://blakbad.com/",
  },
  {
    title: "HeroGo",
    image: herogoImg,
    desc: "Built responsive Tailwind CSS website, ensuring pixel-perfect design, performance optimization, and scalable code for long-term maintainability.",
    type: "Corporate Business Website",
    features: "Tailwind CSS UI, Responsive layout, Animation transitions",
    tools: "React JS, Tailwind CSS",
    link: "https://www.herogo.ae/",
  },
  {
    title: "Massa Dubai",
    image: massaImg,
    desc: "Developed responsive website with clean HTML/CSS, handling client communication and ensuring performance, structure, and user experience optimization.",
    type: "Corporate Business Website",
    features: "Client-driven customization, Clean UI structure, mobile optimization",
    tools: "HTML, CSS, JavaScript",
    link: "http://massa.us.com/",
  },
  {
    title: "Reco Company LTD",
    image: recoImg,
    desc: "Built frontend and admin panel using HTML and PHP, focusing on responsive UI, usability, and efficient content management.",
    type: "B2B Business Website (Export/Trading)",
    features: "Dynamic content management, Admin panel (CMS), Responsive UI",
    tools: "HTML, CSS, Laraqvel",
    link: "https://www.reco-export.com/",
  },
  {
    title: "Viktor Vrecko Architecture",
    image: viktorImg,
    desc: "Designed and developed responsive bilingual website with smooth animations, focusing on clean design, performance, and brand alignment.",
    type: "Creative Architecture Site",
    features: "Bilingual support, smooth animations, responsive layout, WordPress integration",
    tools: "WordPress, CSS, JavaScript",
    link: "https://demo.viktorvrecko.com/",
  },
  {
    title: "Israel Weapon Industry",
    image: iwiImg,
    desc: "Developed multilingual website with RTL support, ensuring responsive design, cross-browser compatibility, and consistent user experience across languages.",
    type: "Creative Architecture Site",
    features: "RTL support, Multilingual UI",
    tools: "WordPress, CSS, JavaScript",
    link: "https://br.iwi.net/",
  },
  {
    title: "Review N Prep",
    image: reviewImg,
    desc: "Designed modern, responsive homepage focused on usability, accessibility, and engaging UI for online study material platform.",
    type: "Creative Architecture Site",
    features: "Modern UI layout, Responsive design, User-friendly interface",
    tools: "WordPress, CSS, JavaScript",
    link: "https://reviewnprep.io/",
  }
];

const WorkSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1));

  const project = projects[current];

  return (
    <section id="work" className="work-section common-bg common-section-spacing">
      <div className="container">
        <div className="common-section-header">
          <p className="section-sub-title">Portfolio</p>
          <h2 className="section-title">My Work</h2>
        </div>

        <div className="work-inner">
          <div className="work-card">
            <div className="work-grid" key={current}>
              <div className="work-preview">
                <img src={project.image} alt={project.title} className="work-category-image" />
              </div>

              <div className="work-details">
                <div className="work-details-wrapper">
                  <div className="work-meta-header">
                    <h3 className="work-project-title">{project.title}</h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-link-button"
                      aria-label={`Visit ${project.title}`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>                  
                  <p className="work-description">{project.desc}</p>
                </div>

                <div className="work-meta">
                  <h4 className="work-info-title">Project Info</h4>
                  <div className="work-meta-row">
                    <span className="work-meta-label">Project Type:</span>
                    <span className="work-meta-value">{project.type}</span>
                  </div>
                  <div className="work-meta-row">
                    <span className="work-meta-label">Features Implemented:</span>
                    <span className="work-meta-value">{project.features}</span>
                  </div>
                  <div className="work-meta-row-last">
                    <span className="work-meta-label">Technologies:</span>
                    <span className="work-meta-value">{project.tools}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="work-controls">
            <button onClick={prev} className="work-arrow-button" aria-label="Previous">
              <ChevronLeft size={20} />
            </button>
            {/* <div className="work-dots">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`work-dot ${i === current ? "work-dot-active" : ""}`}
                  aria-label={`Go to project ${i + 1}`}
                />
              ))}
            </div> */}
            <button onClick={next} className="work-arrow-button" aria-label="Next">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;

