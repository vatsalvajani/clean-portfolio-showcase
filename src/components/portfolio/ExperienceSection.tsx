import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Rlogical Techsoft Pvt. Ltd.",
    role: "Senior Web Designer",
    period: "Mar 2021 – Present (4 yrs 6 mos)",
    points: [
      "Developed high-performance frontend solutions using Vue.js, React.js, and WordPress.",
      "Led client communications and played a key role in migrating projects from Vue 2 to Vue 3.",
      "Consistently delivered quality projects on time with a focus on usability and efficiency.",
    ],
  },
  {
    company: "Creole Studios",
    role: "Web Designer",
    period: "Aug 2019 – Dec 2020 (1 yr 5 mos)",
    points: [
      "Worked on modern frontend technologies like Next.js, React.js, and WordPress.",
      "Implemented SCSS for scalable, maintainable styling and enhanced version control practices.",
    ],
  },
  {
    company: "Bliss Web Solution Pvt. Ltd.",
    role: "Web Designer",
    period: "Nov 2018 – Jun 2019 (8 mos)",
    points: [
      "Converted complete PSD designs into fully functional WordPress websites.",
      "Integrated new tools and tech to streamline development and ensure high-quality project delivery.",
    ],
  },
  {
    company: "Mercywell Medart",
    role: "Web Designer & WordPress Developer",
    period: "Jun 2016 – Oct 2018 (2 yrs 5 mos)",
    points: [
      "Converted PSD designs into responsive HTML and WordPress websites with a focus on performance.",
      "Implemented custom functionalities and optimized code, while managing direct client communication.",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding">
    <div className="container max-w-3xl">
      <div className="text-center mb-12">
        <p className="text-sm uppercase tracking-widest text-primary font-medium mb-2">Career</p>
        <h2 className="heading-md">Experience</h2>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-12 md:pl-16">
              <div className="absolute left-0 md:left-2 top-1 w-8 h-8 rounded-full bg-accent border-2 border-primary flex items-center justify-center">
                <Briefcase size={14} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-primary font-medium uppercase tracking-wider mb-1">{exp.period}</p>
                <h3 className="text-lg font-semibold font-heading">{exp.company}</h3>
                <p className="text-sm text-body-light mb-3">{exp.role}</p>
                <ul className="space-y-1.5">
                  {exp.points.map((p, j) => (
                    <li key={j} className="text-sm text-body-light leading-relaxed flex gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
