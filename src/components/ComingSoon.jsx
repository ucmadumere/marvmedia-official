import starIcon from "/assets/images/v1/star2.png";

export default function ComingSoon() {
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
