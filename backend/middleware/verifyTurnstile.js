const verifyTurnstile = async (req, res, next) => {
  const required = process.env.REQUIRE_TURNSTILE === "true";
  if (!required) return next();

  if (!process.env.TURNSTILE_SECRET_KEY) {
    return res.status(503).json({
      success: false,
      msg: "Spam protection is temporarily unavailable.",
    });
  }

  const token = req.body.turnstileToken;
  if (!token || typeof token !== "string") {
    return res.status(400).json({
      success: false,
      msg: "Please complete the spam protection check.",
    });
  }

  const formData = new URLSearchParams({
    secret: process.env.TURNSTILE_SECRET_KEY,
    response: token,
  });
  if (req.ip) formData.set("remoteip", req.ip);

  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: formData,
        signal: AbortSignal.timeout(5000),
      }
    );
    const result = await response.json();

    if (!result.success) {
      console.warn("Turnstile verification failed", {
        errorCodes: result["error-codes"] || [],
        hostname: result.hostname || null,
      });
      return res.status(400).json({
        success: false,
        msg: "Spam protection verification failed. Please try again.",
      });
    }

    return next();
  } catch (error) {
    error.statusCode = 502;
    return next(error);
  }
};

module.exports = verifyTurnstile;
