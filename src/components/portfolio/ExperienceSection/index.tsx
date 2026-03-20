import { Briefcase } from "lucide-react";
import "../common.css"
import "./ExperienceSection.css";

const experiences = [
  {
    company: "Rlogical Techsoft Pvt. Ltd.",
    role: "Senior Web Designer",
    period: "Mar 2021 - Present (5 yrs 1 mos)",
    points: [
      "Developed high-performance frontend solutions using Vue.js, React.js, and WordPress.",
      "Led client communications and played a key role in migrating projects from Vue 2 to Vue 3.",
      "Consistently delivered quality projects on time with a focus on usability and efficiency.",
    ],
  },
  {
    company: "Creole Studios",
    role: "Web Designer",
    period: "Aug 2019 - Dec 2020 (1 yr 5 mos)",
    points: [
      "Worked on modern frontend technologies like Next.js, React.js, and WordPress.",
      "Implemented SCSS for scalable, maintainable styling and enhanced version control practices.",
    ],
  },
  {
    company: "Bliss Web Solution Pvt. Ltd.",
    role: "Web Designer",
    period: "Nov 2018 - Jun 2019 (8 mos)",
    points: [
      "Converted complete PSD designs into fully functional WordPress websites.",
      "Integrated new tools and tech to streamline development and ensure high-quality project delivery.",
    ],
  },
  {
    company: "Mercywell Medart",
    role: "Web Designer & WordPress Developer",
    period: "Jun 2016 - Oct 2018 (2 yrs 5 mos)",
    points: [
      "Converted PSD designs into responsive HTML and WordPress websites with a focus on performance.",
      "Implemented custom functionalities and optimized code, while managing direct client communication.",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="experience-section common-bg common-section-spacing">
    <div className="container">
      <div className="common-section-header">
        <p className="section-sub-title">Career</p>
        <h2 className="section-title">Experience</h2>
      </div>

      <div className="experience-timeline">
        <div className="experience-timeline-line" />

        <div className="experience-list">
          {experiences.map((exp, i) => (
            <div key={i} className="experience-item">
              <div className="experience-badge">
                <span className="experience-badge-wrap">
                  <Briefcase size={14} />
                </span>
              </div>
              <div className="experince-details-wrap">
                <p className="experience-period">{exp.period}</p>
                <h3 className="experience-company">{exp.company}</h3>
                <p className="experience-role">{exp.role}</p>
                <ul className="experience-points">
                  {exp.points.map((p, j) => (
                    <li key={j} className="experience-point">
                      <span className="experience-point-bullet" />
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

