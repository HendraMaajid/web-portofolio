import Image from "next/image";
import portrait from "@/assets/saya.jpg";
import { copy, profile } from "@/data/portfolio";
import Icon from "./Icon";

export default function Header({ language }) {
  const text = copy[language];
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" />
            {text.eyebrow}
          </p>
          <p className="hero-greeting">{text.hello}</p>
          <h1>
            {text.headline[0]}
            <br />
            <span className="serif-accent">{text.headline[1]}</span>
          </h1>
          <p className="hero-intro">{text.intro}</p>
          <div className="hero-actions">
            <a href="#work" className="button button-primary">
              {text.workCta}
              <Icon name="diagonal" />
            </a>
            <a
              href={profile.resume}
              download
              className="button button-secondary"
            >
              {text.cv}
              <Icon name="download" />
            </a>
          </div>
          <div className="hero-socials">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Icon name="github" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Icon name="linkedin" />
            </a>
            <span className="small-divider" />
            <span>
              <Icon name="location" size={15} />
              {profile.location}
            </span>
          </div>
        </div>
        <div className="portrait-composition">
          <div className="portrait-orbit" aria-hidden="true" />
          <div className="portrait-frame">
            <Image
              src={portrait}
              alt={text.portrait}
              priority
              sizes="(max-width: 700px) 80vw, (max-width: 1000px) 40vw, 420px"
              className="portrait-image"
            />
            <div className="portrait-caption">
              <span>HENDRA LATIEFUL MAAJID</span>
              <span>DEVELOPER / INDONESIA</span>
            </div>
          </div>
          <span className="portrait-code" aria-hidden="true">
            <Icon name="code" size={26} />
          </span>
          <div className="focus-note">
            <Icon name="spark" size={26} />
            <div>
              <span>{text.focus}</span>
              <p>{text.focusValue}</p>
            </div>
          </div>
          <span className="portrait-index" aria-hidden="true">
            PORTFOLIO — 2026
          </span>
        </div>
      </div>
      <div className="container hero-bottom">
        <a href="#about">
          <span className="scroll-indicator">
            <Icon name="down" size={16} />
          </span>
          {text.scroll}
        </a>
        <span>
          Laravel <i /> Next.js <i /> AI Integration
        </span>
      </div>
    </section>
  );
}
