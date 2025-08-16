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
        headers: req.headers,
        body: req.body,
        params: req.params,
        query: req.query,
      },
    });
  } catch (dbError) {
    console.error("Failed to log error to database:", dbError);
  }
}

module.exports = logError;
