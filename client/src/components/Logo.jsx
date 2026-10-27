/*
 * Custom site mark: a hexagon with my initials.
 * It is drawn here so the site does not use another person's or company's logo.
 */
export default function Logo() {
  return (
    <svg className="logo" viewBox="0 0 64 64" aria-hidden="true">
      <polygon points="32,4 56,18 56,46 32,60 8,46 8,18" />
      <text x="32" y="39" textAnchor="middle">
        JA
      </text>
    </svg>
  );
}
