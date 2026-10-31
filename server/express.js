
import express from "express";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";

// Import all API routes
import userRoutes from "./routes/user.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import projectRoutes from "./routes/project.routes.js";
import qualificationRoutes from "./routes/qualification.routes.js";

const app = express();

// Security middleware
app.use(helmet());

// Enable CORS for React frontend
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);

// Parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Other middleware
app.use(cookieParser());
app.use(compress());

// Register all API routes 
app.use("/", userRoutes);
app.use("/", contactRoutes);
app.use("/", projectRoutes);
app.use("/", qualificationRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error("Express error:", err);

  const status =
    err.status >= 400 && err.status < 600
      ? err.status
      : 500;

  return res.status(status).json({
    error:
      status >= 500
        ? "Internal server error"
        : err.message
  });
});

export default app;
