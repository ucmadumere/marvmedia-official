import { Link } from "react-router-dom";

export default function BookMarv({
  to = "https://calendar.app.google/zb7U8uzroA11x5At8",
  label = "Book a discovery call",
}) {
  return (
    <Link className="aximo-call-btn" to={to}>
      {label}
      <i className="icon-call"></i>
    </Link>
  );
}
