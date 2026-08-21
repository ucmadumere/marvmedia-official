require("dotenv").config();

const crypto = require("crypto");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const { rateLimit } = require("express-rate-limit");
const contactRoutes = require("./routes/contact");
const contactFormRoutes = require("./routes/contactform");
const logError = require("./utils/logError");

const app = express();
const PORT = Number(process.env.PORT || 5000);
const allowedOrigins = (process.env.ALLOWED_ORIGINS || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim().replace(/\/+$/, ""))
  .filter(Boolean);

if (process.env.TRUST_PROXY) {
  app.set("trust proxy", Number(process.env.TRUST_PROXY) || false);
}

app.disable("x-powered-by");
app.use(helmet());
app.use((req, res, next) => {
  req.requestId = crypto.randomUUID();
  res.setHeader("X-Request-Id", req.requestId);
  next();
});
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin.replace(/\/+$/, ""))) {
        return callback(null, true);
      }
      const error = new Error("Origin is not allowed by CORS");
      error.statusCode = 403;
      return callback(error);
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    maxAge: 86400,
  })
);

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: { success: false, msg: "Too many requests. Please try again later." },
});
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    success: false,
    msg: "Too many contact attempts. Please wait before trying again.",
  },
});

app.use("/api", apiLimiter);
app.use(express.json({ limit: "20kb", strict: true }));

app.get("/api/health", (req, res) => {
  const databaseState = mongoose.connection.readyState;
  res.status(databaseState === 1 ? 200 : 503).json({
    status: databaseState === 1 ? "ok" : "degraded",
    database: databaseState === 1 ? "connected" : "disconnected",
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/contact", contactLimiter, contactRoutes);
app.use("/api/contactform", contactLimiter, contactFormRoutes);

app.use("/api", (req, res) => {
  res.status(404).json({ success: false, msg: "API endpoint not found." });
});

app.use(async (error, req, res, next) => {
  if (res.headersSent) return next(error);

  const statusCode =
    error.type === "entity.too.large"
      ? 413
      : error instanceof SyntaxError && error.status === 400
        ? 400
        : error.statusCode || 500;

  if (statusCode >= 500) await logError(error, req, statusCode);

  return res.status(statusCode).json({
    success: false,
    msg:
      statusCode === 413
        ? "Request payload is too large."
        : statusCode === 400
          ? "Invalid request payload."
          : statusCode === 403
            ? "Request origin is not allowed."
            : "Something went wrong. Please try again later.",
    requestId: req.requestId,
  });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
