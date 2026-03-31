import "../common.css"
import "./SkillsSection.css";
import htmlImg from "../../../assets/html-logo.svg"
import cssImg from "../../../assets/css-logo.svg"
import twImg from "../../../assets/tailwind-icon.svg"
import jsImg from "../../../assets/javascript-logo.svg"
import bootImg from "../../../assets/bootstrap-logo.svg"
import sassImg from "../../../assets/sass-icon.svg"
import wpImg from "../../../assets/wordpress-logo.svg"
import wpeleImg from "../../../assets/elementor-logo.svg"
import figImg from "../../../assets/figma-icon.svg"
import psImg from "../../../assets/photoshop-icon.svg"
import ghImg from "../../../assets/github-icon.svg"
import reactImg from "../../../assets/react-js-logo.svg"
import nextImg from "../../../assets/next-icon.svg"
import vueImg from "../../../assets/vue-icon.svg"
import trelloImg from "../../../assets/trello-icon.svg"
import bitbucketImg from "../../../assets/bitbucket-icon.svg"


const techIcons = [
  { image: htmlImg, label: "HTML" },
  { image: cssImg, label: "CSS" },
  { image: jsImg, label: "JavaScript" },
  { image: twImg, label: "Tailwind CSS" },
  { image: bootImg, label: "Bootstrap" },
  { image: sassImg, label: "SASS" },
  { image: wpImg, label: "WordPress" },
  { image: wpeleImg, label: "Elementor" },
  { image: figImg, label: "Figma" },
  { image: psImg, label: "Photoshop" },
  { image: ghImg, label: "Github" },
  { image: reactImg, label: "React JS" },
  { image: nextImg, label: "Next JS" },
  { image: vueImg, label: "Vue JS" },
  { image: trelloImg, label: "Trello" },
  { image: bitbucketImg, label: "Bitbucket" },
];

const technicalSkills = [
  { label: "Front-End", skills: "HTML5, CSS3, JavaScript, jQuery, Bootstrap, Tailwind CSS, Sass/SCSS" },
  { label: "Frameworks & Libraries", skills: "ReactJS, VueJS, NextJS" },
  { label: "CMS & Page Builders", skills: "WordPress, Elementor, WPBakery" },
  { label: "Design Tools", skills: "Figma, Photoshop" },
  { label: "Dev Tools & Workflow", skills: "Git, GitHub, Bitbucket, VS Code" },
];

const nonTechnicalSkills = [
  {
    label: "Soft Skills",
    skills: "Client Communication, Team Collaboration, Leadership, Requirement Analysis, Rational Thinking, Problem Solving",
  },
  {
    label: "Languages",
    skills: "English, Hindi, Gujarati (Full Professional Proficiency)",
  },
];

const SkillsSection = () => (
  <section id="skills" className="skills-section common-section-spacing">
    <div className="container">
      <div className="common-section-header">
        <p className="section-sub-title">Expertise</p>
        <h2 className="section-title">My Skills</h2>
      </div>

      <div className="skills-layout">
        <div className="skills-column">
          <h3 className="skills-column-title">Technical Skills</h3>
          <div className="skills-list">
            {technicalSkills.map(({ label, skills }) => (
              <div key={label} className="skills-list-item">
                <span className="skills-list-label">{label}:</span>
                <p className="skills-list-text">
                  {skills}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-column">
          <h3 className="skills-column-title">Non-Technical Skills</h3>
          <div className="skills-list">
            {nonTechnicalSkills.map(({ label, skills }) => (
              <div key={label} className="skills-list-item">
                <span className="skills-list-label">{label}:</span>
                <p className="skills-list-text">
                  {skills}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="skills-icons-section">
        <h3 className="skills-column-title">Tools & Technologies</h3>
        <div className="skills-icons-grid">
          {techIcons.map(({ image, label }) => (
            <div key={label} className="skills-icon-card" title={label}>
              <img src={image} alt={label} className="skills-icon-image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;

