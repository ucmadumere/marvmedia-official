import { useEffect, useState } from "react";
import logoWhite from "/assets/images/logo/logo-white.svg";
import starIcon from "/assets/images/v1/star2.png";

export default function ComingSoon() {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-12-31T23:59:59");
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0"
        ),
        hours: String(
          Math.floor((difference / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
          2,
          "0"
        ),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Logo Section */}
      {/* <div className="aximo-logo-section">
        <div className="container">
          <a href="/">
            <img src={logoWhite} alt="Logo" />
          </a>
        </div>
      </div> */}

      {/* Coming Soon Section */}
      <div className="section aximo-section-padding">
        <div className="container">
          <div className="aximo-coming-title">
            <h2>
              Exciting things are
              <span className="aximo-title-animation">
                coming soon!
                <span className="aximo-title-icon">
                  <img src={starIcon} alt="Star" />
                </span>
              </span>
            </h2>
            <p>
              Get notified when we launch something new for you! Enter your
              email address here and stay tuned with us.
            </p>
          </div>

          {/* Countdown Timer */}
          {/* <div className="aximo-countdown-wrap">
            {["days", "hours", "minutes", "seconds"].map((unit) => (
              <div className="aximo-countdown-item" key={unit}>
                <div className={`countdown-${unit}`}>
                  <div className="number">{timeLeft[unit]}</div>
                </div>
                <p>{unit.charAt(0).toUpperCase() + unit.slice(1)}</p>
              </div>
            ))}
          </div> */}

          {/* Newsletter Form */}
          <form onSubmit={(e) => e.preventDefault()}>
            <div
              className="aximo-coming-newsletter wow fadeInUpX"
              data-wow-delay="0.1s"
            >
              <input type="email" placeholder="Enter your email" required />
              <button type="submit" id="aximo-notified-btn">
                Get Notified
              </button>
              <p>
                We do not share your information with any third party & no spam*
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
