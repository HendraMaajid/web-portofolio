import { useState } from "react";
import Image from "next/image";
import { copy, projects } from "@/data/portfolio";
import Icon from "./Icon";

const INITIAL_PROJECT_COUNT = 7;

function ProjectVisual({ project, language }) {
  if (project.image)
    return (
      <div className="project-image">
        <Image
          src={project.image}
          alt={`${project.title} — ${language === "id" ? "tampilan aplikasi" : "application screenshot"}`}
          fill
          sizes={
            project.featured
              ? "(max-width: 700px) 90vw, 650px"
              : "(max-width: 700px) 90vw, 580px"
          }
        />
      </div>
    );
  return (
    <div
      className={`project-visual visual-${project.visual}`}
      aria-hidden="true"
    >
      <span className="visual-kicker">{project.type[language]}</span>
      <div className="visual-wordmark">
        <Icon
          name={
            project.visual === "winme"
              ? "layers"
              : project.visual === "carwash"
                ? "spark"
                : "education"
          }
          size={42}
        />
        <span>
          {project.visual === "winme"
            ? "winme"
            : project.visual === "carwash"
              ? "carwash."
              : "eduplatform"}
        </span>
      </div>
      <span className="visual-bottom">
        {project.visual === "winme"
          ? "MARKET / REWARDS / MISSIONS"
          : project.visual === "carwash"
            ? "POINT OF SALES"
            : "LEARN / BUILD / GROW"}
        <Icon name="diagonal" size={18} />
      </span>
    </div>
  );
}

export default function Work({ language }) {
  const text = copy[language];
  const [filter, setFilter] = useState("all");
  const [expanded, setExpanded] = useState(false);
  const matching = projects.filter(
    (project) => filter === "all" || project.category === filter,
  );
  const visible =
    expanded || filter !== "all"
      ? matching
      : matching.slice(0, INITIAL_PROJECT_COUNT);

  return (
    <section id="work" className="section work-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="section-label">{text.workLabel}</p>
            <h2 className="section-title">{text.workTitle}</h2>
          </div>
          <p>{text.workIntro}</p>
        </div>
        <div className="project-toolbar">
          <div
            className="project-filters"
            role="group"
            aria-label={language === "id" ? "Filter proyek" : "Filter projects"}
          >
            {Object.entries(text.filters).map(([value, label]) => (
              <button
                key={value}
                type="button"
                aria-pressed={filter === value}
                onClick={() => {
                  setFilter(value);
                  setExpanded(false);
                }}
              >
                {label}
              </button>
            ))}
          </div>
          <span className="project-count" role="status">
            {matching.length} {text.projectCount}
          </span>
        </div>
        <div className="project-grid" id="project-grid">
          {visible.map((project) => (
            <article
              className={`project-card ${project.featured && filter === "all" ? "project-featured" : ""}`}
              key={project.id}
            >
              <ProjectVisual project={project} language={language} />
              <div className="project-info">
                <p className="project-type">{project.type[language]}</p>
                <h3>{project.title}</h3>
                <p className="project-description">
                  {project.description[language]}
                </p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                {project.url ? (
                  <a
                    className="project-link"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.source ? text.source : text.live}: ${project.title}`}
                  >
                    {project.source ? text.source : text.live}
                    <Icon name="diagonal" size={18} />
                  </a>
                ) : (
                  <span className="project-private">
                    <Icon name="layers" size={15} />
                    {text.internal}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
        {filter === "all" && matching.length > INITIAL_PROJECT_COUNT && (
          <div className="more-projects">
            <button
              type="button"
              className="button button-secondary"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              aria-controls="project-grid"
            >
              {expanded ? text.less : text.more}
              <Icon name={expanded ? "close" : "down"} size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
