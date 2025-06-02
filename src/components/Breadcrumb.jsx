import { Link } from "react-router-dom";

export default function Breadcrumb({ title = "Our Services", current = "Our Services" }) {
  return (
    <div className="aximo-breadcrumb">
      <div className="container">
        <h1 className="post__title">{title}</h1>
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li aria-current="page">{current}</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
