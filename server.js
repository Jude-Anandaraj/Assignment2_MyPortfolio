import config from "./config/config.js";
import app from "./server/express.js";
import mongoose from "mongoose";

// Connect to my MongoDB database (Portfolio)
mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri).then(() => {
  console.log("Connected to the database!");
});
mongoose.connection.on("error", () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`);
});

// Home route of the backend
app.get("/", (req, res) => {
  res.json({ message: "Welcome to My Portfolio application." });
});

app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", config.port);
});