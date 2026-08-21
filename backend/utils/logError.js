const ErrorLog = require("../models/ErrorLog");

async function logError(err, req, statusCode = 500) {
  try {
    await ErrorLog.create({
      message: err.message || "Unknown error",
      stack: err.stack || null,
      route: req.originalUrl,
      method: req.method,
      statusCode,
      details: {
        requestId: req.requestId,
        userAgent: req.get("user-agent")?.slice(0, 300),
      },
    });
  } catch (dbError) {
    console.error("Failed to log error to database:", dbError);
  }
}

module.exports = logError;
