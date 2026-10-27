import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

// Start the React app inside the <div id="root"> in index.html.
// StrictMode shows extra warnings in development to help find mistakes.
const rootElement = document.getElementById("root");
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
