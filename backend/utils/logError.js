const ErrorLog = require("../models/ErrorLog");

async function logError(err, req, statusCode = 500) {
  const safeDetails = {
    requestId: req.requestId,
    route: req.originalUrl,
    method: req.method,
    statusCode,
    errorName: err.name || "Error",
    errorCode: err.code || null,
    responseCode: err.responseCode || null,
    command: err.command || null,
  };

  console.error("Request failed", safeDetails);

  if (ErrorLog.db.readyState !== 1) return;

  try {
    await ErrorLog.create({
      message: err.message || "Unknown error",
      stack: err.stack || null,
      route: req.originalUrl,
      method: req.method,
      statusCode,
      details: {
        ...safeDetails,
        userAgent: req.get("user-agent")?.slice(0, 300),
      },
    });
  } catch (dbError) {
    console.error("Failed to log error to database:", dbError);
  }
}

module.exports = logError;
