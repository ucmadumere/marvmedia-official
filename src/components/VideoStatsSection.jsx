import { useEffect, useState } from "react";
import usePageInit from "../hooks/usePageInit";
import CountUp from "react-countup";

export default function VideoStatsSection() {
  usePageInit();

  const [counterKey, setCounterKey] = useState(0);

  // Reset key on component mount (forces CountUp animation)
  useEffect(() => {
    setCounterKey(Date.now()); // You can also use Math.random()
  }, []);

  return (
    <div className="section aximo-section-padding">
      <div id="aximo-counter"></div>
      <div className="container">
        <div className="aximo-section-title">
          <div className="row">
            <div className="col-lg-7">
              <h2 data-aos="fade-right">
                <span className="aximo-title-animation">
                  We make your
                  <span className="aximo-title-icon">
                    <img src="/assets/images/v1/star2.png" alt="star icon" />
                  </span>
                </span>
                business stand out
              </h2>
            </div>
            <div className="col-lg-4 offset-lg-1 d-flex align-items-center">
              <p data-aos="fade-left">
                We work closely with our clients to know their objectives,
                target audience, unique needs, and practical design solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <div
              className="aximo-video-wrap animate__animated animate__fadeInUp"
              data-aos="zoom-in"
              data-wow-delay="0s"
            >
              <img
                src="/assets/images/v1/video-bg.png"
                alt="video background"
              />
              <a
                className="aximo-video-popup play-btn1 video-init"
                href="https://youtu.be/eve0c8Hv8Lw?si=VLed1bmEDohkQLBz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/images/v1/play-btn.svg" alt="Play video" />
              </a>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="aximo-counter-wrap" data-aos="fade-left">
              <div className="aximo-counter-data">
                <h2 className="aximo-counter-number">
                  <CountUp key={counterKey + "-1"} end={5} duration={2} />+
                </h2>
                <p>Years of experience</p>
              </div>
              <div className="aximo-counter-data">
                <h2 className="aximo-counter-number">
                  <CountUp key={counterKey + "-2"} end={50} duration={2} />+
                </h2>
                <p>Clients globally</p>
              </div>
              <div className="aximo-counter-data">
                <h2 className="aximo-counter-number">
                  <CountUp key={counterKey + "-3"} end={5} duration={2} />+
                </h2>
                <p>Countries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
