import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BookMarv from "./BookMarv";

export default function SeoSection() {
  // Initialize AOS on mount and refresh on re-render
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  return (
    <div className="section aximo-section-padding2">
      <div className="container">
        <div className="row">
          {/* Image Column */}
          <div className="col-lg-5" data-aos="fade-right" data-aos-delay="100">
            <div className="aximo-content-thumb founder-portrait-wrap">
              <img
                className="founder-portrait"
                src="/assets/images/v3/founder.jpg"
                width="2832"
                height="4240"
                loading="lazy"
                alt="Marvel Iwezue"
                style={{ borderRadius: "30px" }}
              />
              <div className="aximo-thumb-shape1">
                <img
                  src="/assets/images/v3/shape2.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
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
            <div className="aximo-default-content familjen-grotesk founder-copy">
              <h2>Meet the founder</h2>
              <p>
                Marvel Iwezue is a serial entrepreneur, a meticulous creative
                project manager, and a passionate social impact leader.
              </p>
              <p>
                With over 5 years in media and marketing, she’s guided brands to
                remarkable growth in visibility, engagement, and profits,
                leveraging intelligent content strategy, compelling digital
                storytelling, and a deep understanding of audience psychology.
              </p>
              <p>
                A minimalist at heart with a passion for holistic living, Marvel
                is just as invested in the well-being of people as she is in
                driving outstanding performance.
              </p>
            </div>

            <div className="founder-call-action">
              <BookMarv />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
