import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/db.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 8000;

connectDB()
.then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
})
.catch((err) => {
  console.error("MongoDB connection error", err);
  process.exit(1);
});