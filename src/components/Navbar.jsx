import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const trigger = document.querySelector(".mobile-menu-trigger");
    const menu = document.querySelector(".menu-block");
    const overlay = document.querySelector(".menu-overlay");
    const closeBtn = document.querySelector(".mobile-menu-close");

    if (!trigger || !menu || !overlay || !closeBtn) return;

    const toggleMenu = () => {
      menu.classList.toggle("active");
      overlay.classList.toggle("active");
    };

    trigger.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", toggleMenu);
    closeBtn.addEventListener("click", toggleMenu);

    return () => {
      trigger.removeEventListener("click", toggleMenu);
      overlay.removeEventListener("click", toggleMenu);
      closeBtn.removeEventListener("click", toggleMenu);
    };
  }, []);

  const handleDropdownToggle = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const handleSubmenuClick = () => {
    setOpenDropdown(null); // auto-close dropdown
  };

  return (
    <header
      className="site-header aximo-header-section aximo-header1 dark-bg"
      id="sticky-menu"
    >
      <div className="container">
        <nav className="navbar site-navbar">
          <div className="brand-logo">
            <Link to="/">
              <img
                src="/assets/images/logo/logo-marv.png"
                alt="logo"
                className="light-version-logo"
              />
            </Link>
          </div>

          <div className="menu-block-wrapper">
            <div className="menu-overlay"></div>
            <nav className="menu-block" id="append-menu-header">
              <div className="mobile-menu-head">
                <div className="go-back">
                  <i className="fa fa-angle-left"></i>
                </div>
                <div className="current-menu-title"></div>
                <div className="mobile-menu-close">&times;</div>
              </div>

              <ul className="site-menu-main">
                <li className="nav-item">
                  <Link
                    className="nav-link-item"
                    to="/"
                    onClick={handleSubmenuClick}
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item nav-item-has-children">
                  <span
                    className="nav-link-item"
                    onClick={() => handleDropdownToggle("about")}
                  >
                    About Us
                  </span>
                  <ul
                    className="sub-menu"
                    style={{
                      display: openDropdown === "about" ? "block" : "none",
                    }}
                  >
                    <li className="sub-menu--item">
                      <Link to="/about-us" onClick={handleSubmenuClick}>
                        <span className="menu-item-text">Our Founder</span>
                      </Link>
                      <Link to="/portfolio" onClick={handleSubmenuClick}>
                        <span className="menu-item-text">Portfolio</span>
                      </Link>
                      <Link to="/about-us" onClick={handleSubmenuClick}>
                        <span className="menu-item-text">About</span>
                      </Link>
                      <Link to="/faq" onClick={handleSubmenuClick}>
                        <span className="menu-item-text">FAQ</span>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item nav-item-has-children">
                  <span
                    className="nav-link-item"
                    onClick={() => handleDropdownToggle("services")}
                  >
                    Services
                  </span>
                  <ul
                    className="sub-menu"
                    style={{
                      display: openDropdown === "services" ? "block" : "none",
                    }}
                  >
                    <li className="sub-menu--item">
                      <Link to="/pricing" onClick={handleSubmenuClick}>
                        <span className="menu-item-text">Pricing</span>
                      </Link>
                      <Link to="/services" onClick={handleSubmenuClick}>
                        <span className="menu-item-text">Our Services</span>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item nav-item-has-children">
                  <span
                    className="nav-link-item"
                    onClick={() => handleDropdownToggle("community")}
                  >
                    Community
                  </span>
                  <ul
                    className="sub-menu"
                    style={{
                      display: openDropdown === "community" ? "block" : "none",
                    }}
                  >
                    <li className="sub-menu--item">
                      <Link to="/about-us" onClick={handleSubmenuClick}>
                        <span className="menu-item-text">
                          Marv Design Space
                        </span>
                      </Link>
                      <Link to="/portfolio" onClick={handleSubmenuClick}>
                        <span className="menu-item-text">Learn With Marv</span>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link-item"
                    to="/blog"
                    onClick={handleSubmenuClick}
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
            <Link
              className="aximo-default-btn pill aximo-header-btn"
              to="/contact-us"
            >
              Contact Us
            </Link>
          </div>

          <div className="mobile-menu-trigger light">
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
}
