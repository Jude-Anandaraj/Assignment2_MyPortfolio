import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { profile } from "../data/siteContent.js";
import Logo from "./Logo.jsx";

const navigationLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/education", label: "Education" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Layout() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the small-screen menu after the user picks a page.
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <header className="site-header">
        <NavLink to="/" className="brand" end>
          <Logo />
          <span className="brand-name">{profile.legalName}</span>
        </NavLink>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
        <nav id="site-nav" className={menuOpen ? "site-nav is-open" : "site-nav"}>
          {navigationLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => (isActive ? "nav-link is-active" : "nav-link")}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main id="content" className="site-main">
        <Outlet />
      </main>
      <footer className="site-footer">
        <p>
          {profile.legalName} · {profile.location}
        </p>
        <p>
          <a href={profile.emailHref}>{profile.email}</a>
          <span aria-hidden="true"> · </span>
          <a href={profile.phoneHref}>{profile.phone}</a>
        </p>
      </footer>
    </div>
  );
}
