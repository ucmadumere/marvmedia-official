import { Link } from "react-router-dom";
import { useState } from "react";
import { API_URL_FOOTER } from "../utils/api";
import Turnstile from "./Turnstile";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileResetKey, setTurnstileResetKey] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (import.meta.env.VITE_TURNSTILE_SITE_KEY && !turnstileToken) {
      setFeedback({ type: "error", message: "Please complete the spam protection check." });
      return;
    }

    const formData = { name, email, message, website, turnstileToken };
    setSubmitting(true);
    setFeedback({ type: "", message: "" });

    try {
      const res = await fetch(API_URL_FOOTER, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setFeedback({ type: "success", message: "Message sent! We'll be in touch soon." });
        setName("");
        setEmail("");
        setMessage("");
        setWebsite("");
        setTurnstileToken("");
        setTurnstileResetKey((key) => key + 1);
      } else {
        setFeedback({ type: "error", message: data.msg || "Failed to send message" });
        setTurnstileToken("");
        setTurnstileResetKey((key) => key + 1);
      }
    } catch (err) {
      console.error("Footer form error:", err);
      setFeedback({ type: "error", message: "Server error. Please try again." });
      setTurnstileToken("");
      setTurnstileResetKey((key) => key + 1);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer className="aximo-footer-section dark-bg">
      <div className="container">
        <div className="aximo-footer-top aximo-section-padding">
          <div className="row">
            <div className="col-lg-7">
              <div className="aximo-default-content light position-relative">
                <h2>
                  <span className="aximo-title-animation">
                    Ready to experience{" "}
                    <span className="aximo-title-icon"></span>
                  </span>
                  the Marv Effect?
                </h2>
                <p>
                  We believe in the power of partnership. Let's work together to
                  understand your vision, connect with your audience, and bring
                  your unique story to life on social media. Your goals are our
                  mission.
                </p>
                <div className="aximo-info-wrap">
                  <div className="aximo-info">
                    <ul>
                      <li>Give us a call:</li>
                      <li>
                        <a href="tel:+2349075115148">+234 907 511 5148</a>
                      </li>
                    </ul>
                  </div>
                  <div className="aximo-info">
                    <ul>
                      <li>Send us an email:</li>
                      <li>
                        <a href="mailto:support@marvmedia.ng">
                          support@marvmedia.ng
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="aximo-social-icon social-large">
                  <ul>
                    <li>
                      <a
                        href="http://www.youtube.com/@marvmediang"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Marv Media on YouTube (opens in a new tab)"
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/share/1Js8Lm71zg/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Marv Media on Facebook (opens in a new tab)"
                      >
                        <i className="icon-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/marvmedia_ng?igsh=NHdscXFzdnZyN3Fu"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Marv Media on Instagram (opens in a new tab)"
                      >
                        <i className="icon-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Marv Media on LinkedIn (opens in a new tab)"
                      >
                        <i className="icon-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="aximo-hero-shape aximo-footer-shape">
                  <img src="/assets/images/v1/shape1.png" alt="" aria-hidden="true" />
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="aximo-form-wrap">
                <h4>Send us a message</h4>
                <form onSubmit={handleSubmit}>
                  <div
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-10000px" }}
                  >
                    <label htmlFor="footer-website">Website</label>
                    <input
                      id="footer-website"
                      type="text"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      tabIndex="-1"
                      autoComplete="off"
                    />
                  </div>
                  <div className="aximo-form-field">
                    <label className="visually-hidden" htmlFor="footer-name">Your name</label>
                    <input
                      id="footer-name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      autoComplete="name"
                      maxLength="120"
                      required
                    />
                  </div>
                  <div className="aximo-form-field">
                    <label className="visually-hidden" htmlFor="footer-email">Your email address</label>
                    <input
                      id="footer-email"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="email"
                      maxLength="254"
                      required
                    />
                  </div>
                  <div className="aximo-form-field">
                    <label className="visually-hidden" htmlFor="footer-message">Your message</label>
                    <textarea
                      id="footer-message"
                      name="message"
                      placeholder="Write your message here..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      minLength="10"
                      maxLength="5000"
                    />
                  </div>
                  <Turnstile
                    onTokenChange={setTurnstileToken}
                    resetKey={turnstileResetKey}
                  />
                  <button id="aximo-submit-btn" type="submit" disabled={submitting}>
                    {submitting ? "Sending…" : "Send message"}{" "}
                    <span>
                      <img src="/assets/images/icon/arrow-right3.svg" alt="" aria-hidden="true" />
                    </span>
                  </button>
                  {feedback.message && (
                    <p className={feedback.type === "error" ? "text-danger mt-3" : "text-success mt-3"} role={feedback.type === "error" ? "alert" : "status"}>
                      {feedback.message}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="aximo-footer-bottom">
          <div className="row">
            <div className="col-lg-6">
              <div className="aximo-footer-logo marv-footer">
                <Link to="https://marvmedia.ng/">
                  <img src="/assets/images/logo/logo-marv.png" alt="Marv Media" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="aximo-copywright one">
                <p>
                  &copy; Copyright {new Date().getFullYear()}, All Rights
                  Reserved by MarvMedia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
