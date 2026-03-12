import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "HeroGo",
    category: "UI/UX",
    desc: "Built a full website using Tailwind CSS with a strong focus on clean, responsive design and performance optimization for a sustainable grocery platform in the UAE.",
    client: "HeroGo UAE",
    completion: "3 months",
    tools: "Tailwind CSS, HTML, JavaScript",
    link: "#",
  },
  {
    title: "Dhill Finance",
    category: "WordPress",
    desc: "Developed and customized a responsive website using WordPress Elementor, ensuring a smooth user experience across all devices.",
    client: "Dhill Finance",
    completion: "2 months",
    tools: "WordPress, Elementor, CSS",
    link: "#",
  },
  {
    title: "NKG Infra",
    category: "Web Development",
    desc: "Developed the website from scratch, converting PSD designs into a fully functional WordPress site with high design accuracy.",
    client: "NKG Infra",
    completion: "4 months",
    tools: "WordPress, Photoshop, CSS",
    link: "#",
  },
  {
    title: "Blak",
    category: "Frontend",
    desc: "Contributed to frontend development with a focus on delivering a seamless and visually appealing user experience with responsive case study sections.",
    client: "Blak Studio",
    completion: "3 months",
    tools: "React, CSS, Figma",
    link: "#",
  },
  {
    title: "Massa Dubai",
    category: "Web Design",
    desc: "Developed a responsive website using HTML and CSS, ensuring a visually appealing design across all devices with clean code structure.",
    client: "Massa Dubai",
    completion: "2 months",
    tools: "HTML, CSS, JavaScript",
    link: "#",
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

        <div className="max-w-5xl mx-auto">
          <div className="bg-background rounded-2xl overflow-hidden border border-border shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 transition-opacity duration-500 ease-in-out" key={current}>
              {/* Left: Image placeholder */}
              <div className="aspect-square md:aspect-auto bg-muted flex items-center justify-center min-h-[300px] md:min-h-[450px] rounded-tl-2xl rounded-bl-none md:rounded-bl-2xl rounded-tr-2xl md:rounded-tr-none animate-fade-in">
                <span className="text-muted-foreground text-sm">Project Preview</span>
              </div>

              {/* Right: Details */}
              <div className="p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-1">
                    <p className="text-xs uppercase tracking-widest text-primary font-medium">{project.category}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors shrink-0"
                      aria-label={`Visit ${project.title}`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                  <h3 className="heading-sm text-primary mb-4">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.desc}</p>
                </div>

                {/* Meta info */}
                <div className="mt-8 border-t border-border">
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Client</span>
                    <span className="text-sm text-foreground">{project.client}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Completion Time</span>
                    <span className="text-sm text-foreground">{project.completion}</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Tools</span>
                    <span className="text-sm text-foreground">{project.tools}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors" aria-label="Previous">
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
            <button onClick={next} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors" aria-label="Next">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
