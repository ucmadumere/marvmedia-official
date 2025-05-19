import usePageInit from "../hooks/usePageInIt";
import CountUp from "react-countup";

export default function VideoStatsSection() {
  usePageInit();

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
                We work closely with our clients to know their objectives, target audience,
                unique needs, and practical design solutions.
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
              <img src="/assets/images/v1/video-bg.png" alt="video background" />
              <a
                className="aximo-video-popup play-btn1 video-init"
                href="https://www.youtube.com/watch?v=Vx2aLNgGoAE"
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
                  <CountUp end={15} duration={2} />+
                </h2>
                <p>Years of experience</p>
                
              </div>
              <div className="aximo-counter-data">
                <h2 className="aximo-counter-number">
                  <CountUp end={120} duration={2} />k
                </h2>
                <p>Successful projects</p>
                
              </div>
              <div className="aximo-counter-data">
                <h2 className="aximo-counter-number">
                  <CountUp end={100} duration={2} />%
                </h2>
                <p>Client satisfaction rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
