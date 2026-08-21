import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <>
    <Seo
      title="Page Not Found"
      description="The requested page could not be found."
      noindex
    />
    <div className="section">
      <div className="container">
        <div className="aximo-errors-wrap">
          <div className="aximo-errors-thumb">
            <img src="/assets/images/about/404.png" alt="404 Not Found" />
          </div>

          <div className="aximo-errors-title">
            <h1 className="h2">
              We can’t find the page{" "}
              <span className="aximo-title-animation">
                you are looking for
                <span className="aximo-title-icon">
                  <img src="/assets/images/v1/star2.png" alt="" aria-hidden="true" />
                </span>
              </span>
            </h1>
          </div>

          <Link
            to="/"
            className="aximo-errors-btn wow fadeInUpX"
            data-wow-delay="0.1s"
          >
            Return to homepage{" "}
            <span>
              <img src="/assets/images/icon/arrow-right.svg" alt="" aria-hidden="true" />
            </span>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
