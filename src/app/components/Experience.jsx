import { copy, experience } from "@/data/portfolio";
import Icon from "./Icon";

export default function Experience({ language }) {
  const text = copy[language];
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="section-label">{text.experienceLabel}</p>
            <h2 className="section-title">{text.experienceTitle}</h2>
          </div>
          <p>{text.experienceIntro}</p>
        </div>
        <div className="experience-list">
          {experience.map((job, i) => (
            <article key={job.company} className="experience-item">
              <div className="experience-meta">
                <p className="job-date">{job.dates[language]}</p>
                <p>{job.location}</p>
                <span className="job-index">0{i + 1}</span>
              </div>
              <div className="experience-body">
                <h3>{job.role}</h3>
                <p className="company-name">{job.company}</p>
                <ul>
                  {job.details[language].map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <div className="tags">
                  {job.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <aside className="community-note">
          <Icon name="code" size={25} />
          <div>
            <span className="eyebrow">{text.community}</span>
            <h3>
              {text.communityRole}{" "}
              <span>— HMIF / Paguyuban Sinau Programming</span>
            </h3>
            <p>{text.communityDescription}</p>
          </div>
          <span className="community-date">{text.communityDate}</span>
        </aside>
      </div>
    </section>
  );
}
