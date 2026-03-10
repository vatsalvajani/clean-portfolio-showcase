const skillGroups = [
  {
    category: "Front-End",
    skills: ["HTML5", "CSS3", "jQuery", "Bootstrap", "Tailwind CSS", "Sass/SCSS"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["ReactJS", "VueJS", "NextJS"],
  },
  {
    category: "CMS & Page Builders",
    skills: ["WordPress", "Elementor", "WPBakery"],
  },
  {
    category: "Design Tools",
    skills: ["Figma", "Photoshop"],
  },
  {
    category: "Dev Tools & Workflow",
    skills: ["Git", "GitHub", "Bitbucket", "VS Code"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="container max-w-3xl">
      <div className="text-center mb-12">
        <p className="text-sm uppercase tracking-widest text-primary font-medium mb-2">Expertise</p>
        <h2 className="heading-md">My Skills</h2>
      </div>

      <div className="space-y-8">
        {skillGroups.map((g) => (
          <div key={g.category}>
            <h3 className="text-sm font-semibold font-heading uppercase tracking-wider mb-3">{g.category}</h3>
            <div className="flex flex-wrap gap-2.5">
              {g.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm font-medium rounded-full border border-border bg-background text-body hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
