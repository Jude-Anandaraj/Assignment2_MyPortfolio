/*
 * Shared site copy. Pages import this so names, dates, and project
 * facts stay the same everywhere.
 */

export const profile = {
  legalName: "Jude Anandaraj",
  studio: "JGR",
  role: "Game programmer",
  location: "Toronto, ON",
  phone: "437-249-1217",
  phoneHref: "tel:+14372491217",
  email: "gerryn.017@gmail.com",
  emailHref: "mailto:gerryn.017@gmail.com",
  resumePath: "/resume/Jude_Anandaraj_Resume.pdf",
  livePortfolio: "https://jude-anandaraj.github.io/",
};

export const missionStatement =
  "Build playable work: clear movement, honest feedback, and levels that still hold when the timer is running.";

export const aboutParagraph =
  "I am Jude Anandaraj, a Game Programming student at Centennial College in Toronto. I write gameplay in Unity and C#, model assets in Blender, and I am looking for a Winter 2027 co-op as a junior game programmer.";

export const projects = [
  {
    id: "no-way-out",
    title: "No Way Out",
    kind: "Escape-room game",
    image: "/images/no-way-out.png",
    imageAlt: "Cover art for No Way Out, an escape-room game.",
    href: "https://jude-anandaraj.github.io/#games",
    tools: ["Unity", "C#", "Blender"],
    role: "Solo programmer and world builder for a first-person, five-level escape room.",
    outcome:
      "A timed run with walking, crouch, jump, puzzles, pickups, health, scoring, menus, and custom Blender assets in Unity.",
  },
  {
    id: "game-assets",
    title: "3D game assets",
    kind: "Weapons and props",
    image: "/images/game-assets.jpg",
    imageAlt: "An axe and two swords on a workbench.",
    href: "https://jude-anandaraj.github.io/assets.html",
    tools: ["Blender", "Python", "Unity"],
    role: "Modeled game-ready weapons and props, including an axe and two swords, and scripted prep in Blender Python.",
    outcome:
      "Meshes are UV-mapped, shaded, and organized so they import cleanly into Unity levels.",
  },
  {
    id: "dark-protocol",
    title: "Dark Protocol",
    kind: "Horror level",
    image: "/images/dark-protocol.jpg",
    imageAlt: "A narrow concrete hallway lit by one amber lamp.",
    href: "https://jude-anandaraj.github.io/#games",
    tools: ["Unity", "C#"],
    role: "Blocked a claustrophobic horror layout around narrow corridors, echo chambers, and sightlines.",
    outcome:
      "Player guidance comes from geometry and lighting instead of a long tutorial.",
  },
];

export const education = [
  {
    id: "centennial-game",
    credential: "Ontario College Advanced Diploma",
    program: "Game Programming (Co-op)",
    school: "Centennial College",
    place: "Toronto, ON",
    start: "January 2026",
    end: "December 2028",
    status: "In progress",
    detail: "Institutional GPA 4.31 / 4.37. Course work in Unity, C#, 3D assets, programming, SQL, and testing.",
    courses: [
      "C# Programming",
      "2D Games with Unity and C#",
      "Assets for Game Developers",
      "Programming I",
      "Database Concepts (SQL)",
      "Testing and QA",
    ],
  },
  {
    id: "coop-prep",
    credential: "Professional preparation",
    program: "Employment Preparation (COOP 321)",
    school: "Centennial College",
    place: "Toronto, ON",
    start: "Fall 2026",
    end: "Winter 2027",
    status: "In progress",
    detail: "Preparation for a Winter 2027 co-op term.",
    courses: [],
  },
];

export const services = [
  {
    id: "programming",
    title: "Programming",
    image: "/images/programming.png",
    imageAlt: "Abstract lines of code on a dark panel.",
    summary: "C#, Java, and Python. I break a task into pieces, write the code, and debug until the behaviour matches.",
  },
  {
    id: "web",
    title: "Web development",
    image: "/images/web.png",
    imageAlt: "A simple web layout of colored blocks.",
    summary: "HTML, CSS, JavaScript, and React, including this site. Pages that still work on a phone.",
  },
  {
    id: "gameplay",
    title: "Game development",
    image: "/images/game.png",
    imageAlt: "A simple game controller.",
    summary: "Unity gameplay: movement, timers, scoring, puzzles, menus, and HUD with C#.",
  },
  {
    id: "assets",
    title: "3D assets",
    image: "/images/blender.png",
    imageAlt: "Overlapping frames like a modeling viewport.",
    summary: "Blender modeling, UVs, materials, and Python prep for Unity.",
  },
];

export const skills = [
  "C#",
  "Unity",
  "Blender",
  "Python",
  "Java",
  "JavaScript",
  "SQL",
  "HTML",
  "CSS",
  "Git",
];
