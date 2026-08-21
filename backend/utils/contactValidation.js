const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^[+\d][\d\s().-]{6,29}$/;

const normalizeText = (value, maxLength, multiline = false) => {
  if (typeof value !== "string") return "";
  const normalized = value
    .normalize("NFKC")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .trim();

  const whitespaceNormalized = multiline
    ? normalized.replace(/\r\n?/g, "\n")
    : normalized.replace(/\s+/g, " ");

  return whitespaceNormalized.slice(0, maxLength);
};

const normalizeEmail = (value) =>
  normalizeText(value, 254).toLowerCase();

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/\n/g, "<br>");

const validateContact = (body, { full = false } = {}) => {
  const fields = {
    name: normalizeText(body.name, 100),
    email: normalizeEmail(body.email),
    message: normalizeText(body.message, 5000, true),
    phone: normalizeText(body.phone, 30),
    business: normalizeText(body.business, 150),
    service: normalizeText(body.service, 100),
  };
  const errors = [];

  if (fields.name.length < 2) errors.push("Please enter your name.");
  if (!EMAIL_PATTERN.test(fields.email)) {
    errors.push("Please enter a valid email address.");
  }
  if (fields.message.length < 10) {
    errors.push("Your message must be at least 10 characters.");
  }
  if (fields.phone && !PHONE_PATTERN.test(fields.phone)) {
    errors.push("Please enter a valid phone number.");
  }
  if (full && !fields.service) errors.push("Please select a service.");

  return { fields, errors };
};

module.exports = { escapeHtml, validateContact };
