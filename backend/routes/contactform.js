const express = require("express");
const verifyTurnstile = require("../middleware/verifyTurnstile");
const { escapeHtml, validateContact } = require("../utils/contactValidation");
const sendContactEmail = require("../utils/mailer");

const router = express.Router();

router.post("/", verifyTurnstile, async (req, res) => {
  if (req.body.website) {
    return res.json({ success: true, msg: "Message sent successfully" });
  }

  const { fields, errors } = validateContact(req.body, { full: true });
  if (errors.length) {
    return res.status(400).json({ success: false, msg: errors[0] });
  }

  const { name, email, phone, business, service, message } = fields;
  await sendContactEmail({
    from: `"Marv Media Website" <${process.env.EMAIL_USER}>`,
    to: process.env.MAIL_RECEIVER,
    replyTo: email,
    subject: "New Contact Form Submission",
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "N/A"}`,
      `Business: ${business || "N/A"}`,
      `Service: ${service}`,
      "",
      message,
    ].join("\n"),
    html: `
      <h3>Contact Form Details</h3>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || "N/A")}</p>
      <p><strong>Business Name:</strong> ${escapeHtml(business || "N/A")}</p>
      <p><strong>Service Interested In:</strong> ${escapeHtml(service)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message)}</p>
    `,
  });

  return res.json({ success: true, msg: "Message sent successfully" });
});

module.exports = router;
