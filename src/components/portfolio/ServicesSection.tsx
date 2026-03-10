import { Monitor, Paintbrush, Code, Smartphone } from "lucide-react";

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
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-section-alt">
    <div className="container">
      <div className="text-center mb-12">
        <p className="text-sm uppercase tracking-widest text-primary font-medium mb-2">Services</p>
        <h2 className="heading-md">What Do I Offer</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div key={s.title} className="bg-background rounded-xl p-6 border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <s.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="text-lg font-semibold font-heading mb-2">{s.title}</h3>
            <p className="text-sm text-body-light leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
