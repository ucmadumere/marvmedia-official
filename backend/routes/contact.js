const express = require("express");
const verifyTurnstile = require("../middleware/verifyTurnstile");
const { escapeHtml, validateContact } = require("../utils/contactValidation");
const sendContactEmail = require("../utils/mailer");

const router = express.Router();

router.post("/", verifyTurnstile, async (req, res) => {
  if (req.body.website) {
    return res.json({ success: true, msg: "Message sent successfully" });
  }

  const { fields, errors } = validateContact(req.body);
  if (errors.length) {
    return res.status(400).json({ success: false, msg: errors[0] });
  }

  const { name, email, message } = fields;
  await sendContactEmail({
    from: `"Marv Media Website" <${process.env.EMAIL_USER}>`,
    replyTo: email,
    to: process.env.MAIL_RECEIVER,
    subject: "New Contact Form Submission - Footer",
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `
      <h3>Contact Form Details</h3>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p>${escapeHtml(message)}</p>
    `,
  });

  return res.json({ success: true, msg: "Message sent successfully" });
});

module.exports = router;
