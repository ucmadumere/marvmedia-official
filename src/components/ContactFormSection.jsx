import { useState } from "react";
import usePageInit from "../hooks/usePageInit";
import { API_URL } from "../utils/api";
import Turnstile from "./Turnstile";

export default function ContactFormSection() {
  usePageInit(); // Initialize AOS/WOW animations if used

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    service: "",
    message: "",
    website: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileResetKey, setTurnstileResetKey] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSubmitted(false);

    if (import.meta.env.VITE_TURNSTILE_SITE_KEY && !turnstileToken) {
      setError("Please complete the spam protection check.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, turnstileToken }),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          business: "",
          service: "",
          message: "",
          website: "",
        });
        setTurnstileToken("");
        setTurnstileResetKey((key) => key + 1);
      } else {
        setError(
          data.msg ||
            data.error ||
            data.message ||
            "Something went wrong. Please try again."
        );
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="section aximo-section-padding">
      <div className="container">
        {/* Section Title */}
        <div className="row">
          <div className="col-lg-8">
            <div className="aximo-section-title">
              <h2>
                <span className="aximo-title-animation">
                  Let’s Start Something Great{" "}
                  <span
                    className="aximo-title-icon"
                    data-aos="fade-left"
                    data-aos-delay="200"
                  >
                    <img src="/assets/images/v1/star2.png" alt="" aria-hidden="true" />
                  </span>
                </span>
              </h2>
            </div>
          </div>
        </div>

        {/* Contact Form and Image */}
        <div className="row">
          <div className="col-lg-5 order-lg-2">
            <div
              className="aximo-contact-thumb"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <img
                src="/assets/images/contact/contact-thumb.webp"
                srcSet="/assets/images/contact/contact-thumb-800.webp 800w, /assets/images/contact/contact-thumb.webp 912w"
                sizes="(max-width: 991px) 100vw, 50vw"
                width="912"
                height="1461"
                loading="lazy"
                alt="Marv Media team member ready to discuss a client project"
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="aximo-main-form">
              <form onSubmit={handleSubmit}>
                <div
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-10000px" }}
                >
                  <label htmlFor="contact-website">Website</label>
                  <input
                    id="contact-website"
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    tabIndex="-1"
                    autoComplete="off"
                  />
                </div>
                <div className="aximo-main-field">
                  <label htmlFor="contact-name">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    maxLength="120"
                    required
                  />
                </div>

                <div className="aximo-main-field">
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    maxLength="254"
                    required
                  />
                </div>

                <div className="aximo-main-field">
                  <label htmlFor="contact-phone">Phone No</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    maxLength="40"
                  />
                </div>

                <div className="aximo-main-field">
                  <label htmlFor="contact-business">Business Name</label>
                  <input
                    id="contact-business"
                    type="text"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    autoComplete="organization"
                    maxLength="160"
                  />
                </div>

                <div className="aximo-main-field">
                  <label htmlFor="contact-service">What do you need our help with?</label>
                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    style={{
                      borderRadius: "50px",
                      padding: "10px",
                      border: "1px solid #000",
                      width: "100%",
                      outline: "none",
                      appearance: "none",
                      WebkitAppearance: "none",
                      MozAppearance: "none",
                    }}
                  >
                    <option value="">Select a service</option>
                    <option value="Branding">Branding</option>
                    <option value="Social Media Management">
                      Social Media Management
                    </option>
                    <option value="Content Creation">Content Creation</option>
                    <option value="Web Design">Web Design</option>
                    <option value="SEO">SEO</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                  </select>
                </div>

                <div className="aximo-main-field">
                  <label htmlFor="contact-message">Write your message here...</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    minLength="10"
                    maxLength="5000"
                  ></textarea>
                </div>

                <Turnstile
                  onTokenChange={setTurnstileToken}
                  resetKey={turnstileResetKey}
                />

                <button id="aximo-main-btn" type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {submitted && (
                  <p className="mt-3 text-success" role="status" aria-live="polite">
                    ✅ Thank you! We'll be in touch soon.
                  </p>
                )}
                {error && <p className="mt-3 text-danger" role="alert">❌ {error}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
