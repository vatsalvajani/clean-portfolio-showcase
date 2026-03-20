import { Monitor, Paintbrush, Code, Smartphone, Gauge, Globe } from "lucide-react";
import "../common.css"
import "./ServicesSection.css";

const services = [
  {
    icon: Monitor,
    title: "Web Design",
    desc: "Crafting visually engaging, user-first web experiences with clean layouts and modern aesthetics.",
  },
  {
    icon: Code,
    title: "Frontend Development",
    desc: "Building high-performance websites using React, Vue, and modern frontend frameworks.",
  },
  {
    icon: Paintbrush,
    title: "UI/UX Design",
    desc: "Translating business objectives into functional, intuitive digital solutions using Figma & Photoshop.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    desc: "Ensuring pixel-perfect, responsive layouts that look great across all devices and screen sizes.",
  },
  {
    icon: Globe,
    title: "WordPress Development",
    desc: "Building custom WordPress themes with Elementor, WPBakery, and full custom code integration.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    desc: "Improving speed and performance of web applications with optimized code, caching, and best practices.",
  },
];

const ServicesSection = () => (
  <section id="services" className="services-section common-section-spacing">
    <div className="container">
      <div className="common-section-header">
        <p className="section-sub-title">Services</p>
        <h2 className="section-title">What Do I Offer</h2>
      </div>

      <div className="services-grid">
        {services.map((s) => (
          <div key={s.title} className="service-card group">
            <div className="service-icon-wrapper">
              <s.icon size={24} className="service-icon" />
            </div>
            <h3 className="service-title">{s.title}</h3>
            <p className="service-description">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;

