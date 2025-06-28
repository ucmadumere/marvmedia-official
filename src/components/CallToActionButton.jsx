import { Link } from "react-router-dom";

export default function CallToActionButton({ to = "/contact-us", label = "Book a discovery call" }) {
  return (
    <Link className="aximo-call-btn" to={to}>
      {label}
      <i className="icon-call"></i>
    </Link>
  );
}
