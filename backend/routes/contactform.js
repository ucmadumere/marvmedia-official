const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, phone, business, service, message } = req.body;

  // Log to verify backend is receiving all fields
  console.log("Received form data:", req.body);

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ msg: "Name, email, and message are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "mail.enmail.co",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.MAIL_RECEIVER,
      subject: "New Contact Form Submission",
      html: `
        <h3>You received a new message from the contact form:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Business Name:</strong> ${business || "N/A"}</p>
        <p><strong>Service Interested In:</strong> ${service || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({ msg: "Message sent successfully!" });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({ msg: "Something went wrong. Please try again." });
  }
});

module.exports = router;
