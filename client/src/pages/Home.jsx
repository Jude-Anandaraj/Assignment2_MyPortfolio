import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { missionStatement, profile } from "../data/siteContent.js";

const receiptStorageKey = "contactSubmission";

// Read the last contact form message saved in this browser tab, if any.
function readStoredReceipt() {
  const storedReceipt = sessionStorage.getItem(receiptStorageKey);
  if (!storedReceipt) {
    return null;
  }
  try {
    return JSON.parse(storedReceipt);
  } catch {
    return null;
  }
}

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const [contactReceipt, setContactReceipt] = useState(null);

  useEffect(() => {
    document.title = "Home | Jude Anandaraj";
  }, []);

  // Contact form sends the user here with the captured fields.
  useEffect(() => {
    const redirectedReceipt = location.state?.contactSubmission;
    if (redirectedReceipt) {
      setContactReceipt(redirectedReceipt);
      return;
    }
    setContactReceipt(readStoredReceipt());
  }, [location.state]);

  function dismissReceipt() {
    sessionStorage.removeItem(receiptStorageKey);
    setContactReceipt(null);
    // Clear the router state too, or a page refresh brings the receipt back.
    navigate(location.pathname, { replace: true, state: null });
  }

  return (
    <div className="page">
      {contactReceipt && (
        <section className="receipt" aria-live="polite">
          <p className="kicker">Message received</p>
          <h2>Thanks, {contactReceipt.firstName}.</h2>
          <p>You are back on the home page. This is what the form captured:</p>
          <dl className="receipt-list">
            <div>
              <dt>Name</dt>
              <dd>
                {contactReceipt.firstName} {contactReceipt.lastName}
              </dd>
            </div>
            <div>
              <dt>Contact number</dt>
              <dd>{contactReceipt.contactNumber}</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>{contactReceipt.emailAddress}</dd>
            </div>
            <div>
              <dt>Message</dt>
              <dd>{contactReceipt.message}</dd>
            </div>
          </dl>
          <button className="button button-ghost" type="button" onClick={dismissReceipt}>
            Dismiss
          </button>
        </section>
      )}

      <section className="hero">
        <p className="kicker">Welcome</p>
        <h1>{profile.legalName}</h1>
        <p className="lede">
          {profile.role} at Centennial College, Toronto. Unity, C#, and Blender.
        </p>
        <div className="hero-actions">
          <Link className="button" to="/about">
            About me
          </Link>
          <Link className="button button-ghost" to="/projects">
            Projects
          </Link>
          <Link className="text-link" to="/contact">
            Contact
          </Link>
        </div>
      </section>

      <section className="mission" aria-labelledby="mission-heading">
        <p className="kicker">Mission</p>
        <h2 id="mission-heading">What I am aiming at</h2>
        <blockquote>
          <p>{missionStatement}</p>
        </blockquote>
      </section>

      <section className="home-routes" aria-label="Other pages">
        <Link className="route-card" to="/about">
          <span>01</span>
          <strong>About</strong>
          <p>Name, a short introduction, and my resume.</p>
        </Link>
        <Link className="route-card" to="/projects">
          <span>02</span>
          <strong>Projects</strong>
          <p>No Way Out, 3D assets, and Dark Protocol.</p>
        </Link>
        <Link className="route-card" to="/education">
          <span>03</span>
          <strong>Education</strong>
          <p>Diploma, dates, and courses.</p>
        </Link>
        <Link className="route-card" to="/services">
          <span>04</span>
          <strong>Services</strong>
          <p>Programming, web, games, and 3D assets.</p>
        </Link>
      </section>
    </div>
  );
}
