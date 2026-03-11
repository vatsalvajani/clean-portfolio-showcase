import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiSass,
  SiBootstrap,
  SiJquery,
  SiWordpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiBitbucket,
} from "react-icons/si";

const techIcons = [
  { icon: SiHtml5, color: "#E34F26", label: "HTML5" },
  { icon: SiCss3, color: "#1572B6", label: "CSS3" },
  { icon: SiJavascript, color: "#F7DF1E", label: "JavaScript" },
  { icon: SiReact, color: "#61DAFB", label: "React" },
  { icon: SiVuedotjs, color: "#4FC08D", label: "Vue.js" },
  { icon: SiNextdotjs, color: "#000000", label: "Next.js" },
  { icon: SiTailwindcss, color: "#06B6D4", label: "Tailwind CSS" },
  { icon: SiSass, color: "#CC6699", label: "Sass" },
  { icon: SiBootstrap, color: "#7952B3", label: "Bootstrap" },
  { icon: SiFigma, color: "#F24E1E", label: "Figma" },
  { icon: SiWordpress, color: "#21759B", label: "WordPress" },
  { icon: SiGit, color: "#F05032", label: "Git" },
];

const skillCategories = [
  { label: "Front-End", skills: "HTML5, CSS3, JavaScript, jQuery, Bootstrap, Tailwind CSS, Sass/SCSS" },
  { label: "Frameworks & Libraries", skills: "ReactJS, VueJS, NextJS" },
  { label: "CMS & Page Builders", skills: "WordPress, Elementor, WPBakery" },
  { label: "Design Tools", skills: "Figma, Photoshop" },
  { label: "Dev Tools & Workflow", skills: "Git, GitHub, Bitbucket, VS Code" },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="container max-w-5xl">
      <div className="text-center mb-12">
        <p className="text-sm uppercase tracking-widest text-primary font-medium mb-2">Expertise</p>
        <h2 className="heading-md">My Skills</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Tech Icons Grid */}
        <div className="grid grid-cols-4 gap-5 justify-items-center">
          {techIcons.map(({ icon: Icon, color, label }) => (
            <div
              key={label}
              className="w-16 h-16 rounded-xl bg-card border border-border flex items-center justify-center shadow-sm hover:shadow-md hover:scale-110 transition-all duration-300 cursor-default"
              title={label}
            >
              <Icon size={32} color={color} />
            </div>
          ))}
        </div>

        {/* Skills List */}
        <div className="space-y-4">
          {skillCategories.map(({ label, skills }) => (
            <div key={label} className="flex items-start gap-3">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <p className="text-sm text-body leading-relaxed">
                <span className="font-bold text-foreground font-mono">{label}:</span>{" "}
                {skills}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
