import express from "express";
import cors from "cors";
import morgan from "morgan";
import apiRoutes from "./routes/index.js";
import { notFound } from "./middlewares/notFound.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";
import { apiLimiter } from "./middlewares/rateLimiter.js";

const app = express();

app.use(
  cors({
    origin: function (origin, callback) {
      const allowed = [
        "http://localhost:5173",     // local dev
        "http://127.0.0.1:5173"
      ];

      const vercel = /\.vercel\.app$/;   // allow ANY Vercel frontend URL

      // allow requests with no origin (like POSTMAN)
      if (!origin) return callback(null, true);

      if (allowed.includes(origin) || vercel.test(origin)) {
        callback(null, true);
      } else {
        console.log("❌ CORS Blocked:", origin);
        callback(new Error("CORS Not Allowed"));
      }
    },

    methods: ["GET", "POST", "DELETE"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);

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
