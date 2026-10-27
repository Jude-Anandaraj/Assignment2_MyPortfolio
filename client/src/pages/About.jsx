import { useEffect } from "react";
import { aboutParagraph, profile, skills } from "../data/siteContent.js";

/*
 * About Me page: my name, photo, a short paragraph about me,
 * my skills, and links to my resume and earlier portfolio.
 */
export default function About() {
  // Set the browser tab title for this page.
  useEffect(() => {
    document.title = "About Me | Jude Anandaraj";
  }, []);

  return (
    <div className="page">
      <header className="page-intro">
        <p className="kicker">About me</p>
        <h1>{profile.legalName}</h1>
      </header>

      <div className="about-layout">
        <figure className="portrait">
          <img src="/images/jude.png" alt="Portrait of Jude Anandaraj" />
          <figcaption>{profile.legalName}</figcaption>
        </figure>
        <div>
          <p className="lede">{aboutParagraph}</p>
          {/* One tag for each skill in siteContent.js */}
          <ul className="skill-list">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
          {/* Both links open in a new tab */}
          <p className="hero-actions">
            <a className="button" href={profile.resumePath} target="_blank" rel="noreferrer">
              Resume (PDF)
            </a>
            <a
              className="button button-ghost"
              href={profile.livePortfolio}
              target="_blank"
              rel="noreferrer"
            >
              Live portfolio
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
