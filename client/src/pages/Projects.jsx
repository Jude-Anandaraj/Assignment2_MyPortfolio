import { useEffect } from "react";
import { projects } from "../data/siteContent.js";

/*
 * Projects page: one card for each project in siteContent.js,
 * with an image, the tools used, my role, and the outcome.
 */
export default function Projects() {
  // Set the browser tab title for this page.
  useEffect(() => {
    document.title = "Projects | Jude Anandaraj";
  }, []);

  return (
    <div className="page">
      <header className="page-intro">
        <p className="kicker">Projects</p>
        <h1>My Projects</h1>
        <p className="lede">Three projects with my role and the outcome of each.</p>
      </header>
      <div className="project-list">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <img src={project.image} alt={project.imageAlt} />
            <div className="project-copy">
              <p className="kicker">{project.kind}</p>
              <h2>{project.title}</h2>
              <ul className="skill-list">
                {project.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
              <h3>My role</h3>
              <p>{project.role}</p>
              <h3>Outcome</h3>
              <p>{project.outcome}</p>
              {/* Only show the link if the project has one */}
              {project.href && (
                <p>
                  <a href={project.href} target="_blank" rel="noreferrer">
                    View live
                  </a>
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
