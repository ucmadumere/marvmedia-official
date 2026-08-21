import React from "react";
import CallToAction from "./CallToAction";

export default function CeoHero() {
  return (
    <div className="aximo-hero-section3 pt-0">
      <div className="container">
        <div className="row aximo_screenfix_right">
          {/* Left Content */}
          <div className="col-lg-6 d-flex flex-column align-items-center pt-5">
            <div className="aximo-hero-content3">
              <p>
                <span>I build creatives into CEOs</span>
              </p>
              <h1>Here's how I can help you get to the next level.</h1>
            </div>
            <div className="d-flex justify-content-start" >
              <CallToAction/>
            </div>
          </div>

          {/* Right Thumbnail */}
          <div className="col-lg-6">
            <div className="aximo-hero-thumb3-wrap">
              <div className="aximo-hero-thumb3">
                <img
                  src="/assets/images/v3/hero-thumb.webp"
                  srcSet="/assets/images/v3/hero-thumb-800.webp 800w, /assets/images/v3/hero-thumb.webp 1200w"
                  sizes="(max-width: 991px) 100vw, 50vw"
                  width="1200"
                  height="1460"
                  alt="Marvel Iwezue, founder of Marv Media"
                />

                <div className="aximo-hero-thumb-shape2">
                  <img
                    src="/assets/images/v3/shape-monitor.png"
                    alt=""
                    aria-hidden="true"
                  />
                </div>

                <div className="aximo-hero-thumb-shape3">
                  <img
                    src="/assets/images/v3/shape-ayna.png"
                    alt=""
                    aria-hidden="true"
                  />
                </div>
              </div>

              <div
                className="aximo-hero-thumb-shape1 wow fadeInRight"
                data-wow-delay="0s"
              >
                <img src="/assets/images/v3/star-shape.png" alt="" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-4" />
    </div>
  );
}
