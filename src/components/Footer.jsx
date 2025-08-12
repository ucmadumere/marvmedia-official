import { Link } from "react-router-dom";
import { useState } from "react";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("/api/contactform", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Message sent!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert(data.msg || "Failed to send message");
      }
    } catch (err) {
      alert("Server error. Please try again.");
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
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/share/1Js8Lm71zg/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="icon-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/marvmedia_ng?igsh=NHdscXFzdnZyN3Fu"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="icon-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="icon-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="aximo-hero-shape aximo-footer-shape">
                  <img src="/assets/images/v1/shape1.png" alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="aximo-form-wrap">
                <h4>Send us a message</h4>
                <form onSubmit={handleSubmit}>
                  <div className="aximo-form-field">
                    <input
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="aximo-form-field">
                    <input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="aximo-form-field">
                    <textarea
                      name="textarea"
                      placeholder="Write your message here..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>
                  <button id="aximo-submit-btn" type="submit">
                    Send message{" "}
                    <span>
                      <img src="/assets/images/icon/arrow-right3.svg" alt="" />
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="aximo-footer-bottom">
          <div className="row">
            <div className="col-lg-6">
              <div className="aximo-footer-logo marv-footer">
                <Link to="/">
                  <img src="/assets/images/logo/logo-marv.png" alt="Logo" />
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
