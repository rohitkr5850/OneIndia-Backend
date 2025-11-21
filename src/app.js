import express from "express";
import cors from "cors";
import morgan from "morgan";
import apiRoutes from "./routes/index.js";
import { notFound } from "./middlewares/notFound.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";
import { apiLimiter } from "./middlewares/rateLimiter.js";

const app = express();

app.use(cors({
  origin: "https://one-india-frontend.vercel.app",
  methods: ["GET", "POST", "DELETE"],
  allowedHeaders: ["Content-Type"],
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use("/api", apiLimiter);
app.use("/api", apiRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
