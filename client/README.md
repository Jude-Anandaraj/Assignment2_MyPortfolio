# Jude Anandaraj - Portfolio

This is my portfolio website for Assignment 1 in COMP229 (Web Application Development). I made it with React and Vite.

Live site: https://jude-anandaraj-portfolio.netlify.app

I am a Game Programming student at Centennial College, so the portfolio is about my game work in Unity, C# and Blender.

## Pages

My site has 6 pages:

- Home - a welcome section, my mission statement and links to the other pages
- About Me - my photo, a short intro about me, my skills and a link to my resume
- Projects - three of my projects (No Way Out, 3D game assets and Dark Protocol)
- Education - my Game Programming diploma and co-op preparation
- Services - what I can do (programming, web development, game development and 3D assets)
- Contact - my contact details and a contact form

I also made my own logo for the navigation bar. It is a hexagon with my initials (JA).

When the contact form is submitted, it checks that all the fields are filled in correctly and then goes back to the home page and shows the message that was entered. It does not actually send an email.

## How to run it

You need Node.js installed (version 20.19 or newer).

```bash
npm install
npm run dev
```

Then open http://localhost:5173 in the browser.

To make a production build:

```bash
npm run build
```

## Deployment

I pushed the project to GitHub and connected the repo to Netlify. Netlify builds it with `npm run build` and publishes the `dist` folder.

## Files

- `src/App.jsx` - the routes for all the pages
- `src/components/` - the layout (header, navigation and footer) and my logo
- `src/pages/` - one file for each page
- `src/data/siteContent.js` - all the text for the site, like my projects, education and contact details
- `src/styles.css` - the styles
- `public/images/` - the images used on the site
- `public/resume/` - my resume PDF

## Built with

- React
- React Router
- Vite
- CSS
