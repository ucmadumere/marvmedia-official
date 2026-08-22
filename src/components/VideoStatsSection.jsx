import usePageInit from "../hooks/usePageInit";
import CountUp from "react-countup";

export default function VideoStatsSection() {
  usePageInit();

  return (
    <div className="section aximo-section-padding video-stats-section">
      <div id="aximo-counter"></div>
      <div className="container">
        <div className="aximo-section-title">
          <h2 data-aos="fade-right" className="text-center">
            We make your brand stand out
          </h2>
          <p data-aos="fade-up" className="video-stats-intro-copy">
            We work closely with our clients to know their objectives, target
            audience, unique needs, and design practical solutions.
          </p>
        </div>

        <div className="row align-items-stretch">
          <div className="col-lg-8 d-flex">
            <div
              className="aximo-video-wrap animate__animated animate__fadeInUp"
              data-aos="zoom-in"
              data-wow-delay="0s"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0 0",
                width: "100%",
                height: "100%",
              }}
            >
              <div
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  height: "100%",
                  aspectRatio: "16/9",
                  overflow: "hidden",
                }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/_UxMZytsTRo?si=CgeS9W6R3rYIDvRc"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  style={{ display: "block", width: "100%", height: "100%" }}
                ></iframe>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="aximo-counter-wrap" data-aos="fade-left">
              <div className="aximo-counter-data">
                <h2 className="aximo-counter-number">
                  <CountUp end={6} duration={2} enableScrollSpy scrollSpyOnce />+
                </h2>
                <p>Years of experience</p>
              </div>
              <div className="aximo-counter-data">
                <h2 className="aximo-counter-number">
                  <CountUp end={50} duration={2} enableScrollSpy scrollSpyOnce />+
                </h2>
                <p>Clients globally</p>
              </div>
              <div className="aximo-counter-data">
                <h2 className="aximo-counter-number">
                  <CountUp end={6} duration={2} enableScrollSpy scrollSpyOnce />+
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
