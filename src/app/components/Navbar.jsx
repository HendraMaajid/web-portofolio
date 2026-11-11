import { useRef } from "react";
import { copy } from "@/data/portfolio";
import Icon from "./Icon";

const destinations = ["about", "experience", "work", "contact"];

export default function Navbar({
  language,
  onLanguageChange,
  theme,
  onThemeChange,
}) {
  const dialog = useRef(null);
  const text = copy[language];

  return (
    <header className="site-header">
      <nav
        className="container nav-bar"
        aria-label={language === "id" ? "Navigasi utama" : "Main navigation"}
      >
        <a href="#top" className="wordmark" aria-label="Hendra Maajid — Home">
          hm<span>.</span>
        </a>
        <div className="desktop-links">
          {destinations.map((id, i) => (
            <a key={id} href={`#${id}`}>
              {text.nav[i]}
            </a>
          ))}
        </div>
        <div className="nav-controls">
          <div
            className="language-switch"
            role="group"
            aria-label={language === "id" ? "Bahasa" : "Language"}
          >
            {["id", "en"].map((value) => (
              <button
                key={value}
                type="button"
                lang={value}
                aria-pressed={language === value}
                onClick={() => onLanguageChange(value)}
              >
                {value.toUpperCase()}
              </button>
            ))}
          </div>
          <span className="control-divider" />
          <button
            className="icon-button theme-toggle"
            type="button"
            onClick={() => onThemeChange(theme === "dark" ? "light" : "dark")}
            aria-label={text.theme}
            title={text.theme}
          >
            <Icon name="sun" className="sun-icon" />
            <Icon name="moon" className="moon-icon" />
          </button>
          <button
            className="icon-button menu-toggle"
            type="button"
            onClick={() => dialog.current.showModal()}
            aria-label={text.menu}
            aria-haspopup="dialog"
            aria-controls="mobile-menu"
          >
            <Icon name="menu" />
          </button>
        </div>
      </nav>
      <dialog
        ref={dialog}
        id="mobile-menu"
        className="mobile-dialog"
        aria-labelledby="menu-title"
        onClick={(event) => {
          if (event.target === dialog.current) dialog.current.close();
        }}
      >
        <div className="mobile-panel">
          <div className="mobile-menu-top">
            <span id="menu-title" className="wordmark">
              hm<span>.</span>
            </span>
            <button
              type="button"
              className="icon-button"
              aria-label={text.close}
              onClick={() => dialog.current.close()}
            >
              <Icon name="close" />
            </button>
          </div>
          <nav
            aria-label={
              language === "id" ? "Navigasi seluler" : "Mobile navigation"
            }
          >
            {destinations.map((id, i) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => dialog.current.close()}
              >
                <span>0{i + 1}</span>
                {text.nav[i]}
                <Icon name="diagonal" />
              </a>
            ))}
          </nav>
          <p>
            Hendra Latieful Maajid
            <br />
            <span>Full Stack Developer</span>
          </p>
        </div>
      </dialog>
    </header>
  );
}
