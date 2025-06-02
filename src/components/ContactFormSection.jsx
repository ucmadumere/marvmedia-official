import { useEffect } from "react";
import usePageInit from "../hooks/usePageInIt";

export default function ContactFormSection() {
  usePageInit(); // Initialize AOS/WOW animations if you're using them

  return (
    <div className="section aximo-section-padding">
      <div className="container">
        {/* Section Title */}
        <div className="row">
          <div className="col-lg-8">
            <div className="aximo-section-title">
              <h2>
                <span className="aximo-title-animation">
                  Contact us for a{" "}
                  <span className="aximo-title-icon" data-aos="fade-left" data-aos-delay="200">
                    <img src="/assets/images/v1/star2.png" alt="star" />
                  </span>
                </span>
                personal experience
              </h2>
            </div>
          </div>
        </div>

        {/* Contact Form and Image */}
        <div className="row">
          <div className="col-lg-5 order-lg-2">
            <div className="aximo-contact-thumb" data-aos="fade-left" data-aos-delay="200">
              <img src="/assets/images/contact/contact-thumb.png" alt="Contact" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="aximo-main-form">
              <form action="#" onSubmit={(e) => e.preventDefault()}>
                <div className="aximo-main-field">
                  <label>Your name</label>
                  <input type="text" name="name" required />
                </div>
                <div className="aximo-main-field">
                  <label>Email Address</label>
                  <input type="email" name="email" required />
                </div>
                <div className="aximo-main-field">
                  <label>Phone No</label>
                  <input type="text" name="phone" />
                </div>
                <div className="aximo-main-field">
                  <label>Write your message here...</label>
                  <textarea name="message" rows="4" required></textarea>
                </div>
                <button id="aximo-main-btn" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
