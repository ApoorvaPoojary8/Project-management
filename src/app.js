import express from "express";
import cors from "cors";

const app = express();

// basic configurartions
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

//CORS configirations

app.use(
  cors({
    origin: process.env.CORS_ORIGIN ? split(",") : "https://localhost:5173",
    credential: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
// import the routes
import healthCheckRouter from "./routes/healthcheck.routes.js"


app.use("/api/v1/healthcheck",healthCheckRouter)



app.get("/", (req, res) => {
  res.send("Welcome to SprintSync");
});


export default app;
