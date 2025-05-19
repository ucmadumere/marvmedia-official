import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="aximo-footer-section dark-bg">
      <div className="container">
        <div className="aximo-footer-top aximo-section-padding">
          <div className="row">
            <div className="col-lg-7">
              <div className="aximo-default-content light position-relative">
                <h2>
                  <span className="aximo-title-animation">
                    Let's start a 
                    <span className="aximo-title-icon">
                      <img src="/assets/images/v1/star2.png" alt="" />
                    </span>
                  </span>
                  project together
                </h2>
                <p>
                  We work closely with our clients to understand their objectives, target audience, and unique needs. We use our creative skills to translate these requirements and practical design solutions.
                </p>
                <div className="aximo-info-wrap">
                  <div className="aximo-info">
                    <ul>
                      <li>Give us a call:</li>
                      <li><a href="tel:+1234567890">(123) 456-7890</a></li>
                    </ul>
                  </div>
                  <div className="aximo-info">
                    <ul>
                      <li>Send us an email:</li>
                      <li><a href="mailto:info@mthemeus.com">info@mthemeus.com</a></li>
                    </ul>
                  </div>
                </div>
                <div className="aximo-social-icon social-large">
                  <ul>
                    <li>
                      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <i className="icon-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                        <i className="icon-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <i className="icon-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
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
                <form action="#">
                  <div className="aximo-form-field">
                    <input type="text" placeholder="Your name" />
                  </div>
                  <div className="aximo-form-field">
                    <input type="email" placeholder="Your email address" />
                  </div>
                  <div className="aximo-form-field">
                    <input type="text" placeholder="+088-234-6849" />
                  </div>
                  <div className="aximo-form-field">
                    <textarea name="textarea" placeholder="Write your message here..." />
                  </div>
                  <button id="aximo-submit-btn" type="submit">
                    Send message <span><img src="/assets/images/icon/arrow-right3.svg" alt="" /></span>
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
                <p>&copy; Copyright {new Date().getFullYear()}, All Rights Reserved by MarvMedia</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
