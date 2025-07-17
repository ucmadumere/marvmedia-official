import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    const trigger = document.querySelector(".mobile-menu-trigger");
    const menu = document.querySelector(".menu-block");
    const overlay = document.querySelector(".menu-overlay");
    const closeBtn = document.querySelector(".mobile-menu-close");
    const backBtn = document.querySelector(".go-back");
    const submenuParents = document.querySelectorAll(".nav-item-has-children");

    if (!trigger || !menu || !overlay || !closeBtn || !backBtn) return;

    const toggleMenu = () => {
      menu.classList.toggle("active");
      overlay.classList.toggle("active");
      document.body.classList.toggle("menu-open");
    };

    const showSubMenu = (menuItem) => {
      const subMenu = menuItem.querySelector(".sub-menu");
      if (subMenu) {
        subMenu.classList.add("active");
        subMenu.style.display = "block";
        menu.classList.add("sub-menu-open");
      }
    };

    const hideSubMenu = () => {
      const activeSubMenus = menu.querySelectorAll(".sub-menu.active");
      activeSubMenus.forEach((submenu) => {
        submenu.classList.remove("active");
        submenu.style.display = "none";
      });
      menu.classList.remove("sub-menu-open");
    };

    trigger.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", toggleMenu);
    closeBtn.addEventListener("click", toggleMenu);
    backBtn.addEventListener("click", hideSubMenu);

    submenuParents.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (window.innerWidth <= 991) {
          e.preventDefault();
          showSubMenu(item);
        }
      });
    });

    return () => {
      trigger.removeEventListener("click", toggleMenu);
      overlay.removeEventListener("click", toggleMenu);
      closeBtn.removeEventListener("click", toggleMenu);
      backBtn.removeEventListener("click", hideSubMenu);
      submenuParents.forEach((item) => {
        item.removeEventListener("click", showSubMenu);
      });
    };
  }, []);

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
            <div className="menu-overlay" style={{ cursor: "pointer" }}></div>
            <nav className="menu-block" id="append-menu-header">
              <div className="mobile-menu-head">
                <div className="go-back" style={{ cursor: "pointer" }}>
                  <i className="fa fa-angle-left"></i> Back
                </div>
                <div className="current-menu-title"></div>
                <div
                  className="mobile-menu-close"
                  style={{ fontSize: "26px", cursor: "pointer" }}
                >
                  &times;
                </div>
              </div>
              <ul className="site-menu-main">
                <li className="nav-item">
                  <Link className="nav-link-item" to="/">
                    Home
                  </Link>
                </li>

                <li className="nav-item nav-item-has-children">
                  <Link className="nav-link-item">About Us</Link>
                  <ul className="sub-menu">
                    <li className="sub-menu--item">
                      <Link to="/about-us">Our Founder</Link>
                      <Link to="/portfolio">Portfolio</Link>
                      <Link to="/about-us">About</Link>
                      <Link to="/faq">FAQ</Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item nav-item-has-children">
                  <Link className="nav-link-item">Services</Link>
                  <ul className="sub-menu">
                    <li className="sub-menu--item">
                      <Link to="/pricing">Pricing</Link>
                      <Link to="/services">Our Services</Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item nav-item-has-children">
                  <Link className="nav-link-item">Community</Link>
                  <ul className="sub-menu">
                    <li className="sub-menu--item">
                      <Link to="/about-us">Marv Design Space</Link>
                      <Link to="/portfolio">Learn With Marv</Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link className="nav-link-item" to="/blog">
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

          <div
            className="mobile-menu-trigger light"
            style={{ cursor: "pointer" }}
          >
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
}
