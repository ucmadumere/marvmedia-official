import { useEffect, useState } from "react";

import usePageInit from "../hooks/usePageInIt";

export default function ContactFormSection() {
  usePageInit(); // Initialize AOS/WOW animations if you're using them
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle real submission logic here
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // Optionally reset the form
    // setFormData({ name: "", email: "", phone: "", business: "", message: "" });
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
                    <img src="/assets/images/v1/star2.png" alt="star" />
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
                src="/assets/images/contact/contact-thumb.png"
                alt="Contact"
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="aximo-main-form">
              <form onSubmit={handleSubmit}>
                <div className="aximo-main-field">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="aximo-main-field">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="aximo-main-field">
                  <label>Phone No</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="aximo-main-field">
                  <label>Business Name</label>
                  <input
                    type="text"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                  />
                </div>

                <div className="aximo-main-field">
                  <label>What do you need our help with?</label>
                  <select
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
                  <label>Write your message here...</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button id="aximo-main-btn" type="submit">
                  Send Message
                </button>

                {submitted && (
                  <p className="mt-3 text-success">
                    Thank you! We'll be in touch soon.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
