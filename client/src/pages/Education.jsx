import { useEffect } from "react";
import { education } from "../data/siteContent.js";

/*
 * Education page: each qualification with its dates, status,
 * program, school, and courses.
 */
export default function Education() {
  // Set the browser tab title for this page.
  useEffect(() => {
    document.title = "Education | Jude Anandaraj";
  }, []);

  return (
    <div className="page">
      <header className="page-intro">
        <p className="kicker">Education</p>
        <h1>Qualifications</h1>
        <p className="lede">The diploma, the years, and the school.</p>
      </header>
      <ol className="education-list">
        {education.map((item) => (
          <li className="education-item" key={item.id}>
            <p className="education-years">
              {item.start}
              <span> – </span>
              {item.end}
            </p>
            <div>
              <p className="kicker">{item.status}</p>
              <h2>{item.credential}</h2>
              <p className="education-program">{item.program}</p>
              <p>
                {item.school}, {item.place}
              </p>
              <p>{item.detail}</p>
              {/* Only show the courses heading when there are courses to list */}
              {item.courses.length > 0 && (
                <>
                  <h3>Courses</h3>
                  <ul className="course-list">
                    {item.courses.map((course) => (
                      <li key={course}>{course}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
