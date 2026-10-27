// Settings for the server. The process.env values are used first if they are set,
// otherwise the default values below are used.
const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "jude_portfolio_secret_key",
  // "Portfolio" at the end of the url is the name of my database
  mongoUri:
    process.env.MONGODB_URI ||
    "mongodb+srv://gerryn017_db_user:wt7wYLAikO84PUGW@cluster0.f4oypdl.mongodb.net/Portfolio?retryWrites=true&w=majority&appName=Cluster0",
};

export default config;