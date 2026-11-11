import { copy, skills } from "@/data/portfolio";
import Icon from "./Icon";

export default function About({ language }) {
  const text = copy[language];
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <p className="section-label">{text.aboutLabel}</p>
        <div className="about-grid">
          <div>
            <h2 className="section-title">{text.aboutTitle}</h2>
            <div className="about-prose">
              <p>{text.aboutBio}</p>
              <p>{text.aboutDetail}</p>
            </div>
          </div>
          <div className="education-card">
            <div className="education-heading">
              <span className="square-icon">
                <Icon name="education" size={23} />
              </span>
              <span className="eyebrow">{text.education}</span>
            </div>
            <h3>{text.degree}</h3>
            <p className="university">{text.university}</p>
            <p className="education-date">{text.educationDate}</p>
            <div className="education-score">
              <span>{text.gpa}</span>
              <strong>
                3.92<span> / 4.00</span>
              </strong>
            </div>
            <p className="thesis">{text.thesis}</p>
          </div>
        </div>
        <div className="skills-section">
          <p className="eyebrow">{text.skillsLabel}</p>
          <div className="skills-grid">
            {skills.map((group, i) => (
              <div key={i} className="skill-group">
                <Icon
                  name={["code", "layers", "spark", "terminal"][i]}
                  size={23}
                />
                <h3>{text.skillTitles[i]}</h3>
                <div className="skill-tags">
                  {group.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="spoken-languages">
            {text.softSkills}
            <br />
            {text.language}
          </p>
        </div>
      </div>
    </section>
  );
}
