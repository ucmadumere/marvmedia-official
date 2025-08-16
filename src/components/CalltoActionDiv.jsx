import { Link } from "react-router-dom";
import CallToActionButton from "./CallToActionButton";
import BookMarv from "./BookMarv";

export default function CalltoActionDiv() {
  return (
    <div className="section aximo-section-padding3 position-relative pt-4">
      <div className="container">
        <div className="aximo-section-title arimo-font">
          <div className="row">
            <div className="col-lg-7">
              <span className="aximo-subtitle">
                I build creatives into CEOs
              </span>
              <h2>Here's how I can help you get to the next level.</h2>
            </div>
            <div className="col-lg-5 d-flex align-items-end justify-content-end">
              <div className="aximo-title-btn">
                {/* <Link
                  className="aximo-default-btn pill"
                  style={{ background: "#BFF747", color: "#000" }}
                  to="/"
                >
                  Book a session
                </Link> */}
                <BookMarv />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
