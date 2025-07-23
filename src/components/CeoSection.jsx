import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import CallToActionButton from "./CallToActionButton";
import CallToAction from "./CallToAction";

export default function CeoSection() {
  // Initialize AOS on mount and refresh on re-render
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  return (
    <div className="section aximo-section-padding2 pt-0">
      <div className="container">
        <div className="row">
          {/* Image Column */}
          <div className="col-lg-5" data-aos="fade-right" data-aos-delay="100">
            <div className="aximo-content-thumb">
              <img
                src="/assets/images/v3/marvel.jpg"
                alt="Marvel Iwezue"
                style={{ borderRadius: "30px" }} 
              />
              <div className="aximo-thumb-shape1">
                <img
                  src="/assets/images/v3/shape2.png"
                  alt="Decorative Shape"
                />
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div
            className="col-lg-6 offset-lg-1"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="aximo-default-content familjen-grotesk">
              <h2>Meet the founder</h2>
              <p>
                From intern to freelancer, to agency CEO, Marvel’s journey is a
                roadmap for every creative ready to leap. With over 5 years in
                the industry, she mentors creatives and builds sustainable
                systems for content-led businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
