import { useState } from "react";
import { copy, profile } from "@/data/portfolio";
import Icon from "./Icon";

export default function Contact({ language }) {
  const text = copy[language];
  const [status, setStatus] = useState("idle");

  async function onSubmit(event) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const formData = new FormData(form);
    if (formData.get("botcheck")) return;
    formData.append("access_key", "933de32b-08d2-425c-a442-faa8206fed17");
    formData.append("subject", "New message from Hendra’s portfolio");
    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        signal: AbortSignal.timeout(15000),
      });
      const data = await response.json();
      if (!response.ok || !data.success)
        throw new Error("Message delivery failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("failed");
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <div className="contact-copy">
          <p className="section-label">{text.contactLabel}</p>
          <h2 className="section-title">{text.contactTitle}</h2>
          <p className="contact-description">{text.contactDescription}</p>
          <a href={`mailto:${profile.email}`} className="contact-email">
            {profile.email}
            <Icon name="diagonal" />
          </a>
          <div className="contact-socials">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="linkedin" size={18} />
              LinkedIn
              <Icon name="diagonal" size={14} />
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <Icon name="github" size={18} />
              GitHub
              <Icon name="diagonal" size={14} />
            </a>
          </div>
        </div>
        <form
          className="contact-form"
          onSubmit={onSubmit}
          aria-busy={status === "sending"}
        >
          <p className="form-caption">
            <Icon name="mail" size={17} />
            {text.or}
          </p>
          <fieldset disabled={status === "sending"}>
            <legend className="sr-only">{text.send}</legend>
            <div className="form-row">
              <label htmlFor="contact-name">
                {text.name}
                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  placeholder={text.namePlaceholder}
                  required
                  maxLength={120}
                />
              </label>
              <label htmlFor="contact-email">
                {text.email}
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder={text.emailPlaceholder}
                  required
                  maxLength={254}
                />
              </label>
            </div>
            <label htmlFor="contact-message">
              {text.message}
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                placeholder={text.messagePlaceholder}
                required
                maxLength={5000}
              />
            </label>
            <input
              type="checkbox"
              name="botcheck"
              className="honeypot"
              tabIndex={-1}
              aria-hidden="true"
            />
            <button type="submit" className="button button-primary">
              {status === "sending" ? text.sending : text.send}
              <Icon name={status === "sent" ? "check" : "diagonal"} size={18} />
            </button>
          </fieldset>
          <p
            className={`form-status ${status === "failed" ? "form-error" : ""}`}
            role="status"
            aria-live="polite"
          >
            {status !== "idle" ? text[status] : ""}
          </p>
        </form>
      </div>
    </section>
  );
}
