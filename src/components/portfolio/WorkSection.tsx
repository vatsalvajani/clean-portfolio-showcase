import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import projectHerogo from "@/assets/project-herogo.jpg";
import projectDhill from "@/assets/project-dhill.jpg";
import projectNkg from "@/assets/project-nkg.jpg";
import projectBlak from "@/assets/project-blak.jpg";
import projectMassa from "@/assets/project-massa.jpg";

const projects = [
  {
    title: "HeroGo",
    desc: "Built a full website using Tailwind CSS with a strong focus on clean, responsive design and performance optimization for a sustainable grocery platform in the UAE.",
    image: projectHerogo,
    tags: ["Tailwind CSS", "Responsive", "Performance"],
  },
  {
    title: "Dhill Finance",
    desc: "Developed and customized a responsive website using WordPress Elementor, ensuring a smooth user experience across all devices.",
    image: projectDhill,
    tags: ["WordPress", "Elementor", "Responsive"],
  },
  {
    title: "NKG Infra",
    desc: "Developed the website from scratch, converting PSD designs into a fully functional WordPress site with high design accuracy.",
    image: projectNkg,
    tags: ["WordPress", "PSD to Web", "Responsive"],
  },
  {
    title: "Blak",
    desc: "Contributed to frontend development with a focus on delivering a seamless and visually appealing user experience with responsive case study sections.",
    image: projectBlak,
    tags: ["Frontend", "Case Study", "Responsive"],
  },
  {
    title: "Massa Dubai",
    desc: "Developed a responsive website using HTML and CSS, ensuring a visually appealing design across all devices with clean code structure.",
    image: projectMassa,
    tags: ["HTML", "CSS", "Responsive"],
  },
];

const WorkSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1));

  const project = projects[current];

  return (
    <section id="work" className="section-padding bg-section-alt">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-2">Portfolio</p>
          <h2 className="heading-md">My Work</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-background rounded-2xl overflow-hidden border border-border shadow-sm">
            <div className="aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-3">
                <h3 className="heading-sm">{project.title}</h3>
                <ExternalLink size={18} className="text-primary" />
              </div>
              <p className="text-body-light text-sm leading-relaxed mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-accent text-accent-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-body-light hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors" aria-label="Previous">
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-border"}`}
                  aria-label={`Go to project ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-body-light hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors" aria-label="Next">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
