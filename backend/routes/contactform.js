const express = require("express");
const nodemailer = require("nodemailer");
const logError = require("../utils/logError");
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, phone, business, service, message } = req.body;

  if (!name || !email || !phone || !business || !service || !message) {
    return res
      .status(400)
      .json({ success: false, error: "All fields are required" });
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
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.MAIL_RECEIVER,
      replyTo: email,
      subject: "New Contact Form Submission",
      html: `
        <h3>Contact Form Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Business Name:</strong> ${business || "N/A"}</p>
        <p><strong>Service Interested In:</strong> ${service || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    await logError(error, req, 500); // save error to DB
    res.status(500).json({ success: false, error: "Failed to send email" });
  }
});

module.exports = router;
