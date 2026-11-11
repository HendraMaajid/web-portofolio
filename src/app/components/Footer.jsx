import { copy, profile } from "@/data/portfolio";
import Icon from "./Icon";

export default function Footer({ language }) {
  const text = copy[language];
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-identity">
          <a href="#top" className="wordmark" aria-label={text.back}>
            hm<span>.</span>
          </a>
          <p>
            © {new Date().getFullYear()} {profile.name}
            <span>{text.footer}</span>
          </p>
        </div>
        <div className="footer-links">
          <a href={profile.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
            <Icon name="diagonal" size={13} />
          </a>
          <a href="#top">
            {text.back}
            <Icon name="arrow" className="arrow-up" size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
