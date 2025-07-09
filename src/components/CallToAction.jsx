import { Link } from "react-router-dom";

export default function CallToAction({
  to = "/contact-us",
  label = "Book a free call",
}) {
  return (
    <Link className="aximo-call-btn" to={to}>
      {label}
      <i className="icon-call"></i>
    </Link>
  );
}
