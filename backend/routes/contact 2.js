const express = require("express");
const nodemailer = require("nodemailer");
const logError = require("../utils/logError");
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: process.env.SMTP_PORT == 465,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      })

    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.MAIL_RECEIVER,
      subject: "New Contact Form Submission - Footer",
      html: `
        <h3>Contact Form Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({ msg: "Message sent successfully!" });
  } catch (error) {
    await logError(error, req, 500);
    res.status(500).json({ msg: "Something went wrong. Please try again." });
  }
});

module.exports = router;
