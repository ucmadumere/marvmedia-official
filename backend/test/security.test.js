const test = require("node:test");
const assert = require("node:assert/strict");
const {
  escapeHtml,
  validateContact,
} = require("../utils/contactValidation");

test("normalizes valid contact data", () => {
  const { fields, errors } = validateContact(
    {
      name: "  Ada   Lovelace  ",
      email: " ADA@Example.COM ",
      phone: "+234 800 000 0000",
      business: " Example Ltd ",
      service: " Branding ",
      message: "  I would like to discuss a branding project.  ",
    },
    { full: true }
  );

  assert.deepEqual(errors, []);
  assert.equal(fields.name, "Ada Lovelace");
  assert.equal(fields.email, "ada@example.com");
  assert.equal(fields.service, "Branding");
});

test("rejects malformed submissions", () => {
  const { errors } = validateContact(
    { name: "A", email: "invalid", message: "short", service: "" },
    { full: true }
  );

  assert.equal(errors.length, 4);
});

test("escapes user-controlled HTML before email rendering", () => {
  assert.equal(
    escapeHtml('<script>alert("x")</script>\nHello'),
    "&lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt;<br>Hello"
  );
});
